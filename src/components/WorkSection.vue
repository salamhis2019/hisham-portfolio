<template>
  <section id="work-experience" class="work-section">
    <!-- Background decoration -->
    <div class="bg-decoration">
      <div class="floating-shape shape-1" />
      <div class="floating-shape shape-2" />
      <div class="floating-shape shape-3" />
      <div class="grid-overlay" />
    </div>

    <div class="work-experience-container">
      <!-- Loading State -->
      <SkeletonLoader v-if="isLoading" variant="work-experience" :show-header="true" />

      <!-- Loaded Content -->
      <template v-else>
        <!-- Enhanced Header -->
        <SectionHeader
          badge-icon="work"
          badge-text="My Professional Journey"
          title="Work Experience"
          description="Here are all of my most recent experiences with web development and what I have learned."
        />

        <!-- Work Experience Cards Container -->
        <div class="experiences-grid">
          <!-- Experience Cards -->
          <work-experience
            v-for="(experience, index) in workExperiences"
            :key="`${experience.company}-${index}`"
            :experience="experience"
            :style="{ '--card-delay': `${index * 0.2}s` }"
            class="experience-card-wrapper"
          />
        </div>

        <!-- Summary Section -->
        <div v-if="workExperiences && workExperiences.length > 0" class="summary-section">
          <StatsSection
            :stats="[
              { value: workExperiences.length, label: 'Companies' },
              { value: totalPositions, label: 'Positions' },
              { value: totalYearsExperience, label: 'Years' },
            ]"
            variant="stats"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, computed, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { useBootstrapStore } from '@/stores/bootstrap.store';
import WorkExperience from '@/components/WorkExperience.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import StatsSection from '@/components/common/StatsSection.vue';
import SkeletonLoader from '@/components/common/SkeletonLoader.vue';

/** Pinia Stores */

const bootstrapStore = useBootstrapStore();

/** Pinia State */

const { workExperiences, isLoadingWorkExperiences } = storeToRefs(bootstrapStore);

/** Computed */

const isLoading = computed(() => {
  return isLoadingWorkExperiences.value;
});

const totalPositions = computed(() => {
  if (!workExperiences.value) return 0;
  return workExperiences.value.reduce((total, experience) => {
    return total + (experience.positions?.length || 0);
  }, 0);
});

const totalYearsExperience = computed(() => {
  // Simple calculation - you might want to make this more sophisticated
  // based on actual date ranges from your data
  return workExperiences.value?.length ? workExperiences.value.length * 2 : 0;
});

/** Methods */

function initializeAnimations() {
  // Animate experience cards
  const experienceCards = document.querySelectorAll('.experience-card-wrapper');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    },
    { threshold: 0.1 },
  );

  experienceCards.forEach(card => observer.observe(card));

  // Animate summary section
  const summarySection = document.querySelector('.summary-section');
  if (summarySection) {
    observer.observe(summarySection);
  }
}

/** Lifecycle Hooks */

onMounted(async (): Promise<void> => {
  await bootstrapStore.getWorkExperiences();

  nextTick(() => {
    initializeAnimations();
  });
});
</script>

<style lang="scss" scoped>
.work-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #1a0033 25%,
    #2d1b69 50%,
    #1a0033 75%,
    #0a0a0a 100%
  );
  padding: 4rem 0;
  overflow: hidden;

  .bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;

    .grid-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      animation: gridShift 20s linear infinite;
    }

    .floating-shape {
      position: absolute;
      background: linear-gradient(45deg, rgba(255, 0, 128, 0.1), rgba(0, 136, 255, 0.1));
      border-radius: 50%;
      filter: blur(60px);
      animation: floatShape 20s ease-in-out infinite;

      &.shape-1 {
        width: 400px;
        height: 400px;
        top: 10%;
        left: -10%;
        animation-delay: 0s;
      }

      &.shape-2 {
        width: 300px;
        height: 300px;
        top: 50%;
        right: -10%;
        animation-delay: -7s;
      }

      &.shape-3 {
        width: 250px;
        height: 250px;
        bottom: 10%;
        left: 30%;
        animation-delay: -14s;
      }
    }
  }

  .work-experience-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .experiences-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;

    .experience-card-wrapper {
      transform: translateY(30px);
      opacity: 0;
      transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      animation: fadeInUp 0.8s ease-out calc(var(--card-delay) + 0.8s) both;

      &.animate-in {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatShape {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) scale(1);
  }
  33% {
    transform: translateY(-50px) translateX(30px) scale(1.1);
  }
  66% {
    transform: translateY(30px) translateX(-30px) scale(0.9);
  }
}

@keyframes gridShift {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.5;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.2);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .work-section {
    padding: 2rem 0;

    .work-experience-container {
      padding: 0 1rem;
    }
  }
}
</style>
