<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <header class="section-header-component">
    <div class="header-content">
      <!-- Section Badge -->
      <div v-if="badgeIcon || badgeText" class="section-badge">
        <MaterialIcon v-if="badgeIcon" :name="badgeIcon" size="sm" class="badge-icon" />
        <span v-if="badgeText" class="badge-text">{{ badgeText }}</span>
      </div>

      <!-- Main Title -->
      <h2 v-if="title" :id="headingId" class="section-header">
        {{ title }}
      </h2>

      <!-- Description -->
      <p v-if="description" class="section-description">
        {{ description }}
      </p>
    </div>

    <!-- Decorative Divider -->
    <div v-if="showDivider" class="header-divider">
      <div class="divider-line" />
      <div class="divider-glow" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';
import MaterialIcon from './MaterialIcon.vue';

/** Types */

interface Props {
  badgeIcon?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  showDivider?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  headingId?: string;
}

/** Props */

withDefaults(defineProps<Props>(), {
  badgeIcon: undefined,
  badgeText: undefined,
  title: undefined,
  description: undefined,
  showDivider: true,
  textAlign: 'center',
  headingId: undefined,
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.section-header-component {
  text-align: v-bind(textAlign);
  margin-bottom: 4rem;

  .header-content {
    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 30px;
      padding: 0.5rem 1.5rem;
      margin-bottom: 1.5rem;
      animation: fadeInUp 0.8s ease-out;

      .badge-icon {
        // MaterialIcon component handles sizing and color
      }

      .badge-text {
        @include text-badge();
      }
    }

    .section-header {
      @include text-section-header();
      margin: 0 0 1rem 0;

      .period {
        font-family: var(--font-accent);
        @include text-gradient();
      }
    }

    .section-description {
      @include text-description();
      margin: 0;
      animation: fadeInUp 0.8s ease-out 0.4s both;
    }
  }

  .header-divider {
    position: relative;
    margin: 3rem auto;
    width: 200px;
    height: 2px;

    .divider-line {
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: fadeInUp 0.8s ease-out 0.6s both;
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
</style>
