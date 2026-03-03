// Mission 3A Site Data
// All content centralized for easy maintenance

export interface Company {
  id: string;
  name: string;
  slug: string;
  industry: 'Healthcare' | 'IoT' | 'Consumer' | 'SaaS' | 'Other';
  description: string;
  shortDescription: string;
  foundedYear: number;
  status: 'Active' | 'Exited';
  websiteUrl?: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  tier: 'Leadership' | 'VenturePartner' | 'HealthcareAdvisor' | 'StudioTeam' | 'Founder';
  bio: string;
  linkedinUrl?: string;
  externalTitle?: string;
  initials: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Articles' | 'Press Releases' | 'Investments';
  publishDate: string;
  excerpt: string;
  featured: boolean;
}

export interface OfficeLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  email: string;
  socialLinks: {
    linkedin: string;
    twitter?: string;
  };
  officeLocations: OfficeLocation[];
  stats: {
    label: string;
    value: string;
    numericValue: number;
    suffix?: string;
    prefix?: string;
  }[];
}

// Site-wide settings
export const siteSettings: SiteSettings = {
  siteName: 'Mission 3A',
  siteDescription: 'We co-found, build, and scale technology startups across healthcare, IoT, consumer, and SaaS verticals.',
  email: 'hello@mission3a.com',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/mission3a',
  },
  officeLocations: [
    {
      name: 'San Antonio (HQ)',
      address: '1777 NE Interstate 410 Loop',
      city: 'San Antonio',
      state: 'TX',
      zip: '78217',
    },
    {
      name: 'Greenwich',
      address: '1 Greenwich Plaza',
      city: 'Greenwich',
      state: 'CT',
      zip: '06830',
    },
  ],
  stats: [
    { label: 'Companies Created', value: '22', numericValue: 22, suffix: '' },
    { label: 'Capital Invested', value: '$2B+', numericValue: 2, prefix: '$', suffix: 'B+' },
    { label: 'Partners', value: '30+', numericValue: 30, suffix: '+' },
    { label: 'Years Experience', value: '25', numericValue: 25, suffix: '' },
  ],
};

// Portfolio companies
export const companies: Company[] = [
  {
    id: '1',
    name: 'AirStrip',
    slug: 'airstrip',
    industry: 'Healthcare',
    description: 'Mobile patient monitoring and clinical analytics platform that delivers real-time patient data to care teams.',
    shortDescription: 'Mobile patient monitoring platform for healthcare teams.',
    foundedYear: 2004,
    status: 'Active',
    websiteUrl: 'https://airstrip.com',
    featured: true,
  },
  {
    id: '2',
    name: 'Vivify Health',
    slug: 'vivify-health',
    industry: 'Healthcare',
    description: 'Remote patient monitoring and telehealth platform enabling care at home for chronic conditions.',
    shortDescription: 'Remote patient monitoring and telehealth platform.',
    foundedYear: 2009,
    status: 'Exited',
    websiteUrl: 'https://vivifyhealth.com',
    featured: true,
  },
  {
    id: '3',
    name: 'Binary Fountain',
    slug: 'binary-fountain',
    industry: 'Healthcare',
    description: 'Healthcare reputation management and patient feedback platform.',
    shortDescription: 'Healthcare reputation and patient experience platform.',
    foundedYear: 2013,
    status: 'Exited',
    websiteUrl: 'https://binaryfountain.com',
    featured: true,
  },
  {
    id: '4',
    name: 'Clear Labs',
    slug: 'clear-labs',
    industry: 'Healthcare',
    description: 'Next-generation genomic sequencing platform for food safety and diagnostics.',
    shortDescription: 'Genomic sequencing for food safety and diagnostics.',
    foundedYear: 2014,
    status: 'Active',
    websiteUrl: 'https://clearlabs.com',
    featured: true,
  },
  {
    id: '5',
    name: 'White Knight',
    slug: 'white-knight',
    industry: 'IoT',
    description: 'Industrial fluid handling solutions and smart pump technology for semiconductor and chemical industries.',
    shortDescription: 'Smart pump technology for industrial applications.',
    foundedYear: 2015,
    status: 'Active',
    websiteUrl: 'https://whiteknight.com',
    featured: true,
  },
  {
    id: '6',
    name: 'Splice',
    slug: 'splice',
    industry: 'Consumer',
    description: 'Cloud-based music creation platform with millions of samples, plugins, and DAW integrations.',
    shortDescription: 'Cloud platform for music creation and collaboration.',
    foundedYear: 2013,
    status: 'Active',
    websiteUrl: 'https://splice.com',
    featured: true,
  },
];

