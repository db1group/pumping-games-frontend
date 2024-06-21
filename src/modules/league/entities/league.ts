import { EvidenceType } from './evidence-type';

export class League {
  public id: string;

  public name: string;

  public logo?: File;

  public season: string;

  public status: string;

  constructor(league?: LeagueInputBackend) {
    this.id = league?.id ?? '';
    this.name = league?.name ?? '';
    this.logo = new File(league?.logo);
    this.season = league?.season ?? '';
    this.status = league?.status ?? '';
  }
}

export type LeagueInputBackend = {
  id?: string;
  name: string;
  logo: string;
  season: string;
  status: string;
  formEvidence: LeagueFormEvidenceInput;
};

export type LeagueFormEvidenceInput = {
  id: string;
  name: string;
  evidence: {
    type: EvidenceType;
    content: any;
  };
};
