export interface TechStackItem {
  id: string;
  name: string;
  icon: string;
  alt: string;
}

export interface SectionConfig {
  id: string;
  route: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface AnimationConfig {
  threshold?: number | number[];
  rootMargin?: string;
  staggerDelay?: number;
  animationClass?: string;
}
