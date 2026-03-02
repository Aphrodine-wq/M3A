import { teamMembers } from "@/data/site-data";
import TeamMemberDetailClient from "./client";

// Generate static params for all team member detail pages
export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

interface TeamMemberPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  return <TeamMemberDetailClient slug={slug} />;
}
