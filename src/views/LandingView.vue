<template>
  <div class="landing-view-container">
    <Transition>
      <div class="portfolio-content-container">
        <component :is="PortfolioContent" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import PortfolioContent from "@/components/portfolio-content.vue";
</script>

<style lang="scss" scoped>
.landing-view-container {
  height: 100%;
  .portfolio-content-container {
    height: calc(100% - 200px);
  }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 1.5s ease-in;
}

.leave-from {
  opacity: 1;
}

.v-leave-active {
  transition: opacity 1s ease-out;
}
</style>
