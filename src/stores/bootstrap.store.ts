import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import WorkExperiencesMock from '../json/jobs.mocks';
import ProjectsMock from '../json/projects.mocks';
import AboutMeInfoMock from '../json/about-me.mocks';
import type { WorkExperience } from "@/types/jobs.types";
import type { Project } from "@/types/projects.types";
import { AboutMeInfo } from "@/types/about-me.types";

/**
 * Todo: create swift app to integrate with firebase instead of using mock json
 */

interface State {
  workExperiences: Ref<WorkExperience[]>;
  projects: Ref<Project[]>;
  aboutMeInfo: Ref<AboutMeInfo>;
  getWorkExperiences: () => void;
  getProjects: () => void;
  getAboutMeInfo: () => void;
}

export const useBootstrapStore = defineStore("bootstrap", (): State => {
  // State

  const workExperiences = ref<WorkExperience[]>([]);
  const projects = ref<Project[]>([]);
  const aboutMeInfo = ref<AboutMeInfo>({
    bio: [],
    technicalSkills: [],
    softSkills: []
  })

  // Methods
  
  // TODO: create async function which fetches from firebase
  function getWorkExperiences(): void {
    setTimeout((): void => {
      workExperiences.value = WorkExperiencesMock
      console.log(workExperiences.value);
    }, 1500)
  }

  // TODO: create async function to fetch projects
  function getProjects(): void {
    setTimeout((): void => {
      projects.value = ProjectsMock;
    }, 1500);
  }

  function getAboutMeInfo(): void {
    setTimeout((): void => {
      aboutMeInfo.value = AboutMeInfoMock;
    }, 1500);
  }

  return {
    workExperiences,
    projects,
    aboutMeInfo,
    getWorkExperiences,
    getProjects,
    getAboutMeInfo
  }
})
