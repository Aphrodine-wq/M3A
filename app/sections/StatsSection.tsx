'use client';

import { AnimatedCounterGroup } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';
import { siteSettings } from '../data/site-data';

export function StatsSection() {
  return (
    <section id="stats" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <AnimatedCounterGroup stats={siteSettings.stats} />
        </ScrollReveal>
      </div>
    </section>
  );
}
