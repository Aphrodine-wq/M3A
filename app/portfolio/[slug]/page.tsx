import { companies } from "@/data/site-data";
import CompanyDetailClient from "./client";

export function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

interface CompanyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CompanyDetailPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  return <CompanyDetailClient slug={slug} />;
}
