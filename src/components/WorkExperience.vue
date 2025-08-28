<template>
  <section role="contentinfo" class="work-experience" aria-label="Work experience details">
    <!-- Background decoration -->
    <BackgroundDecoration variant="card" />

    <!-- Glass Card Container -->
    <GlassCard :title="experience.company" icon="business">
      <!-- Positions Content -->
      <div class="positions-container">
        <template
          v-for="({ title, date, responsibilities, skills }, index) in experience.positions"
          :key="`${title}-${index}`"
        >
          <!-- Position Section -->
          <div class="position-section" :style="{ '--delay': `${index * 0.1}s` }">
            <!-- Position Header -->
            <header class="position-header">
              <div class="position-info">
                <h4 class="job-title" tabindex="0">{{ title }}</h4>
                <div class="date-badge">
                  <MaterialIcon name="event" size="sm" class="calendar-icon" />
                  <span class="date">{{ date }}</span>
                </div>
              </div>
            </header>

            <!-- Responsibilities -->
            <div class="content-section">
              <h5 class="section-label" tabindex="0">Key Achievements</h5>
              <ul class="description-container">
                <li
                  v-for="(description, descIndex) in responsibilities"
                  :key="description"
                  class="responsibility-item"
                  :style="{ '--item-delay': `${descIndex * 0.05}s` }"
                  aria-label="Position Responsibilities"
                  tabindex="0"
                >
                  <div class="bullet-point" />
                  <span class="responsibility-text">{{ description }}</span>
                </li>
              </ul>
            </div>

            <!-- Skills -->
            <div class="skills-section" v-if="skills && skills.length > 0">
              <h5 class="section-label" tabindex="0">Technologies & Skills</h5>
              <ul class="skills-grid" aria-label="Skills">
                <li v-for="(skill, skillIndex) in skills" :key="`${skill}-${skillIndex}`">
                  <SkillBadge
                    :skill="skill"
                    type="soft"
                    :index="skillIndex"
                    :animation-delay-multiplier="0.03"
                  />
                </li>
              </ul>
            </div>
          </div>

          <!-- Position Divider -->
          <div
            v-if="showSectionDivider(experience.positions, index)"
            class="position-divider"
            aria-hidden="true"
          >
            <div class="divider-line" />
            <div class="divider-glow" />
          </div>
        </template>
      </div>
    </GlassCard>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { showSectionDivider } from '@/helpers/divider-helper';
import type { WorkExperience } from '@/types/jobs.types';
import SkillBadge from '@/components/common/SkillBadge.vue';
import GlassCard from '@/components/common/GlassCard.vue';
import MaterialIcon from '@/components/common/MaterialIcon.vue';
import BackgroundDecoration from '@/components/common/BackgroundDecoration.vue';
import { useWorkExperienceCardAnimations } from '@/composables/useAnimations';

/** Types */

interface Props {
  experience: WorkExperience;
}

/** Props */

defineProps<Props>();

/** Animations */

useWorkExperienceCardAnimations();
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.work-experience {
  position: relative;
  margin-bottom: 3rem;
  overflow: hidden;

  .positions-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .position-section {
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: fadeInUp 0.6s ease-out calc(var(--delay) + 0.2s) both;

    .position-header {
      margin-bottom: 1.5rem;

      .position-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        flex-wrap: wrap;

        .job-title {
          @include text-heading(var(--font-size-2xl));
          margin: 0;
          flex: 1;
          min-width: 200px;
        }

        .date-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 136, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 136, 255, 0.2);
          border-radius: 20px;
          padding: 0.4rem 1rem;

          .calendar-icon {
            font-size: var(--font-size-xs);
          }

          .date {
            @include text-badge();
            margin: 0;
          }
        }
      }
    }

    .content-section {
      margin-bottom: 1.5rem;

      .section-label {
        @include text-label();
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 1rem 0;
      }

      .description-container {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 0;
        margin: 0;
        list-style: none;

        .responsibility-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          opacity: 0;
          transform: translateX(-20px);
          animation: slideInLeft 0.5s ease-out calc(var(--item-delay) + 0.4s) both;

          .bullet-point {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: linear-gradient(45deg, #ff0080, #0088ff);
            margin-top: 0.5rem;
            flex-shrink: 0;
          }

          .responsibility-text {
            @include text-body(var(--font-size-lg));
            color: rgba(255, 255, 255, 0.85);
          }
        }
      }
    }

    .skills-section {
      .section-label {
        @include text-label();
        color: rgba(255, 255, 255, 0.8);
        margin: 0 0 1rem 0;
      }

      .skills-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          display: flex;
        }
      }
    }
  }

  .position-divider {
    position: relative;
    margin: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .divider-line {
      width: 200px;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    }

    .divider-glow {
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 12px;
      background: linear-gradient(45deg, #0088ff, #ff00bb);
      border-radius: 50%;
      filter: blur(10px);
      animation: glowPulse 3s ease-in-out infinite;
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

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  .work-experience {
    .position-section .position-header .position-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;

      .job-title {
        min-width: unset;
      }
    }
  }
}
</style>
