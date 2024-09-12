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

  create() {
    console.log(this, 'vai salvar isso no backend');
  }

  update() {
    // Update the nation event
  }
}

export type NationEventInput = {
  id: string;
  name: string;
  season: string;
};
