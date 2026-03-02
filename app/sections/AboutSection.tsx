'use client';

import { ScrollReveal } from '../components/ScrollReveal';
import { aboutContent } from '../data/site-data';
import { Award, HeartPulse, Handshake, GitBranch } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  HeartPulse,
  Handshake,
  GitBranch,
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side: Main content */}
          <ScrollReveal direction="left">
            <div>
              <span className="text-[#3B82F6] font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C6E] mb-6 leading-tight">
                {aboutContent.headline}
              </h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                {aboutContent.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right side: Differentiators */}
          <div className="space-y-6">
            {aboutContent.differentiators.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <ScrollReveal key={index} delay={index * 100} direction="right">
                  <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1A3C6E]/10 rounded-lg flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-6 h-6 text-[#1A3C6E]" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1A3C6E] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
