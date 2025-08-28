export interface TechStackItem {
  id: string;
  name: string;
  icon: string;
  alt: string;
}

export const TECH_STACK: TechStackItem[] = [
  {
    id: 'vue',
    name: 'Vue.js',
    icon: '@/assets/vue-logo.png',
    alt: 'Vue.js',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '@/assets/typescript-icon.svg',
    alt: 'TypeScript',
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: '@/assets/vitejs-logo.svg',
    alt: 'Vite',
  },
];
