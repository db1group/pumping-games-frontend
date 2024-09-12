import { HttpClient } from '../../../infra/http/http-client';
import { NationEvent } from '../entities/nation-event';

export class NationEventService {
  constructor(private readonly httpClient: HttpClient) {}

  getNationEvents() {
    return this.httpClient.get<NationEventListBackendResponse[]>(
      '/nation-events'
    );
  }

  createNationEvent(data: any) {
    return this.httpClient.post('/nation-events', data);
  }

  updateNationEvent(data: any) {
    return this.httpClient.put(`/nation-events/${data.id}`, data);
  }

  deleteNationEvent(id: string) {
    return this.httpClient.delete(`/nation-events/${id}`);
  }

  getNationEventById(id: string): Promise<NationEvent> {
    return this.httpClient
      .get<NationEventBackendResponse>(`/nation-events/${id}`)
      .then(
        (data) =>
          new NationEvent({
            id: data.id,
            name: data.name,
            season: data.season,
          })
      );
  }
}

export type NationEventBackendResponse = {
  id: string;
  name: string;
  season: string;
};

export type NationEventListBackendResponse = {
  id: string;
  name: string;
  nationCount: number;
  gamesCount: string;
  season: string;
}[];
