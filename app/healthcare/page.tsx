"use client";

import Link from "next/link";
import {
  HeartPulse,
  Stethoscope,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Building2,
  Award,
  Microscope,
  Activity,
} from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  companies,
  teamMembers,
  getCompaniesByIndustry,
  getTeamByTier,
} from "@/data/site-data";

const healthcareCompanies = getCompaniesByIndustry("Healthcare");
const healthcareAdvisors = getTeamByTier("HealthcareAdvisor");

const healthcareFocusAreas = [
  {
    icon: Activity,
    title: "Remote Patient Monitoring",
    description:
      "Connected devices and platforms that enable continuous monitoring of patients outside traditional clinical settings.",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Genomics",
    description:
      "Advanced diagnostic platforms leveraging genomic sequencing, AI, and machine learning for faster, more accurate clinical decisions.",
  },
  {
    icon: Stethoscope,
    title: "Surgical & Clinical Workflow",
    description:
      "Technology that streamlines surgical procedures, reduces errors, and optimizes clinical workflows for better patient outcomes.",
  },
  {
    icon: HeartPulse,
    title: "Maternal & Preventive Health",
    description:
      "Platforms addressing maternal health disparities and preventive care to reduce long-term costs and improve population health.",
  },
  {
    icon: Shield,
    title: "Regulatory Navigation",
    description:
      "Deep expertise in FDA clearance pathways, HIPAA compliance, and healthcare data governance to accelerate time to market.",
  },
  {
    icon: Users,
    title: "Health System Partnerships",
    description:
      "A network of hospital systems, payers, and health executives that opens doors for pilots, contracts, and enterprise deals.",
  },
];

const differentiators = [
  "Deep clinical expertise through our Healthcare Advisory Board",
  "Regulatory strategy from former FDA officials",
  "Existing relationships with major health systems",
  "Track record of successful healthcare exits (Vivify Health, Binary Fountain)",
  "Shared healthcare engineering and compliance infrastructure",
  "Access to physician network for product validation",
];

