'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNext = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1A3C6E 1px, transparent 1px), linear-gradient(to right, #1A3C6E 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-navy" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-6">
            Venture Studio · San Antonio · Greenwich
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy tracking-tight mb-6 leading-none">
            Anything is<br className="hidden sm:block" /> possible
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            We co-found, build, and scale technology startups across healthcare, IoT, consumer, and SaaS verticals.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/studio"
            className="px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors duration-200 text-base sm:text-lg"
          >
            Our Studio
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-white text-navy font-semibold rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-colors duration-200 text-base sm:text-lg"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-navy transition-colors cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <ChevronDown
          className="w-5 h-5 animate-bounce"
        />
      </button>
    </section>
  );
}
