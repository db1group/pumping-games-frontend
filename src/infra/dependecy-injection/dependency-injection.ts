import { App } from 'vue';

import { authStore } from '../../store/auth-store';
import { AuthStore } from '../../store/auth-store.interface';
import { AUTH_AD, AuthAd } from '../auth/auth-ad';
import { KeycloakAdService } from '../auth/keycloak-ad.service';

export class DependencyInjection {
  store: AuthStore;
  authService: AuthAd;

  constructor() {
    this.store = authStore();
    this.authService = new KeycloakAdService(this.store);
  }

  async execute(applicationVue: App<Element>) {
    // TODO: Add more service here
    applicationVue.provide(AUTH_AD, this.authService);
  }
}
