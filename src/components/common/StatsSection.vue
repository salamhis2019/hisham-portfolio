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
.stats-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .stat-item {
    text-align: center;

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      font-family: 'Test the future', 'Orbitron', monospace;
      color: white;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
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
