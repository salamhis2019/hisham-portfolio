<template>
  <section role="contentinfo" class="work-experience" aria-label="Work experience details">
    <GlassCard :title="experience.company" icon="business">
      <div class="positions-container">
        <template
          v-for="({ title, date, responsibilities, skills }, index) in experience.positions"
          :key="`${title}-${index}`"
        >
          <!-- Position Section -->
          <div class="position-section">
            <!-- Position Header -->
            <header class="position-header">
              <h4 class="job-title" tabindex="0">{{ title }}</h4>
              <span class="date">{{ date }}</span>
            </header>

            <!-- Responsibilities -->
            <ul class="description-container" aria-label="Position Responsibilities">
              <li
                v-for="description in responsibilities"
                :key="description"
                class="responsibility-item"
                tabindex="0"
              >
                {{ description }}
              </li>
            </ul>

            <!-- Skills -->
            <ul v-if="skills && skills.length > 0" class="skills-grid" aria-label="Skills">
              <li v-for="(skill, skillIndex) in skills" :key="`${skill}-${skillIndex}`">
                <SkillBadge :skill="skill" type="soft" />
              </li>
            </ul>
          </div>

          <!-- Position Divider -->
          <hr
            v-if="showSectionDivider(experience.positions, index)"
            class="position-divider"
            aria-hidden="true"
          />
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

/** Types */

interface Props {
  experience: WorkExperience;
}

/** Props */

defineProps<Props>();
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.work-experience {
  .positions-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .position-section {
    .position-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 0.75rem;

      .job-title {
        @include text-heading(var(--font-size-lg));
        margin: 0;
      }

      .date {
        @include text-badge(var(--font-size-sm));
        color: rgba(255, 255, 255, 0.55);
      }
    }

    .description-container {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding: 0 0 0 1.1rem;
      margin: 0 0 1rem 0;

      .responsibility-item {
        @include text-body(var(--font-size-base));
        color: rgba(255, 255, 255, 0.8);

        &::marker {
          color: rgba(255, 255, 255, 0.4);
        }
      }
    }

    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: flex;
      }
    }
  }

  .position-divider {
    width: 100%;
    height: 1px;
    margin: 0;
    border: 0;
    background: rgba(255, 255, 255, 0.08);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .work-experience .position-section .position-header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
