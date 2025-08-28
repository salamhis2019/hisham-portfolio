/**
 * Animation helper functions for consistent intersection observer animations
 */

import type { AnimationConfig } from '@/types/ui.types';

const DEFAULT_CONFIG: Required<AnimationConfig> = {
  threshold: 0.1,
  rootMargin: '0px',
  staggerDelay: 100,
  animationClass: 'animate-in',
};

/**
 * Creates an intersection observer that adds animation classes to elements when they come into view
 */
export function createAnimationObserver(config: AnimationConfig = {}): IntersectionObserver {
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
export function observeElements(
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
export function initializeElementAnimations(
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
export function animateElementsWithDelay(
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
 * Convenience function for common animation patterns
 */
export function setupCommonAnimations(container?: Element | Document): {
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
