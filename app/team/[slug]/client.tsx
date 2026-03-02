"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  getTeamMemberBySlug,
  getTeamByTier,
  companies,
  type TeamMember,
} from "@/data/site-data";
import {
  Linkedin,
  ArrowLeft,
  Mail,
  Building2,
  Briefcase,
  Quote,
} from "lucide-react";

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

function isPhotoUrl(photo: string): boolean {
  return photo.startsWith('/');
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getTierLabel(tier: TeamMember["tier"]): string {
  const labels: Record<TeamMember["tier"], string> = {
    Leadership: "Leadership Team",
    VenturePartner: "Venture Partner",
    HealthcareAdvisor: "Healthcare Advisory Board",
    StudioTeam: "Studio Team",
    Founder: "Founder",
  };
  return labels[tier];
}

function getTierColor(tier: TeamMember["tier"]): string {
  const colors: Record<TeamMember["tier"], string> = {
    Leadership: "text-teal",
    VenturePartner: "text-accent-blue",
    HealthcareAdvisor: "text-teal",
    StudioTeam: "text-navy",
    Founder: "text-navy",
  };
  return colors[tier];
}

function getTierBgColor(tier: TeamMember["tier"]): string {
  const colors: Record<TeamMember["tier"], string> = {
    Leadership: "bg-teal/10",
    VenturePartner: "bg-accent-blue/10",
    HealthcareAdvisor: "bg-teal/10",
    StudioTeam: "bg-navy/10",
    Founder: "bg-navy/10",
  };
  return colors[tier];
}

function getCompanyByName(name: string) {
  return companies.find((c) => c.name === name);
}

interface TeamMemberDetailClientProps {
  slug: string;
}

export default function TeamMemberDetailClient({ slug }: TeamMemberDetailClientProps) {
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const colorScheme = getColorScheme(slug.length);
  const tierLabel = getTierLabel(member.tier);
  const tierColor = getTierColor(member.tier);
  const tierBgColor = getTierBgColor(member.tier);

  // Get related team members (same tier, excluding current)
  const relatedMembers = getTeamByTier(member.tier)
    .filter((m) => m.id !== member.id)
    .slice(0, 3);

  // Get associated company for founders
  const associatedCompany = member.associatedCompanyName
    ? getCompanyByName(member.associatedCompanyName)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Team</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-navy py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Avatar */}
            <ScrollReveal animation="scale">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                {isPhotoUrl(member.photo) ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full ${colorScheme.bg} ${colorScheme.border} flex items-center justify-center`}>
                    <span className={`text-4xl md:text-5xl font-bold ${colorScheme.text}`}>
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <ScrollReveal animation="fade-up" delay={0.1}>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 ${tierBgColor} ${tierColor} rounded-full text-sm font-medium mb-4`}
                >
                  <Briefcase className="w-4 h-4" />
                  {tierLabel}
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.2}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                  {member.name}
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.3}>
                <p className={`text-xl ${tierColor} font-medium mb-4`}>
                  {member.role}
                </p>
              </ScrollReveal>

              {member.externalTitle && (
                <ScrollReveal animation="fade-up" delay={0.4}>
                  <p className="text-white/70 text-lg mb-6">
                    {member.externalTitle}
                  </p>
                </ScrollReveal>
              )}

              {/* Social Links */}
              <ScrollReveal animation="fade-up" delay={0.5}>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  )}
                  <a
                    href="mailto:hello@mission3a.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Contact</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-navy/5 rounded-lg">
                  <Quote className="w-5 h-5 text-navy" />
                </div>
                <h2 className="text-xl font-semibold text-navy">About</h2>
              </div>

              {member.bio ? (
                <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
                  {member.bio.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">
                  Bio coming soon...
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Associated Company (for Founders) */}
          {associatedCompany && (
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="mt-8 bg-navy/5 rounded-2xl border border-navy/10 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-navy/10 rounded-lg">
                    <Building2 className="w-5 h-5 text-navy" />
                  </div>
                  <h2 className="text-xl font-semibold text-navy">
                    Portfolio Company
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">
                      {associatedCompany.logo}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy mb-2">
                      {associatedCompany.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {associatedCompany.shortDescription}
                    </p>
                    <Link
                      href={`/portfolio/${associatedCompany.slug}`}
                      className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-light font-medium transition-colors"
                    >
                      View Company
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Related Team Members */}
      {relatedMembers.length > 0 && (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl font-semibold text-navy mb-8">
                Other {tierLabel} Members
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMembers.map((relatedMember, index) => {
                const relatedColor = getColorScheme(index + relatedMember.name.length);
                return (
                  <ScrollReveal key={relatedMember.id} animation="fade-up" delay={index * 0.1}>
                    <Link
                      href={`/team/${relatedMember.slug}`}
                      className="group flex items-center gap-4 bg-white rounded-xl border border-border p-4 transition-all duration-300 hover:shadow-md hover:border-accent-blue/30"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        {isPhotoUrl(relatedMember.photo) ? (
                          <Image
                            src={relatedMember.photo}
                            alt={relatedMember.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`w-full h-full ${relatedColor.bg} ${relatedColor.border} border flex items-center justify-center`}>
                            <span className={`text-lg font-bold ${relatedColor.text}`}>
                              {getInitials(relatedMember.name)}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-navy truncate group-hover:text-accent-blue transition-colors">
                          {relatedMember.name}
                        </h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {relatedMember.role}
                        </p>
                      </div>

                      <ArrowLeft className="w-4 h-4 text-muted-foreground rotate-180 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Work with {member.name.split(" ")[0]}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Interested in collaborating or learning more about our venture studio?
              We&apos;d love to hear from you.
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
                href="/team"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur transition-colors"
              >
                View Full Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
