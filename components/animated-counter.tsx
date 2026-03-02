"use client";

import * as React from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * AnimatedCounter component
 * 
 * Animates a number from start to end value when scrolled into view.
 * Uses framer-motion for smooth spring-based animations.
 * 
 * @example
 * <AnimatedCounter end={100} suffix="+" />
 * 
 * @example
 * <AnimatedCounter start={0} end={50} duration={2} prefix="$" suffix="M" />
 * 
 * @example
 * <AnimatedCounter end={99.9} decimals={1} suffix="%" />
 */
interface AnimatedCounterProps {
  /**
   * Starting value (default: 0)
   */
  start?: number;
  /**
   * Ending value
   */
  end: number;
  /**
   * Duration of animation in seconds (default: 2)
   */
  duration?: number;
  /**
   * Delay before animation starts in seconds (default: 0)
   */
  delay?: number;
  /**
   * Prefix to display before number (e.g., "$", "+")
   */
  prefix?: string;
  /**
   * Suffix to display after number (e.g., "%", "+", "M")
   */
  suffix?: string;
  /**
   * Number of decimal places (default: 0)
   */
  decimals?: number;
  /**
   * CSS class for styling
   */
  className?: string;
  /**
   * Element to render as (default: "span")
   */
  as?: React.ElementType;
  /**
   * Whether to only animate once (default: true)
   */
  once?: boolean;
  /**
   * Spring configuration for animation
   */
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  /**
   * Function to format the number (overrides default formatting)
   */
  formatFn?: (value: number) => string;
  /**
   * Amount of margin for intersection detection (default: "-100px")
   */
  viewportMargin?: string;
}

function AnimatedCounter({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  as: Component = "span",
  once = true,
  springConfig = { stiffness: 50, damping: 20, mass: 1 },
  formatFn,
  viewportMargin = "-100px",
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { 
    once, 
    margin: viewportMargin as any
  });
  const [hasAnimated, setHasAnimated] = React.useState(false);

  // Use spring for smooth animation
  const spring = useSpring(start, {
    stiffness: springConfig.stiffness,
    damping: springConfig.damping,
    mass: springConfig.mass,
  });

  // Transform spring value to display value
  const display = useTransform(spring, (current) => {
    if (formatFn) {
      return formatFn(current);
    }
    return current.toFixed(decimals);
  });

  // Trigger animation when in view
  React.useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        spring.set(end);
        setHasAnimated(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, spring, end, delay]);

  // Format the display value
  const MotionComponent = motion.create(Component as any);

  return (
    <MotionComponent
      ref={ref}
      className={cn("tabular-nums", className)}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </MotionComponent>
  );
}

/**
 * AnimatedCounterGroup component
 * 
 * Displays multiple animated counters in a row/grid layout.
 * Useful for stats sections.
 * 
 * @example
 * <AnimatedCounterGroup
 *   items={[
 *     { end: 50, suffix: "+", label: "Companies" },
 *     { end: 100, suffix: "M", prefix: "$", label: "Raised" },
 *     { end: 99, suffix: "%", label: "Success Rate" },
 *   ]}
 * />
 */
interface CounterItem {
  end: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  duration?: number;
}

interface AnimatedCounterGroupProps {
  items: CounterItem[];
  className?: string;
  itemClassName?: string;
  layout?: "horizontal" | "vertical" | "grid";
  columns?: number;
  gap?: "sm" | "md" | "lg";
}

function AnimatedCounterGroup({
  items,
  className,
  itemClassName,
  layout = "horizontal",
  columns = 3,
  gap = "md",
}: AnimatedCounterGroupProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-8",
    lg: "gap-12",
  };

  const layoutClasses = {
    horizontal: `flex flex-wrap justify-center ${gapClasses[gap]}`,
    vertical: `flex flex-col ${gapClasses[gap]}`,
    grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} ${gapClasses[gap]}`,
  };

  return (
    <div className={cn(layoutClasses[layout], className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col items-center text-center",
            itemClassName
          )}
        >
          <AnimatedCounter
            end={item.end}
            start={item.start}
            prefix={item.prefix}
            suffix={item.suffix}
            decimals={item.decimals}
            duration={item.duration}
            className="text-4xl md:text-5xl font-bold text-[#1A3C6E]"
          />
          <span className="mt-2 text-sm md:text-base text-[#6B7280] uppercase tracking-wide">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export { AnimatedCounter, AnimatedCounterGroup };
export type { AnimatedCounterProps, CounterItem, AnimatedCounterGroupProps };
