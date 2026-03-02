'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/ScrollReveal';
import { companies } from '../data/site-data';
import { ArrowRight } from 'lucide-react';

const industryColors: Record<string, string> = {
  Healthcare: 'bg-teal-100 text-teal-700',
  IoT: 'bg-blue-100 text-blue-700',
  Consumer: 'bg-purple-100 text-purple-700',
  SaaS: 'bg-indigo-100 text-indigo-700',
  Other: 'bg-gray-100 text-gray-700',
};

export function FeaturedCompaniesSection() {
  const featuredCompanies = companies.filter((c) => c.featured).slice(0, 6);

  return (
    <section id="companies" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[14%] h-52 w-52 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute -bottom-28 left-[10%] h-64 w-64 rounded-full bg-accent-blue/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                Featured Companies
              </h2>
            </div>
            <p className="text-gray-600 mt-4 md:mt-0 max-w-md">
              A selection of the technology companies we&apos;ve built and scaled across our key verticals.
            </p>
          </div>
        </ScrollReveal>

        {/* Company Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredCompanies.map((company, index) => (
            <ScrollReveal key={company.id} delay={index * 100}>
              <Link href={`/portfolio/${company.slug}`}>
                <div className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                  {/* Logo/Initials */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white font-bold text-sm">
                      {company.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${industryColors[company.industry]}`}>
                      {company.industry}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {company.shortDescription}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      Founded {company.foundedYear}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      company.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {company.status}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-[#14325a] transition-all duration-300 hover:shadow-lg group"
            >
              View All Companies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
