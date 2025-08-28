export interface SectionConfig {
  id: string;
  route: string;
}

export const SECTIONS: SectionConfig[] = [
  { id: 'intro-content', route: 'intro-content' },
  { id: 'about-me', route: 'about-me' },
  { id: 'work-experience', route: 'work-experience' },
  { id: 'contact', route: 'contact' },
];
