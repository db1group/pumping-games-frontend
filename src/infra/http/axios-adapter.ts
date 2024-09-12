import axios, { Axios } from 'axios';
import { HttpClient } from './http-client';

export class AxiosAdapter implements HttpClient {
  private http: Axios;

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
    });
  }

  async get<T>(url: string): Promise<T> {
    return this.http.get(url).then((response) => response.data);
  }

  async post<T>(url: string, data: any): Promise<T> {
    return this.http.post(url, data).then((response) => response.data);
  }

  async put<T>(url: string, data: any): Promise<T> {
    return this.http.put(url, data).then((response) => response.data);
  }

  async delete<T>(url: string): Promise<T> {
    return this.http.delete(url).then((response) => response.data);
  }
}
