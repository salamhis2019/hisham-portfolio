<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <GlassCard :variant="variant" tabindex="0">
    <ul class="stats-grid" role="group" aria-label="Statistics">
      <template v-for="(stat, index) in stats" :key="stat.label">
        <li class="stat-item" role="img" :aria-label="`${stat.value} ${stat.label}`" tabindex="0">
          <div class="stat-number" aria-hidden="true">{{ stat.value }}</div>
          <div class="stat-label" aria-hidden="true">{{ stat.label }}</div>
        </li>
        <div v-if="index < stats.length - 1" class="stat-divider" aria-hidden="true" />
      </template>
    </ul>
  </GlassCard>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
import GlassCard from './GlassCard.vue';

interface StatItem {
  value: number | string;
  label: string;
}

interface Props {
  /** Array of stat items to display */
  stats: StatItem[];
  /** GlassCard variant */
  variant?: 'bio' | 'skills' | 'stats';
}

withDefaults(defineProps<Props>(), {
  variant: 'stats',
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.stats-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  .stat-item {
    text-align: center;

    .stat-number {
      @include text-stat-number();
    }

    .stat-label {
      @include text-stat-label();
    }
  }

  .stat-divider {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .stats-grid {
    flex-direction: column;
    gap: 1.5rem;

    .stat-divider {
      width: 60px;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
    }
  }
}
</style>
