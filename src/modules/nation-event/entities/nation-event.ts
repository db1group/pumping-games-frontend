export class NationEvent {
  public id: string;
  public name: string;
  public season: string;

  constructor(
    data: NationEventInput = {
      id: '',
      name: '',
      season: '',
    }
  ) {
    this.id = data.id;
    this.name = data.name;
    this.season = data.season;
  }

  format() {
    return {
      id: this.id,
      name: this.name,
      season: this.season,
    };
  }
}

export type NationEventInput = {
  id: string;
  name: string;
  season: string;
};
