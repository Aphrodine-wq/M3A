"use client";

import Link from "next/link";
import { ScrollReveal, ScrollRevealGroup } from "@/components/scroll-reveal";
import {
  teamMembers,
  getTeamByTier,
  type TeamMember,
  type TeamTier,
  companies,
} from "@/data/site-data";
import { Linkedin, ArrowRight, Building2, Users } from "lucide-react";

// Color schemes for initials avatars
const colorSchemes = [
  { bg: "bg-teal/10", text: "text-teal", border: "border-teal/20" },
  { bg: "bg-accent-blue/10", text: "text-accent-blue", border: "border-accent-blue/20" },
  { bg: "bg-navy/10", text: "text-navy", border: "border-navy/20" },
  { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20" },
  { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  { bg: "bg-rose-500/10", text: "text-rose-600", border: "border-rose-500/20" },
  { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20" },
  { bg: "bg-indigo-500/10", text: "text-indigo-600", border: "border-indigo-500/20" },
];

function getColorScheme(index: number) {
  return colorSchemes[index % colorSchemes.length];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getCompanySlug(companyName: string): string | undefined {
  const company = companies.find((c) => c.name === companyName);
  return company?.slug;
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroSection() {
  const totalMembers = teamMembers.length;
  const collectiveYears = "200+";

  return (
    <section className="relative bg-gradient-healthcare pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <ScrollReveal animation="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            {totalMembers} Team Members
          </span>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-teal">Team</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.2}>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A collective of {collectiveYears} years of experience across venture capital,
            technology, healthcare, and entrepreneurship. Meet the people building
            the next generation of transformative companies.
          </p>
        </ScrollReveal>

        {/* Quick stats */}
        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-10">
            {[
              { value: "7", label: "Leadership" },
              { value: "11", label: "Venture Partners" },
              { value: "5", label: "Healthcare Advisors" },
              { value: "20", label: "Studio Team" },
              { value: "6", label: "Founders" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================
function SectionHeader({
  title,
  count,
  description,
  highlighted = false,
}: {
  title: string;
  count: number;
  description?: string;
  highlighted?: boolean;
}) {
  return (
    <ScrollReveal animation="fade-up" className="mb-10 md:mb-12">
      <div className={`p-6 md:p-8 rounded-2xl ${highlighted ? "bg-teal/5 border-2 border-teal/20" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy">{title}</h2>
              <span className="px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full">
                {count}
              </span>
            </div>
            {description && (
              <p className="text-muted-foreground max-w-2xl">{description}</p>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ============================================================================
// LEADERSHIP CARD
// ============================================================================
function LeadershipCard({ member, index }: { member: TeamMember; index: number }) {
  const colors = getColorScheme(index);

  return (
    <Link href={`/team/${member.slug}`} className="group block">
      <div className="relative bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent-blue/30 h-full">
        {/* Hover accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-accent-blue rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="flex flex-col items-center text-center">
          {/* Photo/Initials */}
          <div
            className={`w-24 h-24 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}
          >
            <span className={`text-2xl font-bold ${colors.text}`}>
              {getInitials(member.name)}
            </span>
          </div>

          {/* Name & Title */}
          <h3 className="text-lg font-semibold text-navy mb-1 group-hover:text-accent-blue transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-teal font-medium mb-3">{member.role}</p>

          {/* External Title */}
          {member.externalTitle && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {member.externalTitle}
            </p>
          )}

          {/* LinkedIn icon */}
          {member.linkedinUrl && (
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent-blue transition-colors" />
            </div>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="w-5 h-5 text-accent-blue" />
        </div>
      </div>
    </Link>
  );
}

// ============================================================================
// VENTURE PARTNER CARD
// ============================================================================
function VenturePartnerCard({ member, index }: { member: TeamMember; index: number }) {
  const colors = getColorScheme(index + 7);

  return (
    <Link href={`/team/${member.slug}`} className="group block">
      <div className="relative bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent-blue/30 h-full">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue to-navy rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="flex flex-col items-center text-center">
          <div
            className={`w-24 h-24 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}
          >
            <span className={`text-2xl font-bold ${colors.text}`}>
              {getInitials(member.name)}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-navy mb-1 group-hover:text-accent-blue transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-accent-blue font-medium mb-3">{member.role}</p>

          {member.externalTitle && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {member.externalTitle}
            </p>
          )}
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="w-5 h-5 text-accent-blue" />
        </div>
      </div>
    </Link>
  );
}

// ============================================================================
// HEALTHCARE ADVISOR CARD
// ============================================================================
function HealthcareAdvisorCard({ member, index }: { member: TeamMember; index: number }) {
  const colors = getColorScheme(index + 14);

  return (
    <Link href={`/team/${member.slug}`} className="group block">
      <div className="relative bg-white rounded-2xl border-2 border-teal/10 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-teal/40 h-full">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-teal-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal/10 text-teal text-xs font-medium rounded-full">
            <Building2 className="w-3 h-3" />
            Healthcare
          </span>
        </div>

        <div className="flex flex-col items-center text-center pt-4">
          <div
            className={`w-24 h-24 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}
          >
            <span className={`text-2xl font-bold ${colors.text}`}>
              {getInitials(member.name)}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-navy mb-1 group-hover:text-teal transition-colors">
            {member.name}
          </h3>
          <p className="text-sm text-teal font-medium mb-3">{member.role}</p>

          {member.externalTitle && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {member.externalTitle}
            </p>
          )}
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
          <ArrowRight className="w-5 h-5 text-teal" />
        </div>
      </div>
    </Link>
  );
}

// ============================================================================
// STUDIO TEAM CARD (Compact)
// ============================================================================
function StudioTeamCard({ member, index }: { member: TeamMember; index: number }) {
  const colors = getColorScheme(index);

  return (
    <div className="group bg-white rounded-xl border border-border p-4 transition-all duration-200 hover:shadow-md hover:border-accent-blue/20">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center flex-shrink-0`}
        >
          <span className={`text-sm font-bold ${colors.text}`}>
            {getInitials(member.name)}
          </span>
        </div>

        <div className="min-w-0">
          <h4 className="font-medium text-navy text-sm truncate group-hover:text-accent-blue transition-colors">
            {member.name}
          </h4>
          <p className="text-xs text-muted-foreground truncate">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FOUNDER CARD
// ============================================================================
function FounderCard({ member, index }: { member: TeamMember; index: number }) {
  const colors = getColorScheme(index + 10);
  const companySlug = member.associatedCompanyName
    ? getCompanySlug(member.associatedCompanyName)
    : undefined;

  if (companySlug) {
    return (
      <Link
        href={`/portfolio/${companySlug}`}
        className="group block cursor-pointer"
      >
        <FounderCardContent member={member} colors={colors} />
      </Link>
    );
  }

  return (
    <div className="group block">
      <FounderCardContent member={member} colors={colors} />
    </div>
  );
}

function FounderCardContent({
  member,
  colors,
}: {
  member: TeamMember;
  colors: ReturnType<typeof getColorScheme>;
}) {
  return (
    <div className="relative bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy to-accent-blue rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex flex-col items-center text-center">
        <div
          className={`w-24 h-24 rounded-full ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}
        >
          <span className={`text-2xl font-bold ${colors.text}`}>
            {getInitials(member.name)}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-navy mb-1 group-hover:text-accent-blue transition-colors">
          {member.name}
        </h3>
        <p className="text-sm text-navy/70 font-medium mb-3">{member.role}</p>

        {/* Associated Company */}
        {member.associatedCompanyName && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/5 text-navy text-sm font-medium rounded-full">
            <Building2 className="w-4 h-4" />
            {member.associatedCompanyName}
          </div>
        )}
      </div>

    </div>
  );
}

// ============================================================================
// MAIN TEAM PAGE
// ============================================================================
export default function TeamPage() {
  const leadership = getTeamByTier("Leadership");
  const venturePartners = getTeamByTier("VenturePartner");
  const healthcareAdvisors = getTeamByTier("HealthcareAdvisor");
  const studioTeam = getTeamByTier("StudioTeam");
  const founders = getTeamByTier("Founder");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Leadership Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Leadership"
            count={leadership.length}
            description="Our executive team brings decades of combined experience in venture capital, technology, and company building."
          />

          <ScrollRevealGroup
            staggerDelay={0.1}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            gap="lg"
          >
            {leadership.map((member, index) => (
              <LeadershipCard key={member.id} member={member} index={index} />
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Venture Partners Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Venture Partners"
            count={venturePartners.length}
            description="Seasoned operators and investors who provide strategic guidance and hands-on support to our portfolio companies."
          />

          <ScrollRevealGroup
            staggerDelay={0.08}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            gap="lg"
          >
            {venturePartners.map((member, index) => (
              <VenturePartnerCard key={member.id} member={member} index={index} />
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Healthcare Advisory Board Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="p-6 md:p-8 rounded-2xl bg-teal/5 border-2 border-teal/20 mb-10 md:mb-12">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-teal/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-teal" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy">
                      Healthcare Advisory Board
                    </h2>
                    <span className="px-3 py-1 bg-teal/10 text-teal text-sm font-medium rounded-full">
                      {healthcareAdvisors.length}
                    </span>
                  </div>
                  <p className="text-muted-foreground max-w-2xl">
                    Distinguished healthcare leaders who provide clinical expertise, regulatory guidance,
                    and strategic insights to our MedTech portfolio companies.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup
            staggerDelay={0.1}
            columns={{ sm: 1, md: 2, lg: 3 }}
            gap="lg"
          >
            {healthcareAdvisors.map((member, index) => (
              <HealthcareAdvisorCard key={member.id} member={member} index={index} />
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Studio Team Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Studio Team"
            count={studioTeam.length}
            description="The talented individuals who power our venture studio operations—engineering, design, product, and operations."
          />

          <ScrollRevealGroup
            staggerDelay={0.05}
            columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
            gap="md"
          >
            {studioTeam.map((member, index) => (
              <StudioTeamCard key={member.id} member={member} index={index} />
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Founders"
            count={founders.length}
            description="The visionary entrepreneurs leading our portfolio companies. Click to explore their companies."
          />

          <ScrollRevealGroup
            staggerDelay={0.1}
            columns={{ sm: 1, md: 2, lg: 3 }}
            gap="lg"
          >
            {founders.map((member, index) => (
              <FounderCard key={member.id} member={member} index={index} />
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-healthcare">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent to join our studio team
              or lead our next portfolio company.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/studio"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur transition-colors"
              >
                Learn About Our Studio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
