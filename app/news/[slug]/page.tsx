import { blogPosts } from "@/data/site-data";
import NewsArticleClient from "./client";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  return <NewsArticleClient slug={slug} />;
}