// Team members
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Trey Moore',
    slug: 'trey-moore',
    role: 'Founding Partner',
    tier: 'Leadership',
    bio: 'Founder of AirStrip and Mission 3A. Serial entrepreneur with deep expertise in healthcare technology and venture building.',
    linkedinUrl: 'https://linkedin.com/in/treymoore',
    externalTitle: 'Former CEO of AirStrip',
    initials: 'TM',
  },
  {
    id: '2',
    name: 'Matt Hostetler',
    slug: 'matt-hostetler',
    role: 'Managing Partner',
    tier: 'Leadership',
    bio: 'Strategic leader overseeing venture operations and portfolio company growth. Former investment banker and startup operator.',
    linkedinUrl: 'https://linkedin.com/in/matthostetler',
    initials: 'MH',
  },
  {
    id: '3',
    name: 'Augie Pedraza',
    slug: 'augie-pedraza',
    role: 'CTO',
    tier: 'Leadership',
    bio: 'Technical leader responsible for technology strategy and engineering across the portfolio.',
    linkedinUrl: 'https://linkedin.com/in/augiepedraza',
    initials: 'AP',
  },
  {
    id: '4',
    name: 'Kyle Smith',
    slug: 'kyle-smith',
    role: 'Head of Marketing',
    tier: 'StudioTeam',
    bio: 'Marketing strategist driving brand, content, and growth initiatives across Mission 3A and portfolio companies.',
    linkedinUrl: 'https://linkedin.com/in/kylesmith',
    initials: 'KS',
  },
];

// News articles
export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Mission 3A Announces Formation of Healthcare Advisory Board',
    slug: 'healthcare-advisory-board',
    category: 'Press Releases',
    publishDate: '2025-12-15',
    excerpt: 'Dr. Greg Berlet, Patrick Fisher, and D... join as founding members to guide healthcare portfolio strategy.',
    featured: true,
  },
  {
    id: '2',
    title: 'Portfolio Company Clear Labs Raises $60M Series D',
    slug: 'clear-labs-funding',
    category: 'Investments',
    publishDate: '2025-10-22',
    excerpt: 'Clear Labs expands its genomic sequencing platform for food safety and diagnostics with new funding round.',
    featured: false,
  },
  {
    id: '3',
    title: 'The Future of Healthcare: Why Venture Studios Are Leading Innovation',
    slug: 'healthcare-venture-studios',
    category: 'Articles',
    publishDate: '2025-09-08',
    excerpt: 'An in-depth look at how venture studios like Mission 3A are reshaping healthcare entrepreneurship.',
    featured: false,
  },
];

// Industries/Verticals
export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & MedTech',
    description: 'Building transformative healthcare companies that improve patient outcomes and streamline clinical workflows. From remote monitoring to genomic diagnostics.',
    icon: 'HeartPulse',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50 hover:bg-teal-100',
  },
  {
    id: 'iot',
    name: 'IoT & Connected Devices',
    description: 'Developing smart hardware and sensor technologies that bridge the physical and digital worlds for industrial and consumer applications.',
    icon: 'Cpu',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100',
  },
  {
    id: 'consumer',
    name: 'Consumer & Marketplace',
    description: 'Creating consumer platforms and marketplaces that connect people with products, services, and creative tools they love.',
    icon: 'Users',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100',
  },
  {
    id: 'saas',
    name: 'SaaS & Enterprise',
    description: 'Building scalable software solutions that help enterprises optimize operations, enhance productivity, and drive digital transformation.',
    icon: 'Cloud',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 hover:bg-indigo-100',
  },
];

// Origin story timeline
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  company?: string;
}

export const originTimeline: TimelineEvent[] = [
  {
    year: '2004',
    title: 'AirStrip Founded',
    description: 'Trey Moore founded AirStrip in San Antonio, pioneering mobile patient monitoring technology for healthcare. The company would go on to serve over 1,000 hospitals nationwide.',
    company: 'AirStrip',
  },
  {
    year: '2013',
    title: 'Splice Launched',
    description: 'Co-founded Splice, a cloud-based music creation platform that revolutionized how musicians create and collaborate, growing to millions of users worldwide.',
    company: 'Splice',
  },
  {
    year: '2014',
    title: 'GoPro Partnership',
    description: 'Strategic involvement with GoPro during its hyper-growth phase, providing operational expertise as the company scaled to become a global consumer electronics leader.',
    company: 'GoPro',
  },
  {
    year: '2018',
    title: 'Mission 3A Founded',
    description: 'Leveraging decades of operational experience, Mission 3A was established as a venture studio to systematically co-found, build, and scale technology startups.',
    company: 'Mission 3A',
  },
];

// About section content
export const aboutContent = {
  headline: 'We build companies, not just back them.',
  description: `Mission 3A is a venture studio that co-founds technology startups alongside exceptional founders. Unlike traditional venture capital firms that simply write checks, we roll up our sleeves and build alongside you.

Our studio model combines capital, technical expertise, and operational support to dramatically increase the odds of startup success. We validate ideas, assemble teams, build MVPs, and scale companies across healthcare, IoT, consumer, and SaaS verticals.

With 25 years of combined founder experience and over $2 billion in capital deployed, we've developed a systematic approach to company building that de-risks the startup journey.`,
  differentiators: [
    {
      title: 'Proven Track Record',
      description: '22 companies created with multiple successful exits including Vivify Health and Binary Fountain.',
      icon: 'Award',
    },
    {
      title: 'Deep Healthcare Expertise',
      description: 'Founded AirStrip, a leading healthcare technology company serving 1,000+ hospitals.',
      icon: 'HeartPulse',
    },
    {
      title: 'Hands-On Partnership',
      description: 'We provide capital AND operational support—engineering, design, marketing, and executive leadership.',
      icon: 'Handshake',
    },
    {
      title: 'Systematic Approach',
      description: 'Our 5-stage process (Ideate → Validate → Create → Launch → Scale) has been refined over 25 years.',
      icon: 'GitBranch',
    },
  ],
};
