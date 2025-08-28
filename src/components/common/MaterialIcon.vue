<template>
  <span
    class="material-icons"
    :class="[sizeClass, colorClass]"
    :style="customStyle"
    aria-hidden="true"
  >
    {{ name }}
  </span>
</template>

<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';

/** Types */

interface Props {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  color?: 'white' | 'primary' | 'secondary' | 'accent' | 'muted' | string;
}

/** Props */

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'white',
});

/** Computed */

const sizeClass = computed(() => {
  if (typeof props.size === 'number') return '';
  return `size-${props.size}`;
});

const colorClass = computed(() => {
  const predefinedColors = ['white', 'primary', 'secondary', 'accent', 'muted'];
  if (predefinedColors.includes(props.color)) {
    return `color-${props.color}`;
  }
  return '';
});

const customStyle = computed(() => {
  const style: Record<string, string> = {};

  // Custom size
  if (typeof props.size === 'number') {
    style.fontSize = `${props.size}px`;
  }

  // Custom color (if not predefined)
  const predefinedColors = ['white', 'primary', 'secondary', 'accent', 'muted'];
  if (!predefinedColors.includes(props.color)) {
    style.color = props.color;
  }

  return style;
});
</script>

<style lang="scss" scoped>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  user-select: none;

  // Size variants
  &.size-xs {
    font-size: 0.75rem; // 12px
  }

  &.size-sm {
    font-size: 1rem; // 16px
  }

  &.size-md {
    font-size: 1.25rem; // 20px
  }

  &.size-lg {
    font-size: 1.5rem; // 24px
  }

  &.size-xl {
    font-size: 2rem; // 32px
  }

  // Color variants
  &.color-white {
    color: #ffffff;
  }

  &.color-primary {
    color: #0088ff;
  }

  &.color-secondary {
    color: #ff00bb;
  }

  &.color-accent {
    color: #00ff88;
  }

  &.color-muted {
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
