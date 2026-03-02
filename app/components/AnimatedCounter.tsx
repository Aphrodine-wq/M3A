'use client';

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface AnimatedCounterGroupProps {
  stats: {
    label: string;
    value: string;
    numericValue: number;
    prefix?: string;
    suffix?: string;
  }[];
  className?: string;
}

export function AnimatedCounterGroup({ stats, className = '' }: AnimatedCounterGroupProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3C6E] mb-2">
            <AnimatedCounter
              target={stat.numericValue}
              prefix={stat.prefix}
              suffix={stat.suffix}
              duration={2000}
            />
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
