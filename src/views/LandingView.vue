<template>
  <div class="landing-view">
    <portfolio-content />
  </div>
</template>

<script lang="ts" setup>
import PortfolioContent from "@/components/portfolio-content.vue";
</script>

<style lang="scss" scoped>
.landing-view {
  height: calc(100% - 200px);
}
</style>
