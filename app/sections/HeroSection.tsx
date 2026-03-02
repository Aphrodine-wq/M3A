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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        {/* Animated mesh gradient blobs */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(26,60,110,0.4) 0%, rgba(26,60,110,0) 70%)',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0) 70%)',
            animation: 'pulse 12s ease-in-out infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1A3C6E] tracking-tight mb-6">
            Anything is possible
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
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
            className="px-8 py-4 bg-[#1A3C6E] text-white font-semibold rounded-full hover:bg-[#14325a] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-base sm:text-lg"
          >
            Our Studio
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 bg-white text-[#1A3C6E] font-semibold rounded-full border-2 border-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white transition-all duration-300 text-base sm:text-lg"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-[#1A3C6E] transition-colors cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown 
          className="w-6 h-6 animate-bounce group-hover:text-[#1A3C6E]" 
        />
      </button>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
