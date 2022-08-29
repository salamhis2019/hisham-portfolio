<template>
  <NavBar />
  <div class="page-container">
    <Transition>
      <component :is="currentComponent" />
    </Transition>
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import NavBar from "@/components/Nav-bar.vue";
import Footer from "@/components/footer-section.vue";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();

const { currentComponent } = storeToRefs(portfolioStore);
</script>

<style lang="scss" scoped>
.page-container {
  height: 100%;
  background-color: #1c202b;
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