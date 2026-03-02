"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight, Linkedin, User, Newspaper } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  blogPosts,
  teamMembers,
  getPostBySlug,
  type BlogPost,
} from "@/data/site-data";

// ============================================================================
// HELPERS
// ============================================================================

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const categoryStyles: Record<string, { bg: string; text: string }> = {
  Articles: { bg: "bg-blue-100", text: "text-blue-700" },
  "Press Releases": { bg: "bg-purple-100", text: "text-purple-700" },
  Investments: { bg: "bg-green-100", text: "text-green-700" },
};

function getRelatedPosts(current: BlogPost): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== current.id)
    .sort((a, b) => {
      // Same category first
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      if (bMatch !== aMatch) return bMatch - aMatch;
      // Then by date
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    })
    .slice(0, 3);
}

// Render markdown-like body text as structured HTML
function ArticleBody({ body }: { body: string }) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      // Skip blank lines
      continue;
    }

    if (trimmed.startsWith("- ")) {
      // Collect consecutive list items
      const listItems: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        listItems.push(lines[i].trim().slice(2));
        i++;
      }
      i--; // Back up one so outer loop doesn't skip next line
      elements.push(
        <ul key={key++} className="list-disc list-outside pl-5 space-y-2 my-4 text-muted-foreground">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      // Numbered list
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      i--;
      elements.push(
        <ol key={key++} className="list-decimal list-outside pl-5 space-y-3 my-4 text-muted-foreground">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
    } else if (
      // Treat short lines that look like headings (no period at end, less than 60 chars)
      trimmed.length < 70 &&
      !trimmed.endsWith(".") &&
      !trimmed.endsWith(",") &&
      i + 1 < lines.length &&
      lines[i + 1].trim() !== ""
    ) {
      elements.push(
        <h3 key={key++} className="text-xl font-bold text-navy mt-8 mb-3">
          {trimmed}
        </h3>
      );
    } else {
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    }
  }

  return <div className="space-y-1">{elements}</div>;
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function NewsArticleClient({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const author = post.authorId ? teamMembers.find((m) => m.id === post.authorId) : null;
  const relatedPosts = getRelatedPosts(post);
  const styles = categoryStyles[post.category] ?? { bg: "bg-gray-100", text: "text-gray-700" };

  return (
    <div className="min-h-screen bg-background">
      {/* Article Header */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-white">

        <div className="relative max-w-3xl mx-auto">
          {/* Back link */}
          <ScrollReveal animation="fade-up">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              All News & Press
            </Link>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.05}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles.bg} ${styles.text}`}>
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal/10 text-teal">
                  Featured
                </span>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.15}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
          </ScrollReveal>

          {/* Meta */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border">
              {author ? (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-sm font-bold text-navy">
                    {author.photo || author.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{author.name}</p>
                    <p className="text-xs text-muted-foreground">{author.role}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-navy/5 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-navy" />
                  </div>
                  <span className="text-sm font-medium text-navy">Mission 3A</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishDate)}
              </div>

              {author?.linkedinUrl && (
                <a
                  href={author.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent-blue transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image placeholder */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-navy/10 via-accent-blue/10 to-teal/10 border-y border-border overflow-hidden">
        <div className="h-full flex items-center justify-center">
          <Newspaper className="w-20 h-20 text-navy/25" />
        </div>
      </div>

      {/* Article Body */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up">
            {post.body ? (
              <ArticleBody body={post.body} />
            ) : (
              <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
            )}
          </ScrollReveal>

          {/* Share / CTA */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-navy mb-1">
                  Interested in Mission 3A?
                </p>
                <p className="text-sm text-muted-foreground">
                  Learn how we build and scale technology companies.
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Button asChild variant="secondary" size="sm">
                  <Link href="/studio">Our Studio</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold text-navy">More from Mission 3A</h2>
                <Link
                  href="/news"
                  className="flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-navy transition-colors"
                >
                  View all
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related, index) => {
                const relStyles =
                  categoryStyles[related.category] ?? { bg: "bg-gray-100", text: "text-gray-700" };
                return (
                  <ScrollReveal key={related.id} animation="fade-up" delay={index * 0.1}>
                    <Link href={`/news/${related.slug}`} className="group block h-full">
                      <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${relStyles.bg} ${relStyles.text}`}
                          >
                            {related.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(related.publishDate)}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-navy mb-3 leading-snug group-hover:text-accent-blue transition-colors flex-1 line-clamp-3">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                          {related.excerpt}
                        </p>
                        <div className="flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-accent-blue transition-colors mt-auto pt-3 border-t border-border">
                          Read more
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
