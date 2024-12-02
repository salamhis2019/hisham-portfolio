import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import WorkExperiencesMock from '../json/jobs.mocks';

import type { WorkExperience } from "@/types/jobs.types";

/**
 * Todo: create swift app to integrate with firebase instead of using mock json
 */

interface State {
  workExperiences: Ref<WorkExperience[]>;
  getWorkExperiences: () => void;
}

export const useBootstrapStore = defineStore("bootstrap", (): State => {
  // State

  const workExperiences = ref<WorkExperience[]>([]);

  // Methods
  
  // TODO: create async function which fetches from firebase
  function getWorkExperiences(): void {
    setTimeout(() => {
      workExperiences.value = WorkExperiencesMock
      console.log(workExperiences.value);
    }, 1500)
  }

  return {
    workExperiences,
    getWorkExperiences
  }
})
