'use client';

import { ScrollReveal } from '../components/ScrollReveal';
import { originTimeline } from '../data/site-data';

export function OriginStorySection() {
  return (
    <section id="origin" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[#3B82F6] font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3C6E] mb-4">
              Origin Story
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three decades of building transformative companies led to Mission 3A
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-navy/30" />

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-4 h-full w-0.5 bg-navy/30" />

          <div className="space-y-12 md:space-y-16">
            {originTimeline.map((event, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center`}>
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  } pl-12 md:pl-0`}>
                    <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <span className="inline-block px-3 py-1 bg-[#1A3C6E] text-white text-sm font-semibold rounded-full mb-3">
                        {event.year}
                      </span>
                      {event.company && (
                        <span className="ml-2 text-sm font-medium text-[#3B82F6]">
                          {event.company}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-[#1A3C6E] mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#1A3C6E] rounded-full border-4 border-white shadow-lg z-10 mt-6 md:mt-0" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
