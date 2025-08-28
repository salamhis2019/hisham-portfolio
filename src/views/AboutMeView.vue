<template>
  <section id="about-me" class="about-me-view">
    <!-- Background decoration -->
    <div class="bg-decoration">
      <div class="floating-shape shape-1" />
      <div class="floating-shape shape-2" />
      <div class="floating-shape shape-3" />
      <div class="grid-overlay" />
    </div>

    <div class="about-me-container">
      <!-- Enhanced Header -->
      <SectionHeader
        badge-icon="👤"
        badge-text="Get to know me"
        title="About Me"
        description="Passionate about creating digital experiences that make a difference"
      />

      <div class="about-content-container">
        <!-- Bio Section with Glass Card -->
        <div class="bio-section">
          <GlassCard title="My Story" icon="📖" variant="bio">
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
            icon="⚡"
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
            icon="💎"
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
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from 'vue';
import { storeToRefs } from 'pinia';
import { useBootstrapStore } from '@/stores/bootstrap.store';
import GlassCard from '@/components/common/GlassCard.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import SkillBadge from '@/components/common/SkillBadge.vue';
import StatsSection from '@/components/common/StatsSection.vue';
import {
  ANIMATION_CONFIG,
  ANIMATION_CLASSES,
  ANIMATION_SELECTORS,
} from '@/constants/Animation.const';
import { STATS_LABELS } from '@/constants/StatsLabels.const';

const bootstrapStore = useBootstrapStore();
const { aboutMeInfo } = storeToRefs(bootstrapStore);

const initializeAnimations = () => {
  // Animate cards entrance
  const cards = document.querySelectorAll(ANIMATION_SELECTORS.GLASS_CARD);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(ANIMATION_CLASSES.ANIMATE_IN);
          }, index * ANIMATION_CONFIG.CARD_STAGGER_DELAY);
        }
      });
    },
    { threshold: ANIMATION_CONFIG.INTERSECTION_THRESHOLD },
  );

  cards.forEach(card => observer.observe(card));

  // Animate skills
  const skills = document.querySelectorAll(ANIMATION_SELECTORS.SKILL_BADGE);
  const skillObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(ANIMATION_CLASSES.ANIMATE_IN);
        }
      });
    },
    { threshold: ANIMATION_CONFIG.INTERSECTION_THRESHOLD },
  );

  skills.forEach(skill => skillObserver.observe(skill));
};

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
