<template>
  <div class="main-view">
    <side-nav :items="NAV_ITEMS" />

    <div class="content-container">
      <intro-content />
      <work-section />
      <projects-section />
      <about-me-view />
      <page-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideNav from "@/components/common/SideNav.vue";
import PageFooter from "@/components/common/PageFooter.vue";
import IntroContent from "@/components/IntroContent.vue";
import WorkSection from "@/components/WorkSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import AboutMeView from '@/views/AboutMeView.vue';
import { NAV_ITEMS } from '@/constants/NavItems.const';
</script>

<style lang="scss" scoped>
.main-view {
  min-height: 100%;
  display: flex;
  margin-left: 250px;

  .content-container {
    height: 100%;
    width: 100%;
  }
}
</style>
