export const AUTH_AD = Symbol('AUTH_AD');
export interface AuthAd {
  connect(): Promise<boolean>;
  refreshToken(): Promise<string>;
  disconnect(): Promise<void>;
  isAuthenticated(): boolean;
}
