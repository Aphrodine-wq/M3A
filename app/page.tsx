import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { AboutSection } from './sections/AboutSection';
import { OriginStorySection } from './sections/OriginStorySection';
import { FeaturedCompaniesSection } from './sections/FeaturedCompaniesSection';
import { IndustriesSection } from './sections/IndustriesSection';
import { NewsSection } from './sections/NewsSection';
import { CTASection } from './sections/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero - Full viewport height with animated gradient background */}
      <HeroSection />
      
      {/* Stats - Animated counters */}
      <StatsSection />
      
      {/* About - Venture studio model and differentiators */}
      <AboutSection />
      
      {/* Origin Story - Timeline from AirStrip to Mission 3A */}
      <OriginStorySection />
      
      {/* Featured Companies - Portfolio grid */}
      <FeaturedCompaniesSection />
      
      {/* Industries - Four verticals with real content */}
      <IndustriesSection />
      
      {/* News/Press - Latest articles */}
      <NewsSection />
      
      {/* CTA - Navy background with contact link */}
      <CTASection />
    </main>
  );
}
