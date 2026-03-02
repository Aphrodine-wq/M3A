"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { companies, type Company, type Industry, type CompanyStatus } from "@/data/site-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Calendar, ArrowRight, Filter, X, LayoutGrid } from "lucide-react";

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

type YearFilter = "all" | "2018-2023" | "2024-2026";

const industries: Industry[] = ["Healthcare", "IoT", "Consumer", "SaaS"];
const statuses: CompanyStatus[] = ["Active", "Exited"];
const yearRanges: { value: YearFilter; label: string }[] = [
  { value: "all", label: "All Years" },
  { value: "2018-2023", label: "2018-2023" },
  { value: "2024-2026", label: "2024-2026" },
];

// Industry color mapping
const industryColors: Record<Industry, { bg: string; text: string; badge: string }> = {
  Healthcare: { bg: "bg-teal-100", text: "text-teal-700", badge: "healthcare" },
  IoT: { bg: "bg-blue-100", text: "text-blue-700", badge: "iot" },
  Consumer: { bg: "bg-purple-100", text: "text-purple-700", badge: "fintech" },
  SaaS: { bg: "bg-indigo-100", text: "text-indigo-700", badge: "default" },
  Other: { bg: "bg-gray-100", text: "text-gray-700", badge: "secondary" },
};

// ============================================================================
// FILTER COMPONENTS
// ============================================================================

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
}

