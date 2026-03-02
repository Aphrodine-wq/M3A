'use client';

import { ScrollReveal } from '../components/ScrollReveal';
import { industries } from '../data/site-data';
import { HeartPulse, Cpu, Users, Cloud } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  Cpu,
  Users,
  Cloud,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">
              Focus Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              Industries We Transform
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We bring deep expertise and proven playbooks to these high-impact verticals
            </p>
          </div>
        </ScrollReveal>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon];
            return (
              <ScrollReveal key={industry.id} delay={index * 100}>
                <div className={`group h-full p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer ${industry.bgColor} border border-transparent hover:border-gray-200`}>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className={`w-7 h-7 ${industry.color}`} />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={industry.color}>Learn more</span>
                    <svg 
                      className={`w-4 h-4 ${industry.color} group-hover:translate-x-1 transition-transform`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