const advisorColorSchemes = [
  { bg: "bg-teal/10", text: "text-teal" },
  { bg: "bg-accent-blue/10", text: "text-accent-blue" },
  { bg: "bg-navy/10", text: "text-navy" },
  { bg: "bg-purple-100", text: "text-purple-600" },
  { bg: "bg-amber-100", text: "text-amber-600" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-gradient-healthcare py-24 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-blue/30 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-6 border border-white/20">
              <HeartPulse className="w-4 h-4 text-teal" />
              Healthcare & MedTech
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building the Future of{" "}
              <span className="text-teal">Healthcare</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              Mission 3A has deep roots in healthcare technology, from co-founding AirStrip — a
              pioneer in mobile patient monitoring — to building a portfolio of companies
              transforming how care is delivered.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="healthcare">
                <Link href="/portfolio">
                  View Healthcare Portfolio
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                <Link href="/contact">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollRevealGroup staggerDelay={0.12} columns={{ sm: 2, md: 4 }} gap="md">
            {[
              { value: "7", label: "Healthcare Companies", suffix: "" },
              { value: "2", label: "Successful Exits", suffix: "+" },
              { value: "1,000", label: "Hospitals Served", suffix: "+" },
              { value: "5", label: "Advisory Board Members", suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-4">
                <p className="text-3xl md:text-4xl font-bold text-navy">
                  {stat.value}
                  <span className="text-teal">{stat.suffix}</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-teal font-semibold text-sm uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
              Why Healthcare Is Our Deepest Vertical
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-5">
              <p>
                Healthcare innovation requires more than capital — it demands clinical expertise,
                regulatory knowledge, and trusted relationships with health systems. This is why
                Mission 3A has invested deeply in building a healthcare practice unlike any other
                venture studio.
              </p>
              <p>
                Our journey began when Founding Partner Trey Moore co-founded AirStrip in San
                Antonio, pioneering mobile patient monitoring technology for hospitals. That
                experience taught us that healthcare companies need a fundamentally different kind
                of support to navigate the complexities of clinical environments, FDA regulations,
                and hospital procurement.
              </p>
              <p>
                Today, our healthcare portfolio spans surgical workflow, wound care, maternal
                health, remote patient monitoring, cardiac diagnostics, and clinical decision
                support. Each company benefits from our shared regulatory infrastructure, clinical
                validation network, and health system partnership pipeline.
              </p>
            </div>
          </ScrollReveal>

          {/* Differentiators list */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 md:py-28 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-teal font-semibold text-sm uppercase tracking-wider">
                Focus Areas
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                Where We Build in Healthcare
              </h2>
              <p className="text-muted-foreground">
                We concentrate our healthcare investments in high-impact areas where technology
                can meaningfully improve patient outcomes and lower costs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup staggerDelay={0.1} columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
            {healthcareFocusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Healthcare Portfolio */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="text-teal font-semibold text-sm uppercase tracking-wider">
                  Our Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
                  Healthcare Companies
                </h2>
              </div>
              <Button asChild variant="secondary">
                <Link href="/portfolio">
                  View All Companies
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup staggerDelay={0.1} columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
            {healthcareCompanies.map((company) => (
              <Link
                key={company.id}
                href={`/portfolio/${company.slug}`}
                className="group block bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-teal/10 text-teal rounded-xl flex items-center justify-center text-sm font-bold">
                    {company.logo}
                  </div>
                  <Badge variant={company.status === "Active" ? "success" : "secondary"} size="sm">
                    {company.status}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-accent-blue transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                  {company.shortDescription}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                  <span>Founded {company.foundedYear}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-accent-blue transition-all" />
                </div>
              </Link>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Healthcare Advisory Board */}
      {healthcareAdvisors.length > 0 && (
        <section className="py-20 md:py-28 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-teal font-semibold text-sm uppercase tracking-wider">
                  Advisory Board
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
                  Healthcare Advisory Board
                </h2>
                <p className="text-muted-foreground">
                  Our Healthcare Advisory Board brings together leading physicians, health system
                  executives, and regulatory experts to guide our growing MedTech portfolio.
                </p>
              </div>
            </ScrollReveal>

            <ScrollRevealGroup staggerDelay={0.12} columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
              {healthcareAdvisors.map((advisor, index) => {
                const scheme = advisorColorSchemes[index % advisorColorSchemes.length];
                return (
                  <Link
                    key={advisor.id}
                    href={`/team/${advisor.slug}`}
                    className="group block bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${scheme.bg} ${scheme.text} flex items-center justify-center text-lg font-bold flex-shrink-0`}
                      >
                        {getInitials(advisor.name)}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy group-hover:text-accent-blue transition-colors">
                          {advisor.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{advisor.externalTitle}</p>
                      </div>
                    </div>
                    {advisor.bio && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {advisor.bio}
                      </p>
                    )}
                  </Link>
                );
              })}
            </ScrollRevealGroup>

            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="text-center mt-10">
                <Button asChild variant="secondary">
                  <Link href="/team">
                    <Users className="w-4 h-4 mr-2" />
                    Meet the Full Team
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-gradient-healthcare">
        <div className="max-w-4xl mx-auto text-center text-white">
          <ScrollReveal animation="fade-up">
            <Award className="w-12 h-12 text-teal mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Building a Healthcare Company?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              If you have a healthcare idea you believe in, we want to hear about it. Our studio
              model provides the capital, clinical expertise, and operational infrastructure to
              give your company the best possible start.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="healthcare">
                <Link href="/contact">
                  <Building2 className="w-5 h-5 mr-2" />
                  Start a Conversation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/10 text-white border border-white/30 hover:bg-white/20"
              >
                <Link href="/studio">
                  Learn How We Work
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
