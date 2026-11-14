<template>
  <section id="about-me" class="about-me-view" aria-labelledby="about-heading">
    <div class="about-me-container">
      <!-- Loading State -->
      <SkeletonLoader v-if="isLoading" variant="about-me" :show-header="true" />

      <!-- Loaded Content -->
      <template v-else>
        <SectionHeader
          title="About Me"
          description="Engineer with a human-centered design background, focused on accessible, high-performance UI."
          heading-id="about-heading"
        />

        <div class="about-content-container">
          <!-- Bio Section -->
          <GlassCard title="My Story" icon="menu_book" variant="bio">
            <div class="bio-content" role="contentinfo" aria-label="personal bio" tabindex="0">
              <div
                v-for="(item, index) in aboutMeInfo.bio"
                :key="index"
                v-dompurify-html="item"
                class="bio-paragraph"
                tabindex="0"
              />
            </div>
          </GlassCard>

          <div class="side-column">
            <!-- Skills -->
            <GlassCard title="Skills" icon="bolt" icon-variant="tech" variant="skills" tabindex="0">
              <dl class="skill-groups">
                <div v-for="group in aboutMeInfo.skills" :key="group.category" class="skill-group">
                  <dt class="group-label">{{ group.category }}</dt>
                  <dd class="group-items">
                    <ul class="skills-grid">
                      <li v-for="skill in group.items" :key="skill">
                        <SkillBadge :skill="skill" type="tech" />
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </GlassCard>

            <!-- Education -->
            <GlassCard v-if="aboutMeInfo.education" title="Education" icon="school" tabindex="0">
              <p class="school">{{ aboutMeInfo.education.school }}</p>
              <p class="degree">{{ aboutMeInfo.education.degree }}</p>
              <p class="education-meta">
                {{ aboutMeInfo.education.date }}
                <template v-if="aboutMeInfo.education.gpa">
                  · GPA {{ aboutMeInfo.education.gpa }}
                </template>
              </p>
            </GlassCard>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useBootstrapStore } from '@/stores/bootstrap.store';
import GlassCard from '@/components/common/GlassCard.vue';
import SectionHeader from '@/components/common/SectionHeader.vue';
import SkillBadge from '@/components/common/SkillBadge.vue';
import SkeletonLoader from '@/components/common/SkeletonLoader.vue';

/** Pinia Stores */

const bootstrapStore = useBootstrapStore();

/** Pinia State */

const { aboutMeInfo, isLoadingAboutMe } = storeToRefs(bootstrapStore);

/** Computed */

const isLoading = computed(() => {
  return isLoadingAboutMe.value;
});

/** Lifecycle Hooks */

onMounted(async (): Promise<void> => {
  await bootstrapStore.getAboutMeInfo();
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.about-me-view {
  width: 100%;
  padding: 4rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .about-me-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .about-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .bio-content {
    .bio-paragraph {
      font-size: var(--font-size-base);
      line-height: 1.65;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 1rem;
      font-family: var(--font-primary);

      &:last-child {
        margin-bottom: 0;
      }

      :deep(.key-word) {
        color: #ffffff;
        font-weight: 700;
      }

      :deep(a) {
        color: #ffffff;
        text-decoration: underline;
      }
    }
  }

  .side-column {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;

    .group-label {
      @include text-label();
      margin-bottom: 0.5rem;
    }

    .group-items {
      margin: 0;
    }
  }

  .school {
    @include text-heading(var(--font-size-base));
  }

  .degree {
    @include text-body();
    color: rgba(255, 255, 255, 0.8);
  }

  .education-meta {
    @include text-label();
    margin-top: 0.25rem;
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

/* Responsive Design */
@media (max-width: 768px) {
  .about-me-view {
    padding: 2.5rem 0;

    .about-me-container {
      padding: 0 1rem;
    }
  }
}
</style>
