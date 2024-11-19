<template>
  <div class="landing-view">
    <nav-bar />
    <portfolio-content />
    <page-footer />
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/common/NavBar.vue";
import PageFooter from "@/components/common/PageFooter.vue";
import PortfolioContent from "@/components/portfolio-content.vue";
</script>

<style lang="scss" scoped>
.landing-view {
  height: calc(100% - 200px);
}
</style>
