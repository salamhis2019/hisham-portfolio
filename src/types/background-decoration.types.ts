/**
 * Background Decoration Component Types
 * Defines interfaces for the reusable background decoration system
 */

export type BackgroundVariant = 'intro' | 'section' | 'card' | 'custom';

export interface ShapeConfig {
  /** Shape dimensions */
  size: {
    width: string;
    height: string;
  };
  /** Shape positioning */
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  /** Animation delay for staggered effects */
  animationDelay: string;
  /** Custom gradient override */
  gradient?: string;
  /** Custom blur amount */
  blur?: string;
}

export interface BackgroundDecorationProps {
  /** Predefined variant or custom configuration */
  variant?: BackgroundVariant;
  /** Number of floating shapes (overrides variant default) */
  shapeCount?: number;
  /** Show animated grid overlay */
  showGrid?: boolean;
  /** Show radial gradient background */
  showRadialGradient?: boolean;
  /** Custom shape configurations for 'custom' variant */
  customShapes?: ShapeConfig[];
  /** Animation duration multiplier */
  animationSpeed?: number;
}

export interface VariantConfig {
  shapeCount: number;
  showGrid: boolean;
  showRadialGradient: boolean;
  shapes: ShapeConfig[];
}
