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
    icon: require('@/assets/vue-logo.png'),
    alt: 'Vue.js',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: require('@/assets/typescript-icon.svg'),
    alt: 'TypeScript',
  },
  {
    id: 'vite',
    name: 'Vite',
    icon: require('@/assets/vitejs-logo.svg'),
    alt: 'Vite',
  },
];
