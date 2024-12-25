import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import WorkExperiencesMock from '../json/jobs.mocks';
import ProjectsMock from '../json/projects.mocks';
import AboutMeInfoMock from '../json/about-me.mocks';
import type { WorkExperience } from "@/types/jobs.types";
import type { Project } from "@/types/projects.types";
import { AboutMeInfo } from "@/types/about-me.types";
import { db } from "@/firebase";
import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_COLLECTIONS } from "@/constants/FireBase.const";

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
  
  async function getWorkExperiences(): Promise<void> {
    const workExperienceCollectionRef = await getDocs(collection(db, FIREBASE_COLLECTIONS.WORK_EXPERIENCE));
  
    try {
      workExperienceCollectionRef.forEach((doc) => {
        workExperiences.value = doc.data().jobs;
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
