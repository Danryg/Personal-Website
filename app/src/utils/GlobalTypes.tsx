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

export class JobFromDatabase {}

export class JobToDatabase {}
