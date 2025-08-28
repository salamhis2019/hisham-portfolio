/**
 * DOM utility helper functions for common DOM operations
 */

/**
 * Safely queries for elements and returns them as an array
 */
export function queryElements(
  selectors: string | string[],
  container?: Element | Document,
): Element[] {
  const searchContainer = container || document;
  const selectorArray = Array.isArray(selectors) ? selectors : [selectors];

  const elements: Element[] = [];

  selectorArray.forEach(selector => {
    const found = searchContainer.querySelectorAll(selector);
    elements.push(...Array.from(found));
  });

  return elements;
}

/**
 * Safely queries for a single element
 */
export function querySelector(selector: string, container?: Element | Document): Element | null {
  const searchContainer = container || document;
  return searchContainer.querySelector(selector);
}

/**
 * Waits for elements to be available in the DOM
 */
export function waitForElements(
  selectors: string | string[],
  timeout = 5000,
  container?: Element | Document,
): Promise<Element[]> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const checkElements = () => {
      const elements = queryElements(selectors, container);

      if (elements.length > 0) {
        resolve(elements);
        return;
      }

      if (Date.now() - startTime > timeout) {
        reject(new Error(`Elements not found within ${timeout}ms: ${JSON.stringify(selectors)}`));
        return;
      }

      requestAnimationFrame(checkElements);
    };

    checkElements();
  });
}

/**
 * Adds classes to elements with optional delay
 */
export function addClassesToElements(
  elements: Element[] | NodeListOf<Element>,
  className: string,
  delay = 0,
): void {
  const elementsArray = Array.from(elements);

  if (delay > 0) {
    setTimeout(() => {
      elementsArray.forEach(element => element.classList.add(className));
    }, delay);
  } else {
    elementsArray.forEach(element => element.classList.add(className));
  }
}

/**
 * Removes classes from elements
 */
export function removeClassesFromElements(
  elements: Element[] | NodeListOf<Element>,
  className: string,
): void {
  const elementsArray = Array.from(elements);
  elementsArray.forEach(element => element.classList.remove(className));
}

/**
 * Checks if element is in viewport
 */
export function isElementInViewport(element: Element, threshold = 0): boolean {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalThreshold = windowHeight * threshold;
  const horizontalThreshold = windowWidth * threshold;

  return (
    rect.top >= -verticalThreshold &&
    rect.left >= -horizontalThreshold &&
    rect.bottom <= windowHeight + verticalThreshold &&
    rect.right <= windowWidth + horizontalThreshold
  );
}

/**
 * Smoothly scrolls to an element
 */
export function scrollToElement(
  selector: string | Element,
  options: ScrollIntoViewOptions = { behavior: 'smooth' },
): void {
  const element = typeof selector === 'string' ? querySelector(selector) : selector;

  if (element) {
    element.scrollIntoView(options);
  }
}

/**
 * Gets element dimensions and position
 */
export function getElementBounds(element: Element): DOMRect {
  return element.getBoundingClientRect();
}

/**
 * Debounces a function call
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: number;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttles a function call
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
