'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[#1A3C6E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to build something extraordinary?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Whether you&apos;re a founder with an idea or an operator looking to join our next venture, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A3C6E] font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg group text-lg"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
