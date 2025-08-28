export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hishamsalameh',
    icon: 'fa-linkedin',
    ariaLabel: 'Visit my LinkedIn profile',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/salamhis2019',
    icon: 'fa-github',
    ariaLabel: 'Visit my GitHub profile',
  },
];
