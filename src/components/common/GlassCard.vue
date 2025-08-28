<template>
  <div class="glass-card" :class="cardClass">
    <!-- Card Header -->
    <div v-if="showHeader" class="card-header">
      <div v-if="icon" class="header-icon">
        <div class="icon-circle" :class="iconVariant">
          <MaterialIcon :name="icon" size="lg" class="icon" />
        </div>
      </div>
      <h3 v-if="title" class="card-title">{{ title }}</h3>
      <div v-if="showCount && count !== undefined" class="skill-count">{{ count }}</div>
    </div>

    <!-- Card Content -->
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';
import MaterialIcon from './MaterialIcon.vue';

/** Types */

interface Props {
  title?: string;
  icon?: string;
  iconVariant?: 'default' | 'tech' | 'soft';
  showCount?: boolean;
  count?: number;
  variant?: 'bio' | 'skills' | 'stats';
}

/** Props */

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  icon: undefined,
  iconVariant: 'default',
  showCount: false,
  count: undefined,
  variant: undefined,
});

/** Computed */

const showHeader = computed(
  () => props.title || props.icon || (props.showCount && props.count !== undefined),
);

const cardClass = computed(() => {
  const classes = [];
  if (props.variant) {
    classes.push(`${props.variant}-card`);
  }
  return classes;
});
</script>

<style lang="scss" scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  transform: translateY(30px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.8s ease;
  }

  &.animate-in {
    transform: translateY(0);
    opacity: 1;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

    .header-icon {
      .icon-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.1);

        &.tech {
          background: linear-gradient(135deg, rgba(0, 136, 255, 0.2), rgba(0, 136, 255, 0.1));
          border-color: rgba(0, 136, 255, 0.3);
        }

        &.soft {
          background: linear-gradient(135deg, rgba(255, 0, 128, 0.2), rgba(255, 0, 128, 0.1));
          border-color: rgba(255, 0, 128, 0.3);
        }

        .icon {
          // MaterialIcon component handles sizing and color
        }
      }
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      flex: 1;
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
    }

    .skill-count {
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
    }
  }

  .card-content {
    position: relative;
    z-index: 2;
  }

  // Variant-specific styles
  &.stats-card {
    text-align: center;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .glass-card {
    padding: 1.5rem;
  }
}
</style>
