interface TechStack {
  link: string;
  text: string;
  id: string;
}

export interface ProjectDataModel {
  pic: string;
  link: string;
  title: string;
  description: string;
  tech: TechStack[];
  id: string;
}
