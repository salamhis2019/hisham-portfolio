<template>
  <div class="parent-container">
    <NavBar />
    <component :is="currentComponent" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import NavBar from "@/components/Nav-bar.vue";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();

const { currentComponent } = storeToRefs(portfolioStore);
</script>

<style lang="scss"></style>
