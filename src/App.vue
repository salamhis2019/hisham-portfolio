<template>
  <div class="main-view">
    <!-- Skip Navigation Link -->
    <a href="#main-content" class="skip-link" @click="skipToMain"> Skip to main content </a>

    <!-- Main Content Container -->
    <div class="content-container">
      <main id="main-content" role="main" aria-label="Portfolio content">
        <section id="intro-content" class="section-wrapper" aria-labelledby="intro-heading">
          <intro-content />
        </section>
        <section id="about-me" class="section-wrapper" aria-labelledby="about-heading">
          <about-me-view />
        </section>
        <section id="work-experience" class="section-wrapper" aria-labelledby="work-heading">
          <work-section />
        </section>
      </main>
      <footer id="footer" role="contentinfo" aria-label="Site footer">
        <page-footer />
      </footer>
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
import { SECTIONS } from '@/constants/Sections.const';

/** Router */

const router = useRouter();
const route = useRoute();

/** State */

let observer: IntersectionObserver | null = null;

/** Methods */

function skipToMain() {
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.focus();
    mainContent.scrollIntoView({ behavior: 'smooth' });
  }
}

/** Lifecycle Hooks */

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

        const sectionConfig = SECTIONS.find(s => s.id === targetSection.id);
        if (sectionConfig && route.params.currentPage !== sectionConfig.route) {
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
  SECTIONS.forEach(({ id }) => {
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
      const targetSection = SECTIONS.find(s => s.route === currentRoute);
      if (targetSection) {
        const element = document.getElementById(targetSection.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }
});

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
  flex-direction: column;

  // Skip Link Styles
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000000;
    color: #ffffff;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 9999;
    font-weight: 600;
    border: 2px solid #ffffff;
    transition: all 0.3s ease;

    &:focus {
      top: 6px;
      outline: 2px solid #0088ff;
      outline-offset: 2px;
    }

    &:hover {
      background: #0088ff;
      color: #ffffff;
    }
  }

  .content-container {
    height: 100%;
    width: 100%;
    flex: 1;

    #main-content {
      // Ensure main content can receive focus
      outline: none;

      &:focus {
        outline: 2px solid #0088ff;
        outline-offset: 4px;
      }
    }

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
    }
  }
}

// Global focus styles for better accessibility
:global(*:focus) {
  outline: 2px solid #0088ff;
  outline-offset: 2px;
}

// Ensure interactive elements have proper focus indicators
:global(button:focus),
:global(a:focus),
:global(input:focus),
:global(textarea:focus),
:global(select:focus) {
  outline: 2px solid #0088ff;
  outline-offset: 2px;
}
</style>
