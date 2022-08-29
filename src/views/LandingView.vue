<template>
  <div class="landing-view-container">
    <Transition>
      <div
        v-if="contentReady"
        class="portfolio-content-container"
      >
        <component :is="PortfolioContent" />
      </div>
      <LoadingPage 
        v-else
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PortfolioContent from "@/components/portfolio-content.vue";
import LoadingPage from "@/components/loading-page.vue";

const contentReady = ref<boolean>(false);

setTimeout(() => {
  contentReady.value = true;
}, 6200)
</script>

<style lang="scss" scoped>
.landing-view-container {
  height: 100%;
  .page-container {
    height: 100%;
    background-color: #1c202b;
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
