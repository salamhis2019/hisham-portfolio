import { ref, onMounted, onUnmounted, nextTick, type Ref } from 'vue';
import type { AnimationConfig } from '@/types/ui.types';

/**
 * Default animation configuration
 */
const DEFAULT_CONFIG: Required<AnimationConfig> = {
  threshold: 0.1,
  rootMargin: '0px',
  staggerDelay: 100,
  animationClass: 'animate-in',
};

/**
 * Creates an intersection observer that adds animation classes to elements when they come into view
 */
function createAnimationObserver(config: AnimationConfig = {}): IntersectionObserver {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };

  return new IntersectionObserver(
    entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (finalConfig.staggerDelay > 0) {
            setTimeout(() => {
              entry.target.classList.add(finalConfig.animationClass);
            }, index * finalConfig.staggerDelay);
          } else {
            entry.target.classList.add(finalConfig.animationClass);
          }
        }
      });
    },
    {
      threshold: finalConfig.threshold,
      rootMargin: finalConfig.rootMargin,
    },
  );
}

/**
 * Observes multiple elements with the same animation configuration
 */
function observeElements(
  observer: IntersectionObserver,
  selectors: string | string[],
  container?: Element | Document,
): void {
  const selectorArray = Array.isArray(selectors) ? selectors : [selectors];
  const searchContainer = container || document;

  selectorArray.forEach(selector => {
    const elements = searchContainer.querySelectorAll(selector);
    elements.forEach(element => observer.observe(element));
  });
}

/**
 * Creates and starts animation observation for elements
 */
function initializeElementAnimations(
  selectors: string | string[],
  config: AnimationConfig = {},
  container?: Element | Document,
): IntersectionObserver {
  const observer = createAnimationObserver(config);
  observeElements(observer, selectors, container);
  return observer;
}

/**
 * Animates elements with staggered delays (for entrance animations)
 */
function animateElementsWithDelay(
  elements: NodeListOf<Element> | Element[],
  delay = 200,
  animationClass = 'animate-in',
): void {
  const elementsArray = Array.from(elements);

  elementsArray.forEach((el, index) => {
    if (el) {
      setTimeout(() => {
        el.classList.add(animationClass);
      }, index * delay);
    }
  });
}

/**
 * Setup common animation patterns used across the app
 */
function setupCommonAnimations(container?: Element | Document): {
  cardObserver: IntersectionObserver;
  skillObserver: IntersectionObserver;
  cleanup: () => void;
} {
  const cardObserver = initializeElementAnimations(
    ['.glass-card', '.experience-card-wrapper', '.position-section'],
    { threshold: 0.1, staggerDelay: 100 },
    container,
  );

  const skillObserver = initializeElementAnimations(
    ['.skill-badge', '.responsibility-item'],
    { threshold: 0.1, staggerDelay: 50 },
    container,
  );

  const cleanup = () => {
    cardObserver.disconnect();
    skillObserver.disconnect();
  };

  return { cardObserver, skillObserver, cleanup };
}

export interface UseAnimationsOptions {
  /** Elements to observe for intersection animations */
  selectors?: string | string[];
  /** Animation configuration */
  config?: AnimationConfig;
  /** Container element for scoped animations */
  container?: Element | Document;
  /** Whether to auto-initialize on mount */
  autoInit?: boolean;
  /** Whether to use common animation patterns */
  useCommonPatterns?: boolean;
}

export interface UseAnimationsReturn {
  /** Initialize animations manually */
  initializeAnimations: () => void;
  /** Cleanup all observers */
  cleanup: () => void;
  /** Animate elements with staggered delay */
  animateWithDelay: (elements: NodeListOf<Element> | Element[], delay?: number) => void;
  /** Check if animations are initialized */
  isInitialized: Ref<boolean>;
  /** Re-initialize animations (useful after content changes) */
  reinitialize: () => void;
}

