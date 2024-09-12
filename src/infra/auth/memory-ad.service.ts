import { AuthStore } from '../../store/auth-store.interface';
import { AuthAd } from './auth-ad';

export class MemoryAdService implements AuthAd {
  constructor(private readonly storeService: AuthStore) {}
  async connect(): Promise<boolean> {
    this.storeService.setToken('mock token');

    this.storeService.setUsername('Geraldo Silva');
    this.storeService.setUserCode('123456');

    return true;
  }
  async refreshToken(): Promise<string> {
    return 'true';
  }
  async disconnect(): Promise<void> {}

  isAuthenticated(): boolean {
    return true;
  }
}
