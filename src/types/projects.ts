export enum ProjectType {
  Mobile,
  Webapp,
  Website,
}

export interface IProject {
  name: string;
  image: string;
  active: boolean;
  url?: string;
  year?: number;
  projectType: ProjectType;
  techList: JSX.Element[];
}
