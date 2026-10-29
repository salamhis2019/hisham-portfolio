export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  gpa?: string;
}

export interface AboutMeInfo {
  bio: string[];
  skills: SkillGroup[];
  education?: Education;
}
