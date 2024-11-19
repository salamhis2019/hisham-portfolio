<template>
  <div class="portfolio-content">
    <Transition>
      <component :is="currentComponent" />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();

const { currentComponent } = storeToRefs(portfolioStore);
</script>

<style lang="scss" scoped>
.portfolio-content {
  min-height: 100%;
  background-color: #13141a;
}

.v-leave-from {
  display: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s ease-in;
}
</style>