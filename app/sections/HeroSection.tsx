'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

function SpiceLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path
        d="M120 45c-15 0-28 8-35 20l-25 40c-5 8-2 18 6 23s18 2 23-6l25-40c3-5 8-8 14-8s11 3 14 8c3 5 3 11 0 16l-50 80c-7 12-4 27 8 35s27 4 35-8l25-40c5-8 2-18-6-23s-18-2-23 6l-25 40c-3 5-8 8-14 8s-11-3-14-8c-3-5-3-11 0-16l50-80c7-12 4-27-8-35-5-3-11-5-17-5z"
        fill="currentColor"
      />
    </svg>
  );
}

function AirStripLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 80" className={className}>
      <text x="0" y="65" fontFamily="Arial, Helvetica, sans-serif" fontWeight="300" fontSize="72" letterSpacing="12">
        <tspan fill="#3AADD9">AIR</tspan>
        <tspan fill="#8E8E93">STRIP</tspan>
      </text>
      <text x="540" y="30" fontFamily="Arial, Helvetica, sans-serif" fontWeight="300" fontSize="20" fill="#8E8E93">®</text>
    </svg>
  );
}

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
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1A3C6E 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* 3D Background Logos */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Spice Logo - Left side, tilted in 3D */}
        <div
          className="absolute -left-10 sm:left-[5%] top-1/2 -translate-y-1/2"
          style={{
            perspective: '800px',
          }}
        >
          <div
            className={`transition-all duration-[2000ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: 'rotateY(25deg) rotateX(-5deg) rotateZ(-8deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <SpiceLogo className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] text-gray-100 drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]" />
          </div>
        </div>

        {/* AirStrip Logo - Right side, tilted in 3D */}
        <div
          className="absolute -right-16 sm:right-[2%] top-1/2 -translate-y-[40%]"
          style={{
            perspective: '800px',
          }}
        >
          <div
            className={`transition-all duration-[2000ms] delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: 'rotateY(-20deg) rotateX(5deg) rotateZ(5deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <AirStripLogo className="w-[320px] sm:w-[420px] md:w-[520px] opacity-[0.12] drop-shadow-[0_20px_40px_rgba(0,0,0,0.06)]" />
          </div>
        </div>
      </div>

      {/* Soft accent glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent-blue/5 rounded-full blur-[128px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full text-navy/70 text-sm font-medium mb-8 border border-navy/10">
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              Venture Studio · San Antonio & Greenwich
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy tracking-tight leading-[1.1] mb-6">
              We build companies
              <br />
              <span className="text-teal">from scratch.</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Mission 3A is a venture studio that co-founds, builds, and scales technology
              startups across healthcare, IoT, consumer, and SaaS.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              href="/studio"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all duration-200 text-base shadow-lg shadow-navy/20"
            >
              Our Studio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-lg border border-border hover:border-navy/30 hover:bg-gray-50 transition-all duration-200 text-base shadow-sm"
            >
              Explore Portfolio
            </Link>
          </div>

          {/* Stats bar */}
          <div
            className={`mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-0 sm:divide-x sm:divide-border transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { value: '22', label: 'Companies Created' },
              { value: '$2B+', label: 'Capital Deployed' },
              { value: '25+', label: 'Years Experience' },
              { value: '42', label: 'Team Members' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-2xl sm:text-3xl font-bold text-navy">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/30 hover:text-navy/60 transition-colors cursor-pointer group"
        aria-label="Scroll to next section"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
