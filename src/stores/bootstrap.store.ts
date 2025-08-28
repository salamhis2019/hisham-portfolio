import { ref } from 'vue';
import { defineStore } from 'pinia';
import WorkExperiencesMock from '../json/jobs.mocks';
import AboutMeInfoMock from '../json/about-me.mocks';
import ProjectsMock from '../json/projects.mocks';
import type { WorkExperience } from '@/types/jobs.types';
import { AboutMeInfo } from '@/types/about-me.types';
import type { Project } from '@/types/projects.types';
import type { BootstrapState } from '@/types/store.types';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_COLLECTIONS } from '@/constants/FireBase.const';

/**
 * Todo: create swift app to integrate with firebase instead of using mock json
 */

export const useBootstrapStore = defineStore('bootstrap', (): BootstrapState => {
  // State

  const workExperiences = ref<WorkExperience[]>([]);
  const aboutMeInfo = ref<AboutMeInfo>({
    bio: [],
    technicalSkills: [],
    softSkills: [],
  });
  const projects = ref<Project[]>([]);
  const isLoadingAboutMe = ref<boolean>(false);
  const isLoadingWorkExperiences = ref<boolean>(false);
  const isLoadingProjects = ref<boolean>(false);

  // Methods

  async function getWorkExperiences(): Promise<void> {
    isLoadingWorkExperiences.value = true;
    try {
      const workExperienceCollectionRef = await getDocs(
        collection(db, FIREBASE_COLLECTIONS.WORK_EXPERIENCE),
      );

      if (workExperienceCollectionRef.empty) {
        // Use mock data if no Firebase data is available
        workExperiences.value = WorkExperiencesMock;
      } else {
        workExperienceCollectionRef.forEach(doc => {
          workExperiences.value = doc.data().jobs;
        });
      }
    } catch (error) {
      console.error('Error fetching work experiences from Firebase, using mock data: ', error);
      // Fallback to mock data on error
      workExperiences.value = WorkExperiencesMock;
    } finally {
      isLoadingWorkExperiences.value = false;
    }
  }

  async function getAboutMeInfo(): Promise<void> {
    isLoadingAboutMe.value = true;
    try {
      // For now, use mock data. In the future, this could fetch from Firebase
      aboutMeInfo.value = AboutMeInfoMock;
    } catch (error) {
      console.error('Error fetching about me info, using mock data: ', error);
      aboutMeInfo.value = AboutMeInfoMock;
    } finally {
      isLoadingAboutMe.value = false;
    }
  }

  async function getProjects(): Promise<void> {
    isLoadingProjects.value = true;
    try {
      // For now, use mock data. In the future, this could fetch from Firebase
      projects.value = ProjectsMock;
    } catch (error) {
      console.error('Error fetching projects, using mock data: ', error);
      projects.value = ProjectsMock;
    } finally {
      isLoadingProjects.value = false;
    }
  }

  return {
    workExperiences,
    aboutMeInfo,
    projects,
    isLoadingAboutMe,
    isLoadingWorkExperiences,
    isLoadingProjects,
    getWorkExperiences,
    getAboutMeInfo,
    getProjects,
  };
});
