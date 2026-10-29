<template>
  <section id="work-experience" class="work-section" aria-labelledby="work-heading">
    <div class="work-experience-container">
      <!-- Loading State -->
      <SkeletonLoader v-if="isLoading" variant="work-experience" :show-header="true" />

      <!-- Loaded Content -->
      <template v-else>
        <SectionHeader
          title="Work Experience"
          description="Building production web experiences at Apple since 2022."
          heading-id="work-heading"
        />

        <div class="experiences-grid">
          <work-experience
            v-for="(experience, index) in workExperiences"
            :key="`${experience.company}-${index}`"
            :experience="experience"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useBootstrapStore } from '@/stores/bootstrap.store';
import WorkExperience from '@/components/WorkExperience.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import SkeletonLoader from '@/components/common/SkeletonLoader.vue';

/** Pinia Stores */

const bootstrapStore = useBootstrapStore();

/** Pinia State */

const { workExperiences, isLoadingWorkExperiences } = storeToRefs(bootstrapStore);

/** Computed */

const isLoading = computed(() => {
  return isLoadingWorkExperiences.value;
});

/** Lifecycle Hooks */

onMounted(async (): Promise<void> => {
  await bootstrapStore.getWorkExperiences();
});
</script>

<style lang="scss" scoped>
.work-section {
  width: 100%;
  padding: 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .work-experience-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .experiences-grid {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .work-section {
    padding: 2.5rem 0;

    .work-experience-container {
      padding: 0 1rem;
    }
  }
}
</style>