/**
 * Composable for managing intersection observer animations
 * Provides a unified interface for all animation patterns used in the app
 */
export function useAnimations(options: UseAnimationsOptions = {}): UseAnimationsReturn {
  const {
    selectors = [],
    config = {},
    container,
    autoInit = true,
    useCommonPatterns = false,
  } = options;

  // State
  const isInitialized = ref(false);
  const observers = ref<IntersectionObserver[]>([]);
  const commonAnimationCleanup = ref<(() => void) | null>(null);

  // Default configuration
  const defaultConfig: AnimationConfig = {
    threshold: 0.1,
    rootMargin: '0px',
    staggerDelay: 100,
    animationClass: 'animate-in',
    ...config,
  };

  /**
   * Initialize animations based on provided selectors
   */
  function initializeAnimations(): void {
    cleanup(); // Clean up existing observers first

    if (useCommonPatterns) {
      // Use the common animation patterns
      const { cleanup: commonCleanup } = setupCommonAnimations(container);
      commonAnimationCleanup.value = commonCleanup;
    }

    if (selectors && (Array.isArray(selectors) ? selectors.length > 0 : selectors)) {
      // Initialize custom selectors
      const observer = initializeElementAnimations(selectors, defaultConfig, container);
      observers.value.push(observer);
    }

    isInitialized.value = true;
  }

  /**
   * Animate elements with staggered delay (immediate animation, not intersection-based)
   */
  function animateWithDelay(
    elements: NodeListOf<Element> | Element[],
    delay = 200,
    animationClass = 'animate-in',
  ): void {
    animateElementsWithDelay(elements, delay, animationClass);
  }

  /**
   * Cleanup all observers and animations
   */
  function cleanup(): void {
    // Disconnect intersection observers
    observers.value.forEach(observer => observer.disconnect());
    observers.value = [];

    // Cleanup common animations
    if (commonAnimationCleanup.value) {
      commonAnimationCleanup.value();
      commonAnimationCleanup.value = null;
    }

    isInitialized.value = false;
  }

  /**
   * Re-initialize animations (useful after content changes)
   */
  function reinitialize(): void {
    nextTick(() => {
      initializeAnimations();
    });
  }

  // Auto-initialize on mount if enabled
  onMounted(() => {
    if (autoInit) {
      nextTick(() => {
        initializeAnimations();
      });
    }
  });

  // Cleanup on unmount
  onUnmounted(() => {
    cleanup();
  });

  return {
    initializeAnimations,
    cleanup,
    animateWithDelay,
    isInitialized,
    reinitialize,
  };
}

/**
 * Preset composable for work experience animations
 */
export function useWorkExperienceAnimations(): UseAnimationsReturn {
  return useAnimations({
    selectors: ['.experience-card-wrapper', '.summary-section'],
    config: {
      threshold: 0.1,
      staggerDelay: 0,
    },
    autoInit: false, // Manual initialization after data loading
  });
}

/**
 * Preset composable for about me animations
 */
export function useAboutMeAnimations(): UseAnimationsReturn {
  return useAnimations({
    useCommonPatterns: true,
    autoInit: false, // Manual initialization after data loading
  });
}

/**
 * Preset composable for intro content animations
 */
export function useIntroAnimations(): UseAnimationsReturn {
  return useAnimations({
    selectors: [
      '.intro-content .profile-container',
      '.intro-content .greeting-badge',
      '.intro-content .section-header',
      '.intro-content .description',
      '.intro-content .social-section',
    ],
    config: {
      threshold: 0.1,
      staggerDelay: 200,
    },
    autoInit: true,
  });
}

/**
 * Preset composable for work experience card animations
 */
export function useWorkExperienceCardAnimations(): UseAnimationsReturn {
  return useAnimations({
    selectors: ['.glass-card', '.position-section', '.responsibility-item', '.skill-badge'],
    config: {
      threshold: 0.1,
      staggerDelay: 100,
    },
    autoInit: true,
  });
}
