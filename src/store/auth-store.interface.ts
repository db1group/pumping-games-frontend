export interface AuthStore {
  username: string;
  token: string;
  userRoles: any[];
  setToken(token: string): void;
  setUsername(username: string): void;
  setUserCode(code: string): void;
  setUserRoles(roles: string[]): void;
}
