import type { Ref } from 'vue';
import type { WorkExperience } from './jobs.types';
import type { AboutMeInfo } from './about-me.types';
import type { Project } from './projects.types';

export interface PortfolioState {
  currentComponent: string;
}

export interface BootstrapState {
  workExperiences: Ref<WorkExperience[]>;
  aboutMeInfo: Ref<AboutMeInfo>;
  projects: Ref<Project[]>;
  isLoadingAboutMe: Ref<boolean>;
  isLoadingWorkExperiences: Ref<boolean>;
  isLoadingProjects: Ref<boolean>;
  getWorkExperiences: () => void;
  getAboutMeInfo: () => Promise<void>;
  getProjects: () => Promise<void>;
}
