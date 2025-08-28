<template>
  <div
    class="skill-badge"
    :class="[`${type}-skill`, { 'animate-in': isAnimated }]"
    :style="{ '--delay': `${animationDelay}s` }"
  >
    <span class="skill-text">{{ skill }}</span>
    <div class="skill-shine" />
  </div>
</template>

<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';

interface Props {
  skill: string;
  type?: 'tech' | 'soft';
  index?: number;
  animationDelayMultiplier?: number;
  isAnimated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'tech',
  index: 0,
  animationDelayMultiplier: 0.05,
  isAnimated: false,
});

const animationDelay = computed(() => {
  return props.index * props.animationDelayMultiplier + 1;
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.skill-badge {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  transform: scale(0.8);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: skillPop 0.6s ease-out calc(var(--delay) + 1s) both;

  &.tech-skill {
    background: linear-gradient(135deg, rgba(0, 136, 255, 0.15), rgba(0, 136, 255, 0.05));
    border-color: rgba(0, 136, 255, 0.3);
  }

  &.soft-skill {
    background: linear-gradient(135deg, rgba(255, 0, 128, 0.15), rgba(255, 0, 128, 0.05));
    border-color: rgba(255, 0, 128, 0.3);
  }

  .skill-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  .skill-text {
    @include text-skill-badge();
    position: relative;
    z-index: 2;
  }

  &.animate-in {
    transform: scale(1);
    opacity: 1;
  }
}

/* Animation */
@keyframes skillPop {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
