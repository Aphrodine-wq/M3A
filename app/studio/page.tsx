"use client";

import Link from "next/link";
import {
  Lightbulb,
  ClipboardCheck,
  Hammer,
  Rocket,
  TrendingUp,
  MapPin,
  ArrowRight,
  Building2,
  Sparkles,
  Archive,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, ScrollRevealGroup } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { siteSettings } from "@/data/site-data";

// Process steps data
const processSteps = [
  {
    number: "01",
    title: "Ideate",
    description:
      "We identify market opportunities through our network of advisors, industry research, and founder insights. Our team systematically evaluates ideas based on market size, competitive dynamics, and operational capabilities.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Validate",
    description:
      "Before writing a single line of code, we validate concepts through customer research, prototype testing, and market analysis. This rigorous process helps us avoid building products nobody wants.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Once validated, we assemble a founding team and begin building the product. Mission 3A provides initial capital, engineering resources, and operational infrastructure to accelerate development.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We work with founding teams to execute go-to-market strategies, leveraging our network for early customer acquisition and strategic partnerships that drive initial traction.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Scale",
    description:
      "As companies find product-market fit, we continue to provide support while helping them raise external capital and build independent, high-performing organizations.",
    icon: TrendingUp,
  },
];

export default function StudioPage() {
  const { studioStats, officeLocations } = siteSettings;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy text-sm font-medium rounded-full mb-6">
              <Building2 className="w-4 h-4" />
              About Our Studio
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Our Studio
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mission 3A is a venture studio that co-founds, builds, and scales
              technology startups. We combine operational expertise with venture
              capital to transform bold ideas into market-leading companies
              across healthcare, IoT, consumer, and SaaS verticals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 md:py-20 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <ScrollRevealGroup
            staggerDelay={0.15}
            columns={{ sm: 1, md: 3 }}
            gap="lg"
          >
            {studioStats.map((stat, index) => {
              const icons = [Sparkles, Lightbulb, Archive];
              const Icon = icons[index];
              const hasSuffix = stat.suffix || "";
              const numericValue = parseInt(stat.value, 10);

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-6"
                >
                  <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-navy" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-navy mb-2">
                    <AnimatedCounter
                      end={numericValue}
                      suffix={hasSuffix}
                      duration={2}
                      delay={0.2 + index * 0.15}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </h3>
                  {stat.description && (
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  )}
                </div>
              );
            })}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl">
              <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
                Our Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                A 30-Year Trial-Tested Process
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                What sets Mission 3A apart is our battle-tested methodology for
                company creation. Over three decades of collective experience,
                we&apos;ve refined a process that dramatically improves the odds of
                startup success. We don&apos;t just invest in companies—we build them
                from the ground up, applying lessons learned from both our
                victories and our setbacks.
              </p>
              <p>
                Our approach combines the agility of a startup with the
                resources of an established organization. When you partner with
                Mission 3A, you gain access to shared engineering talent,
                established playbooks, and a network of advisors who have
                walked the same journey before. This operational leverage
                allows our portfolio companies to move faster, make fewer
                mistakes, and focus on what truly matters: building products
                that customers love.
              </p>
              <p>
                We&apos;ve learned that the earliest stages of company creation are
                where the most critical decisions are made. That&apos;s why we invest
                heavily in validation before committing resources to build. Our
                rigorous process has helped us avoid costly missteps while
                identifying opportunities that others might overlook.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote Callout */}
          <ScrollReveal animation="scale" delay={0.2}>
            <div className="mt-12 p-8 bg-navy rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal/20 rounded-full blur-2xl" />
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                  &quot;Building companies is hard work, but with the right process,
                  the right people, and the right partners, we&apos;re creating
                  something meaningful—one venture at a time.&quot;
                </p>
                <footer className="mt-4 text-white/80">
                  <span className="font-semibold">Trey Moore</span>
                  <span className="mx-2">•</span>
                  <span>Founding Partner, Mission 3A</span>
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                The Mission 3A Process
              </h2>
              <p className="text-muted-foreground">
                Our five-stage approach to building successful companies from
                concept to scale.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-navy/20 via-accent-blue/30 to-teal/20" />

            <ScrollRevealGroup
              staggerDelay={0.15}
              columns={{ sm: 1, md: 2, lg: 5 }}
              gap="lg"
            >
              {processSteps.map((step, index) => (
                <ProcessStepCard
                  key={step.number}
                  step={step}
                  index={index}
                />
              ))}
            </ScrollRevealGroup>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent-blue font-semibold text-sm uppercase tracking-wider">
                Where We Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Our Locations
              </h2>
              <p className="text-muted-foreground">
                Headquartered in San Antonio with an East Coast presence in
                Greenwich, Connecticut.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <ScrollReveal
                key={office.id}
                animation={index === 0 ? "fade-right" : "fade-left"}
                delay={0.1 * index}
              >
                <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Placeholder Image Area */}
                  <div className="relative h-48 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.3)_0%,_transparent_50%)]" />
                      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,_rgba(20,184,166,0.3)_0%,_transparent_50%)]" />
                    </div>
                    <div className="relative z-10 text-center">
                      <span className="text-6xl font-bold text-white/20">
                        {office.city.slice(0, 2).toUpperCase()}
                      </span>
                      {office.isPrimary && (
                        <span className="absolute -top-2 -right-16 px-3 py-1 bg-teal text-white text-xs font-semibold rounded-full">
                          HQ
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-1">
                          {office.name}
                        </h3>
                        <address className="not-italic text-muted-foreground space-y-0.5">
                          <p>{office.address}</p>
                          <p>
                            {office.city}, {office.state} {office.zip}
                          </p>
                          <p>{office.country}</p>
                        </address>
                      </div>
                    </div>

                    {/* Map Embed Placeholder */}
                    <div className="mt-6 aspect-video bg-muted rounded-xl overflow-hidden border border-border">
                      <iframe
                        src={office.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(20%)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map of ${office.name}`}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-navy to-navy-dark">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet the People Behind Mission 3A
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Our team brings together decades of experience in technology,
              healthcare, and venture building. Get to know the people who make
              our studio tick.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={0.2}>
            <Button asChild size="lg" variant="healthcare" className="group">
              <Link href="/team">
                Meet Our Team
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// Process Step Card Component
function ProcessStepCard({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Number & Icon */}
      <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-lg border border-border flex flex-col items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-navy mb-1" />
        <span className="text-xs font-bold text-accent-blue">{step.number}</span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
        {step.description}
      </p>
    </div>
  );
}
