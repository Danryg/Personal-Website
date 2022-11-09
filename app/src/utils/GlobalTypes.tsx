export type ProjectFromDatabase = {
  id: string;
  title: string;
  description: string;
  pictures: string[];
  contributors: string[];
  date: Date;
  gitLink: string;
  pinned: boolean;
  pictureUrl?: string;
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
};

export class JobFromDatabase {
  id: string;
  name: string;
  startDate: string;
  description: string;
  endDate: string;
  position: string;
  kategory: string;
  experiences: string[];
  pictureUrl: string;
}

export class JobToDatabase {
  name: string;
  startDate: string;
  description: string;
  endDate: string;
  position: string;
  kategory: string;
  experiences: string[];
}
