<template>
  <header class="section-header-component">
    <h2 v-if="title" :id="headingId" class="section-header" tabindex="0">
      {{ title }}
    </h2>

    <p v-if="description" class="section-description" tabindex="0">
      {{ description }}
    </p>
  </header>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';

/** Types */

interface Props {
  title?: string;
  description?: string;
  textAlign?: 'left' | 'center' | 'right';
  headingId?: string;
}

/** Props */

withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  textAlign: 'left',
  headingId: undefined,
});
</script>

<style lang="scss" scoped>
@import '@/assets/typography.scss';

.section-header-component {
  text-align: v-bind(textAlign);
  margin-bottom: 2rem;

  .section-header {
    @include text-section-header();
    margin: 0 0 0.5rem 0;
  }

  .section-description {
    @include text-description(var(--font-size-base));
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
  }
}
</style>
