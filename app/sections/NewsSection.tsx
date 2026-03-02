'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/ScrollReveal';
import { newsArticles } from '../data/site-data';
import { ArrowRight, Calendar } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'Articles': 'bg-blue-100 text-blue-700',
  'Press Releases': 'bg-purple-100 text-purple-700',
  'Investments': 'bg-green-100 text-green-700',
};

export function NewsSection() {
  const featuredArticle = newsArticles.find((a) => a.featured);
  const otherArticles = newsArticles.filter((a) => !a.featured).slice(0, 2);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section id="news" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[16%] h-52 w-52 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[12%] h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-teal font-semibold text-sm uppercase tracking-wider mb-4 block">
                Latest Updates
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
                News & Press
              </h2>
            </div>
            <p className="text-gray-600 mt-4 md:mt-0 max-w-md">
              Insights, announcements, and stories from across the Mission 3A portfolio.
            </p>
          </div>
        </ScrollReveal>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Featured Article */}
          {featuredArticle && (
            <ScrollReveal className="lg:row-span-2">
              <Link href={`/news/${featuredArticle.slug}`}>
                <div className="group h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Featured Image Placeholder */}
                  <div className="h-64 md:h-80 bg-gradient-to-br from-navy/10 via-accent-blue/10 to-teal/10 border-b border-border flex items-center justify-center">
                    <div className="text-navy text-center p-8">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[featuredArticle.category]}`}>
                        {featuredArticle.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {featuredArticle.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredArticle.publishDate)}
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-navy font-semibold group-hover:text-teal transition-colors">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Other Articles */}
          <div className="space-y-6">
            {otherArticles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 100}>
                <Link href={`/news/${article.slug}`}>
                  <div className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.publishDate)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-teal transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <ScrollReveal>
          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 group"
            >
              View All News
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
