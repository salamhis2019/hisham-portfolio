<template>
  <GlassCard :variant="variant">
    <div class="stats-grid">
      <template v-for="(stat, index) in stats" :key="stat.label">
        <div class="stat-item">
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
        <div v-if="index < stats.length - 1" class="stat-divider" />
      </template>
    </div>
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
