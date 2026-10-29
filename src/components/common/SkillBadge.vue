<template>
  <div class="skill-badge" :class="`${type}-skill`">
    <span class="skill-text">{{ skill }}</span>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';

interface Props {
  skill: string;
  type?: 'tech' | 'soft';
}

withDefaults(defineProps<Props>(), {
  type: 'tech',
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.skill-badge {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.3rem 0.65rem;

  &.tech-skill {
    background: rgba(0, 136, 255, 0.1);
    border-color: rgba(0, 136, 255, 0.25);
  }

  &.soft-skill {
    background: rgba(255, 0, 128, 0.1);
    border-color: rgba(255, 0, 128, 0.25);
  }

  .skill-text {
    @include text-skill-badge();
  }
}
</style>
