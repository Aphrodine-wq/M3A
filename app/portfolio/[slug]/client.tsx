"use client";

import Link from "next/link";
import { companies, teamMembers } from "@/data/site-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Building2,
  Users,
  Globe,
  Linkedin,
} from "lucide-react";

// Industry color mapping
const industryColors: Record<string, { bg: string; text: string; badge: string }> = {
  Healthcare: { bg: "bg-teal-100", text: "text-teal-700", badge: "healthcare" },
  IoT: { bg: "bg-blue-100", text: "text-blue-700", badge: "iot" },
  Consumer: { bg: "bg-purple-100", text: "text-purple-700", badge: "fintech" },
  SaaS: { bg: "bg-indigo-100", text: "text-indigo-700", badge: "default" },
  Other: { bg: "bg-gray-100", text: "text-gray-700", badge: "secondary" },
};

export default function CompanyDetailPage({ slug }: { slug: string }) {

  // Find the company by slug
  const company = companies.find((c) => c.slug === slug);

  // Find associated team members (founders)
  const associatedFounders = teamMembers.filter(
    (member) =>
      member.tier === "Founder" && member.associatedCompanyName === company?.name
  );

  // Handle not found
  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Company Not Found</h1>
          <p className="text-gray-600 mb-8">
            The company you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/portfolio">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const colors = industryColors[company.industry] || industryColors.Other;

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Logo */}
            <div
              className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg flex-shrink-0`}
            >
              {company.logo}
            </div>

            {/* Company Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant={colors.badge as any} size="lg">
                  {company.industry}
                </Badge>
                <Badge
                  variant={company.status === "Active" ? "success" : "secondary"}
                  size="lg"
                >
                  {company.status}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
                {company.name}
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {company.shortDescription}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mt-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Founded {company.foundedYear}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-5 h-5" />
                  <span>{company.industry}</span>
                </div>
                {associatedFounders.length > 0 && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span>{associatedFounders.length} Founder(s)</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                {company.websiteUrl && (
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="lg">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-6">About {company.name}</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                {company.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Details Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy mb-4">
                    Company Details
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">Industry</dt>
                      <dd className="text-base font-medium text-gray-900">
                        {company.industry}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Founded</dt>
                      <dd className="text-base font-medium text-gray-900">
                        {company.foundedYear}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">Status</dt>
                      <dd className="text-base font-medium text-gray-900">
                        {company.status}
                      </dd>
                    </div>
                    {company.websiteUrl && (
                      <div>
                        <dt className="text-sm text-gray-500">Website</dt>
                        <dd className="text-base font-medium">
                          <a
                            href={company.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent-blue hover:underline inline-flex items-center gap-1"
                          >
                            {company.websiteUrl.replace(/^https?:\/\//, "")}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </CardContent>
              </Card>

              {/* Founders Card */}
              {associatedFounders.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-navy mb-4">
                      Founders
                    </h3>
                    <div className="space-y-4">
                      {associatedFounders.map((founder) => (
                        <div key={founder.id} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-sm font-semibold text-navy flex-shrink-0">
                            {founder.photo}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {founder.name}
                            </p>
                            <p className="text-sm text-gray-500">{founder.role}</p>
                            {founder.linkedinUrl && (
                              <a
                                href={founder.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-accent-blue hover:underline mt-1"
                              >
                                <Linkedin className="w-3 h-3" />
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More Companies Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-navy">More Portfolio Companies</h2>
            <Link href="/portfolio">
              <Button variant="ghost">
                View All
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companies
              .filter((c) => c.id !== company.id)
              .slice(0, 4)
              .map((relatedCompany) => {
                const relatedColors =
                  industryColors[relatedCompany.industry] || industryColors.Other;
                return (
                  <Link
                    key={relatedCompany.id}
                    href={`/portfolio/${relatedCompany.slug}`}
                    className="group"
                  >
                    <Card
                      hover={true}
                      clickable={true}
                      className="h-full transition-all duration-300 group-hover:shadow-lg"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${relatedColors.bg} ${relatedColors.text} flex items-center justify-center text-sm font-bold`}
                          >
                            {relatedCompany.logo}
                          </div>
                          <Badge
                            variant={
                              relatedCompany.status === "Active"
                                ? "success"
                                : "secondary"
                            }
                            size="sm"
                          >
                            {relatedCompany.status}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-navy group-hover:text-accent-blue transition-colors">
                          {relatedCompany.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {relatedCompany.industry}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
