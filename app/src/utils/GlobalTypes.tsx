export type ProjectFromDatabase = {
  title: string;
  description: string;
  pictures: string[];
  contributors: string[];
  date: Date;
  gitLink: string;
  pinned: boolean;
};

export class ProjectToDatabase {
  readonly title: string;
  readonly describtion: string;
  readonly pictures: string[];
  readonly contributors: string[];
  readonly date: Date;
  readonly gitLink: string;
  pinned?: boolean = false;

  constructor(props: { [key: string]: any }) {
    this.title = props.title;
    this.describtion = props.describtion;
    this.pictures = props.pictures;
    this.contributors = props.contributors;
    this.date = props.date;
    this.gitLink = props.gitLink;
  }
}

export class JobFromDatabase {}

export class JobToDatabase {}
