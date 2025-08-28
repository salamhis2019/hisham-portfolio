<template>
  <section role="contentinfo" class="work-experience" aria-label="Work experience details">
    <!-- Background decoration -->
    <div class="bg-decoration">
      <div class="floating-shape shape-1" />
      <div class="floating-shape shape-2" />
    </div>

    <!-- Glass Card Container -->
    <GlassCard :title="experience.company" icon="🏢">
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
                <h4 class="job-title">{{ title }}</h4>
                <div class="date-badge">
                  <span class="calendar-icon">📅</span>
                  <span class="date">{{ date }}</span>
                </div>
              </div>
            </header>

            <!-- Responsibilities -->
            <div class="content-section">
              <h5 class="section-label">Key Achievements</h5>
              <ul class="description-container">
                <li
                  v-for="(description, descIndex) in responsibilities"
                  :key="description"
                  class="responsibility-item"
                  :style="{ '--item-delay': `${descIndex * 0.05}s` }"
                  aria-label="Position Responsibilities"
                >
                  <div class="bullet-point" />
                  <span class="responsibility-text">{{ description }}</span>
                </li>
              </ul>
            </div>

            <!-- Skills -->
            <div class="skills-section" v-if="skills && skills.length > 0">
              <h5 class="section-label">Technologies & Skills</h5>
              <div class="skills-grid" aria-label="Skills">
                <SkillBadge
                  v-for="(skill, skillIndex) in skills"
                  :key="`${skill}-${skillIndex}`"
                  :skill="skill"
                  type="soft"
                  :index="skillIndex"
                  :animation-delay-multiplier="0.03"
                />
              </div>
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
import { defineProps, onMounted, nextTick } from 'vue';
import { showSectionDivider } from '@/helpers/divider-helper';
import type { WorkExperience } from '@/types/jobs.types';
import SkillBadge from '@/components/common/SkillBadge.vue';
import GlassCard from '@/components/common/GlassCard.vue';

/** Props */
interface Props {
  experience: WorkExperience;
}

defineProps<Props>();

/** Lifecycle */
onMounted(() => {
  nextTick(() => {
    // Initialize animations when component mounts
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe all animated elements
    const elements = document.querySelectorAll(
      '.glass-card, .position-section, .responsibility-item, .skill-badge',
    );
    elements.forEach(el => observer.observe(el));
  });
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.work-experience {
  position: relative;
  margin-bottom: 3rem;
  overflow: hidden;

  .bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;

    .floating-shape {
      position: absolute;
      background: linear-gradient(45deg, rgba(255, 0, 128, 0.08), rgba(0, 136, 255, 0.08));
      border-radius: 50%;
      filter: blur(40px);
      animation: floatShape 15s ease-in-out infinite;

      &.shape-1 {
        width: 200px;
        height: 200px;
        top: 20%;
        left: -10%;
        animation-delay: 0s;
      }

      &.shape-2 {
        width: 150px;
        height: 150px;
        bottom: 20%;
        right: -5%;
        animation-delay: -7s;
      }
    }
  }

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

@keyframes floatShape {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) scale(1);
  }
  33% {
    transform: translateY(-30px) translateX(20px) scale(1.1);
  }
  66% {
    transform: translateY(20px) translateX(-20px) scale(0.9);
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
