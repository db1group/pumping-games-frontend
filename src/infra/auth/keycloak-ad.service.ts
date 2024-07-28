import Keycloak, { KeycloakConfig } from 'keycloak-js';
import { AuthStore } from '../../store/auth-store.interface';
import { AuthAd } from './auth-ad';

export class KeycloakAdService implements AuthAd {
  private keycloakInstance: Keycloak;

  constructor(private readonly storeService: AuthStore) {
    this.keycloakInstance = new Keycloak(this.createConfig());
  }

  async connect(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.keycloakInstance
        .init({
          onLoad: 'check-sso',
        })
        .then(async (authenticated) => {
          if (!authenticated) {
            this.keycloakInstance.login();
          } else {
            const clientId =
              this.keycloakInstance.tokenParsed?.resource_access![
                import.meta.env.VITE_KEYCLOAK_AD_CLIENT_ID
              ];

            if (clientId) {
              const userRoles = clientId.roles;
              const userProfile = await this.keycloakInstance.loadUserProfile();

              await this.insertStore(
                this.keycloakInstance.token!,
                userProfile,
                userRoles
              );
            }
          }
          resolve(authenticated);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  async disconnect(): Promise<void> {
    this.keycloakInstance.logout();
  }

  async refreshToken(): Promise<string> {
    this.keycloakInstance.login();
    await this.keycloakInstance.updateToken();
    return this.keycloakInstance.token!;
  }

  public isAuthenticated(): boolean {
    return !!this.keycloakInstance.authenticated;
  }

  private insertStore(token: string, account: any, roles: string[]) {
    return new Promise<void>((resolve) => {
      this.storeService.setToken(token);
      this.storeService.setUsername(`${account.firstName} ${account.lastName}`);
      this.storeService.setUserCode(account.username.split('@')[0]);
      this.storeService.setUserRoles(roles);
      resolve();
    });
  }

  createConfig(): KeycloakConfig {
    return {
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_AD_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_AD_CLIENT_ID,
    };
  }
}
