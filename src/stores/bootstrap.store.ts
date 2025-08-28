import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import WorkExperiencesMock from '../json/jobs.mocks';
import AboutMeInfoMock from '../json/about-me.mocks';
import type { WorkExperience } from '@/types/jobs.types';
import { AboutMeInfo } from '@/types/about-me.types';
import { db } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_COLLECTIONS } from '@/constants/FireBase.const';

/**
 * Todo: create swift app to integrate with firebase instead of using mock json
 */

interface State {
  workExperiences: Ref<WorkExperience[]>;
  aboutMeInfo: Ref<AboutMeInfo>;
  getWorkExperiences: () => void;
  getAboutMeInfo: () => void;
}

export const useBootstrapStore = defineStore('bootstrap', (): State => {
  // State

  const workExperiences = ref<WorkExperience[]>([]);
  const aboutMeInfo = ref<AboutMeInfo>({
    bio: [],
    technicalSkills: [],
    softSkills: [],
  });

  // Methods

  async function getWorkExperiences(): Promise<void> {
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
    }
  }

  function getAboutMeInfo(): void {
    setTimeout((): void => {
      aboutMeInfo.value = AboutMeInfoMock;
    }, 1500);
  }

  return {
    workExperiences,
    aboutMeInfo,
    getWorkExperiences,
    getAboutMeInfo,
  };
});
