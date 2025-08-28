<template>
  <div class="bg-decoration" :class="[`variant-${variant}`, { 'has-grid': showGrid }]">
    <!-- Radial Gradient Background (for intro variant) -->
    <div v-if="showRadialGradient" class="radial-gradient-bg" />

    <!-- Floating Shapes -->
    <div
      v-for="(shape, index) in activeShapes"
      :key="`shape-${index}`"
      class="floating-shape"
      :class="`shape-${index + 1}`"
      :style="getShapeStyles(shape, index)"
    />

    <!-- Grid Overlay (for section variants) -->
    <div v-if="showGrid" class="grid-overlay" />
  </div>
</template>

<script lang="ts" setup>
import { computed, withDefaults, defineProps } from 'vue';
import type {
  BackgroundVariant,
  ShapeConfig,
  VariantConfig,
} from '@/types/background-decoration.types';

/** Props Interface */
interface Props {
  variant?: BackgroundVariant;
  shapeCount?: number;
  showGrid?: boolean;
  showRadialGradient?: boolean;
  customShapes?: ShapeConfig[];
  animationSpeed?: number;
}

/** Props */

const props = withDefaults(defineProps<Props>(), {
  variant: 'section',
  shapeCount: undefined,
  showGrid: undefined,
  showRadialGradient: undefined,
  customShapes: undefined,
  animationSpeed: 1,
});

/** Variant Configurations */

const variantConfigs: Record<string, VariantConfig> = {
  intro: {
    shapeCount: 3,
    showGrid: false,
    showRadialGradient: true,
    shapes: [
      {
        size: { width: '300px', height: '300px' },
        position: { top: '10%', left: '10%' },
        animationDelay: '0s',
        blur: '40px',
      },
      {
        size: { width: '200px', height: '200px' },
        position: { top: '60%', right: '15%' },
        animationDelay: '-5s',
        blur: '40px',
      },
      {
        size: { width: '150px', height: '150px' },
        position: { bottom: '20%', left: '60%' },
        animationDelay: '-10s',
        blur: '40px',
      },
    ],
  },
  section: {
    shapeCount: 3,
    showGrid: true,
    showRadialGradient: false,
    shapes: [
      {
        size: { width: '400px', height: '400px' },
        position: { top: '10%', left: '-10%' },
        animationDelay: '0s',
        blur: '60px',
      },
      {
        size: { width: '300px', height: '300px' },
        position: { top: '50%', right: '-10%' },
        animationDelay: '-7s',
        blur: '60px',
      },
      {
        size: { width: '250px', height: '250px' },
        position: { bottom: '10%', left: '30%' },
        animationDelay: '-14s',
        blur: '60px',
      },
    ],
  },
  card: {
    shapeCount: 2,
    showGrid: false,
    showRadialGradient: false,
    shapes: [
      {
        size: { width: '200px', height: '200px' },
        position: { top: '20%', left: '-10%' },
        animationDelay: '0s',
        blur: '40px',
      },
      {
        size: { width: '150px', height: '150px' },
        position: { bottom: '20%', right: '-5%' },
        animationDelay: '-7s',
        blur: '40px',
      },
    ],
  },
  custom: {
    shapeCount: 0,
    showGrid: false,
    showRadialGradient: false,
    shapes: [],
  },
};

/** Computed Properties */

const activeConfig = computed((): VariantConfig => {
  const baseConfig = variantConfigs[props.variant] || variantConfigs.section;

  return {
    shapeCount: props.shapeCount ?? baseConfig.shapeCount,
    showGrid: props.showGrid ?? baseConfig.showGrid,
    showRadialGradient: props.showRadialGradient ?? baseConfig.showRadialGradient,
    shapes: props.customShapes ?? baseConfig.shapes,
  };
});

const activeShapes = computed((): ShapeConfig[] => {
  const config = activeConfig.value;

  if (props.variant === 'custom' && props.customShapes) {
    return props.customShapes;
  }

  return config.shapes.slice(0, config.shapeCount);
});

const showGrid = computed((): boolean => activeConfig.value.showGrid);

const showRadialGradient = computed((): boolean => activeConfig.value.showRadialGradient);

/** Methods */

const getShapeStyles = (shape: ShapeConfig, _index: number) => {
  const animationDelay = `calc(${shape.animationDelay} * ${props.animationSpeed})`;

  return {
    width: shape.size.width,
    height: shape.size.height,
    top: shape.position.top,
    left: shape.position.left,
    right: shape.position.right,
    bottom: shape.position.bottom,
    '--animation-delay': animationDelay,
    '--blur-amount': shape.blur || '40px',
    background: shape.gradient || undefined,
    filter: `blur(${shape.blur || '40px'})`,
    animationDelay,
  };
};
</script>

<style lang="scss" scoped>
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;

  /* Radial Gradient Background for intro variant */
  .radial-gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 20% 20%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 40% 60%, rgba(0, 136, 255, 0.08) 0%, transparent 50%);
    animation: backgroundShift 20s ease-in-out infinite alternate;
  }

  /* Floating Shapes */
  .floating-shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(255, 0, 128, 0.3), rgba(0, 136, 255, 0.3));

    /* Default animation for intro variant (orbs) */
    animation: floatOrb 15s ease-in-out infinite;
  }

  /* Section variant adjustments */
  &.variant-section .floating-shape {
    background: linear-gradient(45deg, rgba(255, 0, 128, 0.1), rgba(0, 136, 255, 0.1));
    animation: floatShape 20s ease-in-out infinite;
  }

  /* Card variant adjustments */
  &.variant-card .floating-shape {
    background: linear-gradient(45deg, rgba(255, 0, 128, 0.08), rgba(0, 136, 255, 0.08));
    animation: floatShape 15s ease-in-out infinite;
  }

  /* Grid Overlay */
  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridShift 20s linear infinite;
  }
}

/* Animations */
@keyframes backgroundShift {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(180deg);
  }
}

@keyframes floatOrb {
  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-30px) translateX(20px) scale(1.1);
  }
  66% {
    transform: translateY(20px) translateX(-20px) scale(0.9);
  }
}

@keyframes floatShape {
  0%,
  100% {
    transform: translateY(0px) translateX(0px) scale(1);
  }
  33% {
    transform: translateY(-50px) translateX(30px) scale(1.1);
  }
  66% {
    transform: translateY(30px) translateX(-30px) scale(0.9);
  }
}

@keyframes gridShift {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .bg-decoration .floating-shape {
    /* Reduce shape sizes on mobile */
    &.shape-1 {
      width: 250px !important;
      height: 250px !important;
    }

    &.shape-2 {
      width: 200px !important;
      height: 200px !important;
    }

    &.shape-3 {
      width: 150px !important;
      height: 150px !important;
    }
  }
}
</style>
