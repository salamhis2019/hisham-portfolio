<template>
  <div class="skeleton-loader" :class="variant">
    <!-- Section Header Skeleton -->
    <div v-if="showHeader" class="skeleton-header">
      <div class="skeleton-badge" />
      <div class="skeleton-title" />
      <div class="skeleton-description" />
    </div>

    <!-- Content Skeleton based on variant -->
    <div class="skeleton-content">
      <!-- About Me Skeleton -->
      <template v-if="variant === 'about-me'">
        <div class="skeleton-grid">
          <!-- Bio Section -->
          <div class="skeleton-card">
            <div class="skeleton-card-header">
              <div class="skeleton-icon" />
              <div class="skeleton-card-title" />
            </div>
            <div class="skeleton-bio">
              <div v-for="i in 3" :key="i" class="skeleton-paragraph" />
            </div>
          </div>

          <!-- Skills Section -->
          <div class="skeleton-skills">
            <div class="skeleton-card">
              <div class="skeleton-card-header">
                <div class="skeleton-icon" />
                <div class="skeleton-card-title" />
              </div>
              <div class="skeleton-badges">
                <div v-for="i in 8" :key="i" class="skeleton-badge" />
              </div>
            </div>
            <div class="skeleton-card">
              <div class="skeleton-card-header">
                <div class="skeleton-icon" />
                <div class="skeleton-card-title" />
              </div>
              <div class="skeleton-badges">
                <div v-for="i in 6" :key="i" class="skeleton-badge" />
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Work Experience Skeleton -->
      <template v-if="variant === 'work-experience'">
        <div class="skeleton-work">
          <div v-for="i in 3" :key="i" class="skeleton-work-card">
            <div class="skeleton-work-header">
              <div class="skeleton-company" />
              <div class="skeleton-period" />
            </div>
            <div class="skeleton-work-content">
              <div class="skeleton-position" />
              <div class="skeleton-work-description" />
              <div class="skeleton-tech-stack">
                <div v-for="j in 5" :key="j" class="skeleton-tech-badge" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';

interface Props {
  variant: 'about-me' | 'work-experience';
  showHeader?: boolean;
}

withDefaults(defineProps<Props>(), {
  showHeader: true,
});
</script>

<style lang="scss" scoped>
.skeleton-loader {
  width: 100%;
  padding: 4rem 0;

  .skeleton-header {
    text-align: center;
    margin-bottom: 3rem;

    .skeleton-badge {
      width: 200px;
      height: 32px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.1) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
      border-radius: 16px;
      margin: 0 auto 1rem;
    }

    .skeleton-title {
      width: 300px;
      height: 48px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.1) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
      border-radius: 8px;
      margin: 0 auto 1rem;
    }

    .skeleton-description {
      width: 400px;
      height: 20px;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.1) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
      border-radius: 4px;
      margin: 0 auto;
    }
  }

  .skeleton-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  // About Me Skeleton Styles
  &.about-me {
    .skeleton-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .skeleton-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 2rem;
      margin-bottom: 2rem;

      .skeleton-card-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;

        .skeleton-icon {
          width: 24px;
          height: 24px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 50%;
        }

        .skeleton-card-title {
          width: 150px;
          height: 24px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 4px;
        }
      }
    }

    .skeleton-bio {
      .skeleton-paragraph {
        height: 20px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1) 25%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.1) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
        border-radius: 4px;
        margin-bottom: 1rem;

        &:nth-child(1) {
          width: 100%;
        }
        &:nth-child(2) {
          width: 85%;
        }
        &:nth-child(3) {
          width: 92%;
        }
      }
    }

    .skeleton-skills {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .skeleton-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;

      .skeleton-badge {
        width: 80px;
        height: 32px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1) 25%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.1) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
        border-radius: 16px;
      }
    }
  }

  // Work Experience Skeleton Styles
  &.work-experience {
    .skeleton-work {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .skeleton-work-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 2rem;

      .skeleton-work-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        .skeleton-company {
          width: 200px;
          height: 28px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 4px;
        }

        .skeleton-period {
          width: 120px;
          height: 20px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 4px;
        }
      }

      .skeleton-work-content {
        .skeleton-position {
          width: 180px;
          height: 24px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

        .skeleton-work-description {
          height: 60px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 25%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }

        .skeleton-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;

          .skeleton-tech-badge {
            width: 60px;
            height: 24px;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 75%
            );
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
            border-radius: 12px;
          }
        }
      }
    }
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .skeleton-loader {
    padding: 2rem 0;

    .skeleton-content {
      padding: 0 1rem;
    }

    .skeleton-header {
      .skeleton-badge {
        width: 150px;
      }

      .skeleton-title {
        width: 200px;
        height: 36px;
      }

      .skeleton-description {
        width: 250px;
      }
    }
  }
}
</style>
