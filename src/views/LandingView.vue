<template>
  <div class="landing-view">
    <side-nav :items="NAV_ITEMS" />

    <div class="content-container">
      <portfolio-content />
      <page-footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideNav from "@/components/common/SideNav.vue";
import PageFooter from "@/components/common/PageFooter.vue";
import PortfolioContent from "@/components/portfolio-content.vue";
import { NAV_ITEMS } from '@/constants/NavItems.const';
</script>

<style lang="scss" scoped>
.landing-view {
  min-height: 100%;
  display: flex;
  margin-left: 250px;

  .content-container {
    height: 100%;
    width: 100%;
  }
}
</style>
