<template>
  <div class="landing-view-container">
    <div
      v-if="contentReady"
      class="portfolio-content-container"
    >
      <NavBar />
      <div class="page-container">
        <Transition>
          <component :is="currentComponent" />
        </Transition>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import LoadingPage from "@/components/loading-page.vue"
import NavBar from "@/components/Nav-bar.vue";
import Footer from "@/components/footer-section.vue";
import usePortfolioStore from "@/stores/portfolio.store";

const portfolioStore = usePortfolioStore();

const { currentComponent } = storeToRefs(portfolioStore);

const contentReady = ref<boolean>(false);

setTimeout(() => {
  contentReady.value = true;
}, 2200)


</script>

<style lang="scss">
.landing-view-container {
  height: 100%;
  .page-container {
    height: 100%;
    background-color: #1c202b;
  }
}
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-leave-from {
  display: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
