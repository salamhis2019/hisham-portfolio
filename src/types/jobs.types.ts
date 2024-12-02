export interface WorkExperience {
  company: string;
  positions: Position[];
}

export interface Position {
  title: string;
  date: string;
  responsibilities: string[];
  skills?: string[];
}
