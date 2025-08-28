<template>
  <div class="main-view">
    <div class="content-container">
      <intro-content />
      <about-me-view />
      <work-section />
      <page-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PageFooter from '@/components/common/PageFooter.vue';
import IntroContent from '@/components/IntroContent.vue';
import WorkSection from '@/components/WorkSection.vue';
import AboutMeView from '@/views/AboutMeView.vue';
</script>

<style lang="scss" scoped>
.main-view {
  min-height: 100%;
  display: flex;

  .content-container {
    height: 100%;
    width: 100%;
  }
}
</style>
