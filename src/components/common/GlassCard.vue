<template>
  <div class="glass-card" :class="cardClass" :tabindex="tabindex">
    <!-- Card Header -->
    <div v-if="showHeader" class="card-header">
      <MaterialIcon v-if="icon" :name="icon" size="md" class="header-icon" :class="iconVariant" />
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
  variant?: 'bio' | 'skills';
  tabindex?: string | number;
}

/** Props */

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  icon: undefined,
  iconVariant: 'default',
  showCount: false,
  count: undefined,
  variant: undefined,
  tabindex: undefined,
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
  background: #121214;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    .header-icon {
      color: rgba(255, 255, 255, 0.6);

      &.tech {
        color: #0088ff;
      }

      &.soft {
        color: #ff0080;
      }
    }

    .card-title {
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: #ffffff;
      margin: 0;
      flex: 1;
      font-family: var(--font-primary);
    }

    .skill-count {
      color: rgba(255, 255, 255, 0.5);
      font-size: var(--font-size-sm);
      font-weight: 600;
      font-family: var(--font-primary);
    }
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .glass-card {
    padding: 1.25rem;
  }
}
</style>