function FilterButton({ label, isActive, onClick, count }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${isActive
          ? "bg-navy text-white shadow-md"
          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
        }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${isActive ? "bg-white/20" : "bg-gray-100"
            }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

// ============================================================================
// COMPANY CARD COMPONENT
// ============================================================================

interface CompanyCardProps {
  company: Company;
}

function CompanyCard({ company }: CompanyCardProps) {
  const colors = industryColors[company.industry];

  return (
    <Link href={`/portfolio/${company.slug}`} className="block group">
      <Card
        hover={true}
        clickable={true}
        className="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
      >
        <CardHeader className="pb-4">
          {/* Logo and Status */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center text-lg font-bold shadow-sm`}
            >
              {company.logo}
            </div>
            <Badge
              variant={company.status === "Active" ? "success" : "secondary"}
              size="sm"
            >
              {company.status}
            </Badge>
          </div>

          {/* Company Name */}
          <CardTitle className="text-xl text-navy group-hover:text-accent-blue transition-colors">
            {company.name}
          </CardTitle>

          {/* Industry Badge */}
          <div className="mt-2">
            <Badge variant={colors.badge as any} size="sm">
              {company.industry}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Description */}
          <CardDescription className="line-clamp-2">
            {company.shortDescription}
          </CardDescription>
        </CardContent>

        <CardFooter className="pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center justify-between w-full">
            {/* Founded Year */}
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Founded {company.foundedYear}</span>
            </div>

            {/* Arrow indicator on hover */}
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-blue group-hover:translate-x-1 transition-all duration-200" />
          </div>
        </CardFooter>

        {/* Hover overlay with additional details */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy/95 via-navy/90 to-transparent rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <p className="text-white text-sm font-medium flex items-center gap-2">
            View Company Details
            <ArrowRight className="w-4 h-4" />
          </p>
        </div>
      </Card>
    </Link>
  );
}

// ============================================================================
// EMPTY STATE COMPONENT
// ============================================================================

interface EmptyStateProps {
  onClearFilters: () => void;
}

function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Filter className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-navy mb-2">
        No companies match your filters
      </h3>
      <p className="text-gray-500 text-center max-w-md mb-6">
        Try adjusting your filter criteria or clear all filters to see all portfolio companies.
      </p>
      <Button onClick={onClearFilters} variant="secondary">
        <X className="w-4 h-4 mr-2" />
        Clear Filters
      </Button>
    </div>
  );
}

// ============================================================================
// STATS SUMMARY COMPONENT
// ============================================================================

interface StatsSummaryProps {
  filteredCount: number;
  totalCount: number;
  industryCounts: Record<Industry | "all", number>;
}

function StatsSummary({ filteredCount, totalCount, industryCounts }: StatsSummaryProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Total Count */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
            <LayoutGrid className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Showing</p>
            <p className="text-2xl font-bold text-navy">
              {filteredCount}{" "}
              <span className="text-lg font-normal text-gray-400">
                of {totalCount} companies
              </span>
            </p>
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="flex flex-wrap gap-4">
          {industries.map((industry) => (
            <div key={industry} className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${industry === "Healthcare"
                    ? "bg-teal-500"
                    : industry === "IoT"
                      ? "bg-blue-500"
                      : industry === "Consumer"
                        ? "bg-purple-500"
                        : "bg-indigo-500"
                  }`}
              />
              <span className="text-sm text-gray-600">
                {industry}: {" "}
                <span className="font-semibold text-navy">
                  {industryCounts[industry] || 0}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN PORTFOLIO PAGE
// ============================================================================

export default function PortfolioPage() {
  // Filter states
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState<CompanyStatus | "all">("all");
  const [selectedYear, setSelectedYear] = useState<YearFilter>("all");

  // Filter logic
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      // Industry filter
      if (selectedIndustry !== "all" && company.industry !== selectedIndustry) {
        return false;
      }

      // Status filter
      if (selectedStatus !== "all" && company.status !== selectedStatus) {
        return false;
      }

      // Year filter
      if (selectedYear !== "all") {
        if (selectedYear === "2018-2023") {
          if (company.foundedYear < 2018 || company.foundedYear > 2023) {
            return false;
          }
        } else if (selectedYear === "2024-2026") {
          if (company.foundedYear < 2024 || company.foundedYear > 2026) {
            return false;
          }
        }
      }

      return true;
    });
  }, [selectedIndustry, selectedStatus, selectedYear]);

  // Stats calculations
  const industryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: companies.length };
    industries.forEach((ind) => {
      counts[ind] = companies.filter((c) => c.industry === ind).length;
    });
    return counts;
  }, []);

  const statusCounts = useMemo(() => {
    const counts: Record<string, number> = { all: companies.length };
    statuses.forEach((status) => {
      counts[status] = companies.filter((c) => c.status === status).length;
    });
    return counts;
  }, []);

  const filteredIndustryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: filteredCompanies.length };
    industries.forEach((ind) => {
      counts[ind] = filteredCompanies.filter((c) => c.industry === ind).length;
    });
    return counts;
  }, [filteredCompanies]);

  // Handlers
  const clearFilters = () => {
    setSelectedIndustry("all");
    setSelectedStatus("all");
    setSelectedYear("all");
  };

  const hasActiveFilters =
    selectedIndustry !== "all" || selectedStatus !== "all" || selectedYear !== "all";

  return (
    <div className="min-h-screen">
      {/* ==========================================================================
          HERO SECTION
          ========================================================================== */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-navy" />
              <span className="text-sm font-medium text-navy">Portfolio</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Our Portfolio
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {companies.length} companies across healthcare, IoT, consumer, and SaaS
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FILTER BAR
          ========================================================================== */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Industry Filter */}
            <FilterSection title="Industry">
              <FilterButton
                label="All"
                isActive={selectedIndustry === "all"}
                onClick={() => setSelectedIndustry("all")}
                count={industryCounts.all}
              />
              {industries.map((industry) => (
                <FilterButton
                  key={industry}
                  label={industry}
                  isActive={selectedIndustry === industry}
                  onClick={() => setSelectedIndustry(industry)}
                  count={industryCounts[industry]}
                />
              ))}
            </FilterSection>

            {/* Status Filter */}
            <FilterSection title="Status">
              <FilterButton
                label="All"
                isActive={selectedStatus === "all"}
                onClick={() => setSelectedStatus("all")}
                count={statusCounts.all}
              />
              {statuses.map((status) => (
                <FilterButton
                  key={status}
                  label={status}
                  isActive={selectedStatus === status}
                  onClick={() => setSelectedStatus(status)}
                  count={statusCounts[status]}
                />
              ))}
            </FilterSection>

            {/* Year Filter */}
            <FilterSection title="Year Founded">
              <FilterButton
                label="All Years"
                isActive={selectedYear === "all"}
                onClick={() => setSelectedYear("all")}
              />
              {yearRanges.slice(1).map((range) => (
                <FilterButton
                  key={range.value}
                  label={range.label}
                  isActive={selectedYear === range.value}
                  onClick={() => setSelectedYear(range.value)}
                />
              ))}
            </FilterSection>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div className="lg:ml-auto flex items-end">
                <Button
                  onClick={clearFilters}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-navy"
                >
                  <X className="w-4 h-4 mr-1.5" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          PORTFOLIO GRID
          ========================================================================== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCompanies.length > 0 ? (
            <>
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredCompanies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>

              {/* Stats Summary Footer */}
              <div className="mt-12 md:mt-16">
                <StatsSummary
                  filteredCount={filteredCompanies.length}
                  totalCount={companies.length}
                  industryCounts={filteredIndustryCounts}
                />
              </div>
            </>
          ) : (
            <EmptyState onClearFilters={clearFilters} />
          )}
        </div>
      </section>
    </div>
  );
}
