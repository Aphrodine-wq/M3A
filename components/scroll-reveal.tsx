"use client";

import * as React from "react";
import { motion, Variants, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Animation preset types
 */
type AnimationPreset = 
  | "fade" 
  | "fade-up" 
  | "fade-down" 
  | "fade-left" 
  | "fade-right"
  | "scale" 
  | "scale-up" 
  | "slide-up" 
  | "slide-down" 
  | "slide-left" 
  | "slide-right"
  | "flip-up" 
  | "flip-down" 
  | "zoom-in" 
  | "zoom-out";

/**
 * Get animation variants based on preset
 */
function getAnimationVariants(preset: AnimationPreset): Variants {
  const presets: Record<AnimationPreset, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-left": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    "fade-right": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.5, y: 40 },
      visible: { opacity: 1, scale: 1, y: 0 },
    },
    "slide-up": {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    "slide-down": {
      hidden: { y: -100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    "slide-left": {
      hidden: { x: -100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    "slide-right": {
      hidden: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    "flip-up": {
      hidden: { opacity: 0, rotateX: 30, y: 40 },
      visible: { opacity: 1, rotateX: 0, y: 0 },
    },
    "flip-down": {
      hidden: { opacity: 0, rotateX: -30, y: -40 },
      visible: { opacity: 1, rotateX: 0, y: 0 },
    },
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1 },
    },
    "zoom-out": {
      hidden: { opacity: 0, scale: 1.5 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return presets[preset];
}

/**
 * ScrollReveal component
 * 
 * Wrapper component that animates children when scrolled into view.
 * Uses framer-motion for smooth entrance animations.
 * 
 * @example
 * // Fade up animation (default)
 * <ScrollReveal>
 *   <h2>Section Title</h2>
 * </ScrollReveal>
 * 
 * @example
 * // Custom animation preset
 * <ScrollReveal animation="scale">
 *   <Card>Content</Card>
 * </ScrollReveal>
 * 
 * @example
 * // Staggered children
 * <ScrollReveal staggerChildren={0.1}>
 *   {items.map(item => <div key={item.id}>{item.name}</div>)}
 * </ScrollReveal>
 * 
 * @example
 * // Custom delay and duration
 * <ScrollReveal delay={0.5} duration={0.8}>
 *   <p>Delayed content</p>
 * </ScrollReveal>
 */
interface ScrollRevealProps {
  /**
   * Child elements to animate
   */
  children: React.ReactNode;
  /**
   * Animation preset (default: "fade-up")
   */
  animation?: AnimationPreset;
  /**
   * Custom animation variants (overrides preset)
   */
  variants?: Variants;
  /**
   * Delay before animation starts (in seconds)
   */
  delay?: number;
  /**
   * Animation duration (in seconds, default: 0.5)
   */
  duration?: number;
  /**
   * Easing function (default: "easeOut")
   */
  ease?: string | number[];
  /**
   * Whether to animate only once (default: true)
   */
  once?: boolean;
  /**
   * Amount of element that must be visible to trigger (0-1, default: 0.3)
   */
  amount?: number;
  /**
   * Margin for intersection detection (default: "0px")
   */
  margin?: string;
  /**
   * CSS class for the wrapper
   */
  className?: string;
  /**
   * CSS class when element is visible
   */
  visibleClassName?: string;
  /**
   * Stagger delay between children (in seconds, default: 0)
   */
  staggerChildren?: number;
  /**
   * Delay children animation by this amount
   */
  delayChildren?: number;
  /**
   * Tag/element to render as (default: "div")
   */
  as?: keyof React.JSX.IntrinsicElements;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Callback when animation completes
   */
  onAnimationComplete?: () => void;
}

function ScrollReveal({
  children,
  animation = "fade-up",
  variants: customVariants,
  delay = 0,
  duration = 0.5,
  ease = [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth feel
  once = true,
  amount = 0.3,
  margin = "0px",
  className,
  visibleClassName,
  staggerChildren = 0,
  delayChildren = 0,
  as: Component = "div",
  style,
  onAnimationComplete,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    amount,
    margin: margin as any,
  });

  // Get base variants
  const baseVariants = customVariants || getAnimationVariants(animation);

  // Create container variants with stagger
  const containerVariants: Variants = staggerChildren > 0
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay + delayChildren,
          },
        },
      }
    : baseVariants;

  // Create child variants for staggered animations
  const childVariants: Variants = staggerChildren > 0
    ? baseVariants
    : {};

  const MotionComponent = motion.create(Component as any);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      transition={staggerChildren > 0 ? undefined : {
        duration,
        delay,
        ease: ease as any,
      }}
      className={cn(
        isInView && visibleClassName,
        className
      )}
      style={style}
      onAnimationComplete={onAnimationComplete}
    >
      {staggerChildren > 0
        ? React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              transition={{
                duration,
                ease: ease as any,
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </MotionComponent>
  );
}

/**
 * ScrollRevealGroup component
 * 
 * Optimized for revealing multiple items with staggered animations.
 * Automatically wraps children in animated containers.
 * 
 * @example
 * <ScrollRevealGroup staggerDelay={0.1}>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </ScrollRevealGroup>
 */
interface ScrollRevealGroupProps extends Omit<ScrollRevealProps, 'children'> {
  /**
   * Items to animate
   */
  children: React.ReactNode;
  /**
   * Delay between each item (default: 0.1)
   */
  staggerDelay?: number;
  /**
   * Grid columns for responsive layouts
   */
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /**
   * Gap between items
   */
  gap?: "sm" | "md" | "lg" | "xl";
}

function ScrollRevealGroup({
  children,
  staggerDelay = 0.1,
  columns,
  gap = "md",
  className,
  ...props
}: ScrollRevealGroupProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-10",
  };

  // Build responsive grid classes
  const gridClasses = columns
    ? [
        "grid",
        gapClasses[gap],
        columns.sm && `grid-cols-${columns.sm}`,
        columns.md && `md:grid-cols-${columns.md}`,
        columns.lg && `lg:grid-cols-${columns.lg}`,
        columns.xl && `xl:grid-cols-${columns.xl}`,
      ]
        .filter(Boolean)
        .join(" ")
    : cn("flex flex-wrap", gapClasses[gap]);

  return (
    <ScrollReveal
      staggerChildren={staggerDelay}
      className={cn(gridClasses, className)}
      {...props}
    >
      {children}
    </ScrollReveal>
  );
}

/**
 * ParallaxScroll component
 * 
 * Creates a parallax scrolling effect for child elements.
 * 
 * @example
 * <ParallaxScroll speed={0.5}>
 *   <Image src="..." />
 * </ParallaxScroll>
 */
interface ParallaxScrollProps {
  children: React.ReactNode;
  /**
   * Parallax speed (0 = no movement, 1 = full scroll, -1 = inverse)
   */
  speed?: number;
  /**
   * CSS class
   */
  className?: string;
}

function ParallaxScroll({
  children,
  speed = 0.5,
  className,
}: ParallaxScrollProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setOffset((scrollProgress - 0.5) * 100 * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        style={{ y: offset }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export { 
  ScrollReveal, 
  ScrollRevealGroup, 
  ParallaxScroll,
  getAnimationVariants,
};
export type { 
  ScrollRevealProps, 
  ScrollRevealGroupProps, 
  ParallaxScrollProps,
  AnimationPreset,
};
