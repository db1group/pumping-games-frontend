import { App } from 'vue';

import { authStore } from '../../store/auth-store';
import { AuthStore } from '../../store/auth-store.interface';
import { AUTH_AD, AuthAd } from '../auth/auth-ad';

import { HTTP_CLIENT, HttpClient } from '../http/http-client';
import { AxiosAdapter } from '../http/axios-adapter';
import { KeycloakAdService } from '../auth/keycloak-ad.service';

export class DependencyInjection {
  store: AuthStore;
  authService: AuthAd;
  httpClient: HttpClient;

  constructor() {
    this.store = authStore();
    this.authService = new KeycloakAdService(this.store);
    this.httpClient = new AxiosAdapter();
  }

  async execute(applicationVue: App<Element>) {
    applicationVue.provide(AUTH_AD, this.authService);
    applicationVue.provide(HTTP_CLIENT, this.httpClient);
  }
}
