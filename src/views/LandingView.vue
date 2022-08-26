<template>
  <div class="parent-container">
    <NavBar />
    <div class="page-container">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import NavBar from "@/components/Nav-bar.vue";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();

const { currentComponent } = storeToRefs(portfolioStore);
</script>

<style lang="scss">
.parent-container {
  height: 100%;
  .page-container {
    height: 100%;
    background-color: #1c202b;
  }
}
</style>
