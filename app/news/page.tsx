"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper, Filter } from "lucide-react";
import { ScrollReveal, ScrollRevealGroup } from "@/components/scroll-reveal";
import { blogPosts, teamMembers, type BlogPost, type PostCategory } from "@/data/site-data";

// ============================================================================
// CONSTANTS & HELPERS
// ============================================================================

const categories: PostCategory[] = ["Articles", "Press Releases", "Investments"];

const categoryStyles: Record<PostCategory | "all", { bg: string; text: string; dot: string }> = {
  all: { bg: "bg-navy/5", text: "text-navy", dot: "bg-navy" },
  Articles: { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  "Press Releases": { bg: "bg-purple-100", text: "text-purple-700", dot: "bg-purple-500" },
  Investments: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-500" },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getAuthorName(authorId?: string): string {
  if (!authorId) return "Mission 3A";
  const member = teamMembers.find((m) => m.id === authorId);
  return member ? member.name : "Mission 3A";
}

// ============================================================================
// COMPONENTS
// ============================================================================

function CategoryPill({
  label,
  isActive,
  count,
  onClick,
}: {
  label: string;
  isActive: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? "bg-navy text-white shadow-md"
          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
      }`}
    >
      {label}
      <span
        className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
          isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  const styles = categoryStyles[post.category];
  const authorName = getAuthorName(post.authorId);

  return (
    <ScrollReveal animation="fade-up">
      <Link href={`/news/${post.slug}`} className="group block">
        <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 lg:grid lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="h-56 lg:h-auto bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_rgba(59,130,246,0.3)_0%,_transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,_rgba(20,184,166,0.25)_0%,_transparent_50%)]" />
            </div>
            <div className="relative z-10 p-8 text-center">
              <Newspaper className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}
              >
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground bg-teal/10 text-teal px-2 py-0.5 rounded-full font-medium">
                Featured
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight group-hover:text-accent-blue transition-colors">
              {post.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed flex-1 mb-6">{post.excerpt}</p>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.publishDate)}
                </span>
                <span>{authorName}</span>
              </div>
              <span className="flex items-center gap-1.5 text-navy font-semibold text-sm group-hover:text-accent-blue transition-colors">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  const styles = categoryStyles[post.category];
  const authorName = getAuthorName(post.authorId);

  return (
    <Link href={`/news/${post.slug}`} className="group block h-full">
      <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {/* Color strip */}
        <div
          className={`h-1.5 w-full ${
            post.category === "Articles"
              ? "bg-blue-500"
              : post.category === "Press Releases"
              ? "bg-purple-500"
              : "bg-green-500"
          }`}
        />

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishDate)}
            </span>
          </div>

          <h3 className="text-lg font-bold text-navy mb-3 leading-snug group-hover:text-accent-blue transition-colors line-clamp-2 flex-1">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
            <span className="text-xs text-muted-foreground">{authorName}</span>
            <span className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-accent-blue transition-colors">
              Read more
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | "all">("all");

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      ),
    []
  );

  const filteredPosts = useMemo(
    () =>
      selectedCategory === "all"
        ? sortedPosts
        : sortedPosts.filter((p) => p.category === selectedCategory),
    [sortedPosts, selectedCategory]
  );

  const featuredPost = sortedPosts.find((p) => p.featured);
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id || selectedCategory !== "all");
  const showFeatured = selectedCategory === "all" && featuredPost;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: sortedPosts.length };
    categories.forEach((cat) => {
      counts[cat] = sortedPosts.filter((p) => p.category === cat).length;
    });
    return counts;
  }, [sortedPosts]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy text-sm font-medium rounded-full mb-6">
              <Newspaper className="w-4 h-4" />
              News & Insights
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              News & Press
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights, portfolio announcements, and stories from across the Mission 3A studio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
            <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground whitespace-nowrap flex-shrink-0">
              <Filter className="w-4 h-4" />
              Filter:
            </span>
            <CategoryPill
              label="All"
              isActive={selectedCategory === "all"}
              count={categoryCounts.all}
              onClick={() => setSelectedCategory("all")}
            />
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                isActive={selectedCategory === cat}
                count={categoryCounts[cat] || 0}
                onClick={() => setSelectedCategory(cat)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Featured */}
          {showFeatured && (
            <div>
              <ScrollReveal animation="fade-up">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-teal rounded-full" />
                  Featured Story
                </p>
              </ScrollReveal>
              <FeaturedCard post={featuredPost!} />
            </div>
          )}

          {/* Grid */}
          {gridPosts.length > 0 && (
            <div>
              {showFeatured && (
                <ScrollReveal animation="fade-up">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-accent-blue rounded-full" />
                    {selectedCategory === "all" ? "Latest Stories" : selectedCategory}
                  </p>
                </ScrollReveal>
              )}

              <ScrollRevealGroup staggerDelay={0.1} columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
                {gridPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </ScrollRevealGroup>
            </div>
          )}

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <ScrollReveal animation="fade-up">
              <div className="py-20 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  No articles in this category yet. Check back soon.
                </p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-accent-blue font-medium hover:underline"
                >
                  View all articles
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
