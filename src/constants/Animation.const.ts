/**
 * Animation configuration constants for consistent timing and behavior across components
 */
export const ANIMATION_CONFIG = {
  // Delay multipliers for staggered animations
  BIO_DELAY_MULTIPLIER: 0.1,
  SKILL_DELAY_MULTIPLIER: 0.05,

  // Timing for card entrance animations
  CARD_STAGGER_DELAY: 200,

  // Intersection Observer thresholds
  INTERSECTION_THRESHOLD: 0.1,

  // Animation durations (in seconds)
  FADE_IN_DURATION: 0.6,
  CARD_ANIMATION_DURATION: 0.8,

  // Animation delays for section elements
  SECTION_DELAYS: {
    BADGE: 0,
    HEADER: 0.2,
    DESCRIPTION: 0.4,
    DIVIDER: 0.6,
  },

  // Bio paragraph animation timing
  BIO_BASE_DELAY: 0.8,

  // Skill animation timing
  SKILL_BASE_DELAY: 1,
} as const;

/**
 * CSS class names for animations
 */
export const ANIMATION_CLASSES = {
  ANIMATE_IN: 'animate-in',
} as const;

/**
 * DOM selectors for animation targets
 */
export const ANIMATION_SELECTORS = {
  GLASS_CARD: '.glass-card',
  SKILL_BADGE: '.skill-badge',
} as const;
