export type ProjectFromDatabase = {
  id: string;
  title: string;
  description: string;
  pictures: string[];
  contributors: string[];
  date: Date;
  gitLink: string;
  pinned: boolean;
  pictureUrl?: string | undefined;
};

export type ProjectToDatabase = {
  title: string;
  description: string;
  pictures: string[];
  contributors: string[];
  date: Date;
  gitLink: string;
  pinned: boolean;
  pictureUrl?: string | undefined;
};

export type languageFromDatabase = {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
};

export type languageToDatabase = {
  name: string;
  description: string;
};

export type frameWorkFromDatabase = {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
};
export type frameWorkToDatabase = {
  name: string;
  description: string;
  pictureUrl: string;
};

export class JobFromDatabase {}

export class JobToDatabase {}
