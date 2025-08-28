<template>
  <header class="section-header-component">
    <div class="header-content">
      <!-- Section Badge -->
      <div v-if="badgeIcon || badgeText" class="section-badge">
        <span v-if="badgeIcon" class="badge-icon">{{ badgeIcon }}</span>
        <span v-if="badgeText" class="badge-text">{{ badgeText }}</span>
      </div>

      <!-- Main Title -->
      <h2 v-if="title" class="section-header">
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

interface Props {
  badgeIcon?: string;
  badgeText?: string;
  title?: string;
  description?: string;
  showDivider?: boolean;
  textAlign?: 'left' | 'center' | 'right';
}

withDefaults(defineProps<Props>(), {
  showDivider: true,
  textAlign: 'center',
});
</script>

<style lang="scss" scoped>
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
        font-size: 1.2rem;
      }

      .badge-text {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        font-weight: 500;
        font-family: 'Helvetica Neue', 'Arial', sans-serif;
      }
    }

    .section-header {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-family: 'Test the future', 'Orbitron', monospace;
      color: #ffffff;
      margin: 0 0 1rem 0;
      font-weight: 700;
      animation: fadeInUp 0.8s ease-out 0.2s both;

      .period {
        font-family: 'Oswald', sans-serif;
        background: linear-gradient(45deg, #0088ff, #ff00bb);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .section-description {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
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
