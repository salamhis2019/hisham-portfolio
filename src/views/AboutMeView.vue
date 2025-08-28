<template>
  <section id="about-me" class="about-me-view" aria-labelledby="about-heading">
    <!-- Background decoration -->
    <BackgroundDecoration variant="section" />

    <div class="about-me-container">
      <!-- Loading State -->
      <SkeletonLoader v-if="isLoading" variant="about-me" :show-header="true" />

      <!-- Loaded Content -->
      <template v-else>
        <!-- Enhanced Header -->
        <SectionHeader
          badge-icon="person"
          badge-text="Get to know me"
          title="About Me"
          description="Passionate about creating digital experiences that make a difference"
          heading-id="about-heading"
        />

        <div class="about-content-container">
          <!-- Bio Section with Glass Card -->
          <div class="bio-section">
            <GlassCard title="My Story" icon="menu_book" variant="bio">
              <div class="bio-content" role="contentinfo" aria-label="personal bio">
                <div
                  v-for="(item, index) in aboutMeInfo.bio"
                  :key="index"
                  v-dompurify-html="item"
                  class="bio-paragraph"
                  :style="{ '--delay': `${index * ANIMATION_CONFIG.BIO_DELAY_MULTIPLIER}s` }"
                />
              </div>
            </GlassCard>
          </div>

          <!-- Skills Section with Enhanced Cards -->
          <div class="skills-section">
            <!-- Technical Skills -->
            <GlassCard
              title="Technical Skills"
              icon="bolt"
              icon-variant="tech"
              variant="skills"
              :show-count="true"
              :count="aboutMeInfo.technicalSkills?.length || 0"
            >
              <div class="skills-grid">
                <SkillBadge
                  v-for="(skill, index) in aboutMeInfo.technicalSkills"
                  :key="skill"
                  :skill="skill"
                  type="tech"
                  :index="index"
                />
              </div>
            </GlassCard>

            <!-- Soft Skills -->
            <GlassCard
              title="Soft Skills"
              icon="diamond"
              icon-variant="soft"
              variant="skills"
              :show-count="true"
              :count="aboutMeInfo.softSkills?.length || 0"
            >
              <div class="skills-grid">
                <SkillBadge
                  v-for="(skill, index) in aboutMeInfo.softSkills"
                  :key="skill"
                  :skill="skill"
                  type="soft"
                  :index="index"
                />
              </div>
            </GlassCard>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="stats-section">
          <StatsSection
            :stats="[
              {
                value: aboutMeInfo.technicalSkills?.length || 0,
                label: STATS_LABELS.TECHNICAL_SKILLS,
              },
              { value: aboutMeInfo.softSkills?.length || 0, label: STATS_LABELS.SOFT_SKILLS },
              { value: aboutMeInfo.bio?.length || 0, label: STATS_LABELS.STORY_CHAPTERS },
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
import GlassCard from '@/components/common/GlassCard.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import SkillBadge from '@/components/common/SkillBadge.vue';
import StatsSection from '@/components/common/StatsSection.vue';
import SkeletonLoader from '@/components/common/SkeletonLoader.vue';
import BackgroundDecoration from '@/components/common/BackgroundDecoration.vue';
import { ANIMATION_CONFIG } from '@/constants/Animation.const';
import { STATS_LABELS } from '@/constants/StatsLabels.const';
import { useAboutMeAnimations } from '@/composables/useAnimations';

/** Pinia Stores */

const bootstrapStore = useBootstrapStore();

/** Pinia State */

const { aboutMeInfo, isLoadingAboutMe } = storeToRefs(bootstrapStore);

/** Animations */

const { initializeAnimations } = useAboutMeAnimations();

/** Computed */

const isLoading = computed(() => {
  return isLoadingAboutMe.value;
});

/** Lifecycle Hooks */

onMounted(async (): Promise<void> => {
  await bootstrapStore.getAboutMeInfo();

  nextTick(() => {
    initializeAnimations();
  });
});
</script>

<style lang="scss" scoped>
.about-me-view {
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

  .about-me-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
  }

  .about-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .bio-content {
    .bio-paragraph {
      font-size: 1.1rem;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 1.5rem;
      opacity: 0;
      transform: translateY(20px);
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      animation: fadeInUp 0.6s ease-out
        calc(var(--delay) + v-bind('ANIMATION_CONFIG.BIO_BASE_DELAY + "s"')) both;

      &:last-child {
        margin-bottom: 0;
      }

      :deep(.key-word) {
        background: linear-gradient(45deg, #0088ff, #ff00bb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
      }
    }
  }

  .skills-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
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

/* Responsive Design */
@media (max-width: 768px) {
  .about-me-view {
    padding: 2rem 0;

    .about-me-container {
      padding: 0 1rem;
    }
  }
}
</style>
