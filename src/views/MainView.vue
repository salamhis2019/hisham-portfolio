<template>
  <div class="main-view">
    <div class="content-container">
      <section id="intro-content" class="section-wrapper">
        <intro-content />
      </section>
      <section id="about-me" class="section-wrapper">
        <about-me-view />
      </section>
      <section id="work-experience" class="section-wrapper">
        <work-section />
      </section>
      <section id="contact" class="section-wrapper">
        <page-footer />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PageFooter from '@/components/common/PageFooter.vue';
import IntroContent from '@/components/IntroContent.vue';
import WorkSection from '@/components/WorkSection.vue';
import AboutMeView from '@/views/AboutMeView.vue';

const router = useRouter();
const route = useRoute();

// Section configuration
const sections = [
  { id: 'intro-content', route: 'intro-content' },
  { id: 'about-me', route: 'about-me' },
  { id: 'work-experience', route: 'work-experience' },
  { id: 'contact', route: 'contact' },
];

let observer: IntersectionObserver | null = null;

// Initialize scroll-based route updating
onMounted(() => {
  // Create intersection observer
  observer = new IntersectionObserver(
    entries => {
      // Get all currently intersecting sections with their visibility
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.id,
          ratio: entry.intersectionRatio,
          boundingRect: entry.boundingClientRect,
        }))
        .sort((a, b) => b.ratio - a.ratio); // Sort by visibility ratio

      if (visibleSections.length > 0) {
        // Get the most visible section
        let targetSection = visibleSections[0];

        // Special handling: if contact section is visible but work section is also visible,
        // prefer work section unless contact section is significantly more visible
        if (targetSection.id === 'contact' && visibleSections.length > 1) {
          const workSection = visibleSections.find(s => s.id === 'work-experience');
          if (workSection && workSection.ratio > 0.2) {
            // If work section is reasonably visible, prefer it over contact
            targetSection = workSection;
          }
        }

        const sectionConfig = sections.find(s => s.id === targetSection.id);
        if (sectionConfig && route.params.currentPage !== sectionConfig.route) {
          console.log(
            `Updating route to: ${sectionConfig.route} (visibility: ${targetSection.ratio.toFixed(
              2,
            )})`,
          );
          router.replace(`/${sectionConfig.route}`);
        }
      }
    },
    {
      // Use multiple thresholds for better detection
      threshold: [0.1, 0.25, 0.5, 0.75],
      // Use viewport as root
      root: null,
      // Reduce margins for better detection
      rootMargin: '-5% 0px -5% 0px',
    },
  );

  // Observe all sections
  sections.forEach(({ id }) => {
    const element = document.getElementById(id);
    if (element && observer) {
      observer.observe(element);
    }
  });

  // Handle initial route on page load
  const currentRoute = route.params.currentPage as string;
  if (currentRoute && currentRoute !== 'intro-content') {
    // Scroll to the section if we're loading a specific route
    setTimeout(() => {
      const targetSection = sections.find(s => s.route === currentRoute);
      if (targetSection) {
        const element = document.getElementById(targetSection.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }
});

// Cleanup observer on unmount
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
.main-view {
  min-height: 100%;
  display: flex;

  .content-container {
    height: 100%;
    width: 100%;

    .section-wrapper {
      min-height: 100vh;
      position: relative;

      // Ensure sections are properly spaced and detectable
      &:not(:last-child) {
        margin-bottom: 0;
      }

      // Add scroll margin for better navigation
      scroll-margin-top: 0;

      // Ensure sections take up appropriate space
      display: flex;
      flex-direction: column;

      &#intro-content {
        // Intro section should be full height
        min-height: 100vh;
      }

      &#about-me {
        // About section should have enough space
        min-height: 100vh;
      }

      &#work-experience {
        // Work section should accommodate content and be easily detectable
        min-height: 100vh;
        padding-bottom: 2rem;
      }

      &#contact {
        // Footer section should have some minimum height for detection
        min-height: 50vh;
        padding-top: 2rem;
      }
    }
  }
}
</style>
