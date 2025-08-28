import type { Ref } from 'vue';
import type { WorkExperience } from './jobs.types';
import type { AboutMeInfo } from './about-me.types';

export interface PortfolioState {
  currentComponent: string;
}

export interface BootstrapState {
  workExperiences: Ref<WorkExperience[]>;
  aboutMeInfo: Ref<AboutMeInfo>;
  isLoadingAboutMe: Ref<boolean>;
  isLoadingWorkExperiences: Ref<boolean>;
  getWorkExperiences: () => void;
  getAboutMeInfo: () => Promise<void>;
}
