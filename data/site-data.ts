/**
 * Mission 3A - Site Data
 * Comprehensive mock CMS data for the venture studio website
 * 
 * This file contains all content data for the Mission 3A website including:
 * - Portfolio companies (22)
 * - Team members (Leadership, Venture Partners, Advisors, Studio Team, Founders)
 * - News/Blog posts
 * - Site settings and statistics
 * - Industry data
 */

// ============================================================================
// TYPES
// ============================================================================

export type Industry = 'Healthcare' | 'IoT' | 'Consumer' | 'SaaS' | 'Other';
export type CompanyStatus = 'Active' | 'Exited';
export type TeamTier = 'Leadership' | 'VenturePartner' | 'HealthcareAdvisor' | 'StudioTeam' | 'Founder';
export type PostCategory = 'Articles' | 'Press Releases' | 'Investments';

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string; // Placeholder initials
  industry: Industry;
  description: string;
  shortDescription: string;
  foundedYear: number;
  status: CompanyStatus;
  websiteUrl?: string;
  featured: boolean;
  teamMemberIds?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  photo: string; // Placeholder initials
  role: string;
  tier: TeamTier;
  bio?: string;
  linkedinUrl?: string;
  externalTitle?: string;
  companyIds?: string[];
  associatedCompanyName?: string; // For Founders tier
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  featuredImage: string; // Placeholder
  category: PostCategory;
  publishDate: string; // ISO date string
  excerpt: string;
  body: string;
  authorId?: string;
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  photo?: string;
  mapEmbed?: string;
  isPrimary: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}

export interface SiteStat {
  label: string;
  value: string;
  suffix?: string;
}

export interface StudioStat {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface IndustryData {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  color: string; // Tailwind color class
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  email: string;
  phone?: string;
  socialLinks: SocialLink[];
  officeLocations: OfficeLocation[];
  homepageStats: SiteStat[];
  studioStats: StudioStat[];
}

// ============================================================================
// COMPANIES (22 Total)
// ============================================================================

export const companies: Company[] = [
  // Featured Healthcare Companies
  {
    id: 'comp-001',
    name: 'SurgerEase',
    slug: 'surgerease',
    logo: 'SE',
    industry: 'Healthcare',
    description: 'SurgerEase is revolutionizing surgical workflows through intelligent automation and predictive analytics. The platform connects surgical teams with real-time data to optimize operating room efficiency, reduce surgical site infections, and improve patient outcomes. By leveraging computer vision and machine learning, SurgerEase provides actionable insights that help hospitals reduce costs while delivering superior care.',
    shortDescription: 'Intelligent surgical workflow automation and OR optimization platform.',
    foundedYear: 2021,
    status: 'Active',
    websiteUrl: 'https://surgerease.io',
    featured: true,
  },
  {
    id: 'comp-002',
    name: 'Replicare',
    slug: 'replicare',
    logo: 'RC',
    industry: 'Healthcare',
    description: 'Replicare develops AI-powered wound care technology that transforms how healthcare providers assess, document, and treat chronic wounds. Using advanced imaging and machine learning, the platform delivers objective wound measurements, automated documentation, and evidence-based treatment recommendations. Replicare\'s technology is helping reduce healing times and healthcare costs while improving quality of life for patients with chronic wounds.',
    shortDescription: 'AI-powered wound care assessment and management platform.',
    foundedYear: 2022,
    status: 'Active',
    websiteUrl: 'https://replicare.health',
    featured: true,
  },
  {
    id: 'comp-003',
    name: 'Good OB',
    slug: 'good-ob',
    logo: 'GO',
    industry: 'Healthcare',
    description: 'Good OB is a modern maternal health platform designed to improve outcomes for mothers and babies throughout pregnancy and postpartum care. The comprehensive digital health solution connects patients with their care teams, provides personalized health tracking, and leverages predictive analytics to identify high-risk pregnancies early. Good OB is committed to addressing the maternal health crisis through technology-enabled, patient-centered care.',
    shortDescription: 'Digital maternal health platform transforming pregnancy and postpartum care.',
    foundedYear: 2023,
    status: 'Active',
    websiteUrl: 'https://goodob.care',
    featured: true,
  },
  // Additional Healthcare Companies
  {
    id: 'comp-004',
    name: 'VitalSync',
    slug: 'vitalsync',
    logo: 'VS',
    industry: 'Healthcare',
    description: 'VitalSync offers a remote patient monitoring ecosystem that seamlessly integrates with existing hospital EHR systems. The platform enables continuous monitoring of vital signs, early warning score calculations, and automated alerts to care teams. VitalSync helps healthcare organizations reduce readmissions, improve patient satisfaction, and extend care beyond hospital walls.',
    shortDescription: 'Enterprise remote patient monitoring platform for health systems.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://vitalsync.health',
    featured: true,
  },
  {
    id: 'comp-005',
    name: 'MedStream AI',
    slug: 'medstream-ai',
    logo: 'MS',
    industry: 'Healthcare',
    description: 'MedStream AI automates medical coding and revenue cycle management using natural language processing and machine learning. The platform accurately extracts clinical information from physician notes, automatically assigns appropriate medical codes, and identifies potential billing issues before claim submission. Healthcare providers using MedStream AI see significant reductions in claim denials and days in accounts receivable.',
    shortDescription: 'AI-powered medical coding and revenue cycle automation.',
    foundedYear: 2021,
    status: 'Active',
    websiteUrl: 'https://medstream.ai',
    featured: false,
  },
  {
    id: 'comp-006',
    name: 'NeuroPath',
    slug: 'neuropath',
    logo: 'NP',
    industry: 'Healthcare',
    description: 'NeuroPath is developing breakthrough digital therapeutics for neurological conditions, starting with stroke rehabilitation. The company\'s FDA-cleared platform uses adaptive algorithms to personalize therapy exercises for each patient, while providing clinicians with detailed progress analytics. NeuroPath\'s technology is enabling better outcomes for patients recovering from neurological injuries in both clinical and home settings.',
    shortDescription: 'Digital therapeutics platform for neurological rehabilitation.',
    foundedYear: 2019,
    status: 'Active',
    websiteUrl: 'https://neuropath.io',
    featured: false,
  },
  {
    id: 'comp-007',
    name: 'CardioSense',
    slug: 'cardiosense',
    logo: 'CS',
    industry: 'Healthcare',
    description: 'CardioSense provides advanced cardiac monitoring solutions for both clinical and consumer applications. Their wearable ECG technology delivers medical-grade heart rhythm analysis with consumer-friendly design. The platform enables early detection of atrial fibrillation and other arrhythmias, helping prevent strokes and other cardiovascular events through timely intervention.',
    shortDescription: 'Wearable cardiac monitoring and arrhythmia detection platform.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://cardiosense.io',
    featured: false,
  },
  // IoT Companies
  {
    id: 'comp-008',
    name: 'SensorFleet',
    slug: 'sensorfleet',
    logo: 'SF',
    industry: 'IoT',
    description: 'SensorFleet builds industrial IoT sensor networks for manufacturing and logistics operations. Their wireless sensor platform monitors equipment health, environmental conditions, and asset location in real-time. With predictive maintenance capabilities and easy deployment, SensorFleet helps industrial companies reduce downtime, optimize operations, and extend equipment lifespan.',
    shortDescription: 'Industrial IoT sensor networks for manufacturing and logistics.',
    foundedYear: 2019,
    status: 'Active',
    websiteUrl: 'https://sensorfleet.io',
    featured: true,
  },
  {
    id: 'comp-009',
    name: 'GridPulse',
    slug: 'gridpulse',
    logo: 'GP',
    industry: 'IoT',
    description: 'GridPulse delivers smart grid solutions for electric utilities, enabling real-time monitoring and management of distributed energy resources. The platform integrates with smart meters, solar inverters, and battery storage systems to optimize grid operations and support the transition to renewable energy. GridPulse is helping utilities modernize infrastructure and meet decarbonization goals.',
    shortDescription: 'Smart grid technology for modern electric utilities.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://gridpulse.energy',
    featured: false,
  },
  {
    id: 'comp-010',
    name: 'FarmLogic',
    slug: 'farmlogic',
    logo: 'FL',
    industry: 'IoT',
    description: 'FarmLogic provides precision agriculture IoT solutions that help farmers increase yields while reducing resource consumption. Their soil sensors, weather stations, and irrigation controllers work together to optimize water usage, detect crop stress early, and automate farm operations. FarmLogic is making sustainable agriculture accessible to farms of all sizes.',
    shortDescription: 'Precision agriculture IoT platform for sustainable farming.',
    foundedYear: 2018,
    status: 'Active',
    websiteUrl: 'https://farmlogic.ag',
    featured: false,
  },
  {
    id: 'comp-011',
    name: 'BuildScan',
    slug: 'buildscan',
    logo: 'BS',
    industry: 'IoT',
    description: 'BuildScan offers construction site monitoring through autonomous drone systems and AI-powered analytics. The platform automatically tracks construction progress, identifies safety violations, and compares as-built conditions against design plans. BuildScan helps general contractors and project owners reduce risk, improve quality control, and keep projects on schedule.',
    shortDescription: 'Autonomous drone monitoring for construction sites.',
    foundedYear: 2021,
    status: 'Active',
    websiteUrl: 'https://buildscan.io',
    featured: false,
  },
  {
    id: 'comp-012',
    name: 'FleetIQ',
    slug: 'fleetiq',
    logo: 'FQ',
    industry: 'IoT',
    description: 'FleetIQ provides fleet management and vehicle telematics for commercial transportation companies. Their platform combines GPS tracking, driver behavior analytics, and predictive maintenance alerts to optimize fleet operations. FleetIQ helps companies reduce fuel costs, improve driver safety, and maximize vehicle utilization.',
    shortDescription: 'Commercial fleet management and telematics platform.',
    foundedYear: 2017,
    status: 'Exited',
    websiteUrl: 'https://fleetiq.com',
    featured: false,
  },
  // Consumer Companies
  {
    id: 'comp-013',
    name: 'BiteBox',
    slug: 'bitebox',
    logo: 'BB',
    industry: 'Consumer',
    description: 'BiteBox delivers chef-curated meal kits with a focus on sustainable sourcing and dietary customization. Unlike traditional meal kit services, BiteBox uses AI to learn customer preferences and optimize recipes for individual tastes and nutritional goals. The company has built a loyal subscriber base through exceptional food quality and personalized experiences.',
    shortDescription: 'AI-personalized sustainable meal kit delivery service.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://bitebox.com',
    featured: true,
  },
  {
    id: 'comp-014',
    name: 'StyleMatch',
    slug: 'stylematch',
    logo: 'SM',
    industry: 'Consumer',
    description: 'StyleMatch is a virtual styling platform that combines AI recommendations with human stylist expertise. Users upload their wardrobe and style preferences to receive personalized outfit suggestions and shopping recommendations. The platform has partnered with major retailers to offer seamless shopping experiences and exclusive styling services.',
    shortDescription: 'AI-powered personal styling and fashion discovery platform.',
    foundedYear: 2021,
    status: 'Active',
    websiteUrl: 'https://stylematch.app',
    featured: false,
  },
  {
    id: 'comp-015',
    name: 'PetConnect',
    slug: 'petconnect',
    logo: 'PC',
    industry: 'Consumer',
    description: 'PetConnect provides comprehensive pet care management through a mobile app and connected devices. Features include vet appointment scheduling, medication reminders, activity tracking, and a marketplace for pet services. PetConnect has become the leading pet care platform, helping millions of pet owners provide better care for their companions.',
    shortDescription: 'All-in-one pet care management platform and marketplace.',
    foundedYear: 2019,
    status: 'Active',
    websiteUrl: 'https://petconnect.io',
    featured: false,
  },
  {
    id: 'comp-016',
    name: 'HomeHero',
    slug: 'homehero',
    logo: 'HH',
    industry: 'Consumer',
    description: 'HomeHero connects homeowners with verified service professionals for home maintenance, repairs, and improvements. The platform uses AI matching to pair customers with the right professionals based on project requirements, budget, and availability. HomeHero also offers financing options and project management tools to simplify home improvement projects.',
    shortDescription: 'On-demand home services marketplace with AI matching.',
    foundedYear: 2018,
    status: 'Exited',
    websiteUrl: 'https://homehero.com',
    featured: false,
  },
  {
    id: 'comp-017',
    name: 'SoundWave',
    slug: 'soundwave',
    logo: 'SW',
    industry: 'Consumer',
    description: 'SoundWave creates personalized audio experiences through adaptive sound technology. Their flagship product, a smart speaker system, automatically adjusts audio output based on room acoustics, listener position, and content type. SoundWave is redefining home audio with audiophile-grade sound that adapts to any environment.',
    shortDescription: 'Adaptive audio technology for personalized listening experiences.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://soundwave.audio',
    featured: false,
  },
  // SaaS Companies
  {
    id: 'comp-018',
    name: 'CloudSync Pro',
    slug: 'cloudsync-pro',
    logo: 'CP',
    industry: 'SaaS',
    description: 'CloudSync Pro is an enterprise data integration platform that connects disparate cloud applications and on-premise systems. The no-code interface allows business users to build complex data workflows without IT involvement, while enterprise-grade security and governance features satisfy CIO requirements. CloudSync Pro has become the integration platform of choice for mid-market companies.',
    shortDescription: 'No-code enterprise data integration and workflow automation platform.',
    foundedYear: 2019,
    status: 'Active',
    websiteUrl: 'https://cloudsyncpro.com',
    featured: true,
  },
  {
    id: 'comp-019',
    name: 'TeamFlow',
    slug: 'teamflow',
    logo: 'TF',
    industry: 'SaaS',
    description: 'TeamFlow is a collaborative workspace platform designed for distributed teams. Combining project management, documentation, video conferencing, and async communication in one unified interface, TeamFlow reduces context switching and improves team productivity. The platform has seen rapid adoption among remote-first technology companies.',
    shortDescription: 'Unified collaboration platform for distributed teams.',
    foundedYear: 2021,
    status: 'Active',
    websiteUrl: 'https://teamflow.app',
    featured: false,
  },
  {
    id: 'comp-020',
    name: 'SecureStack',
    slug: 'securestack',
    logo: 'SS',
    industry: 'SaaS',
    description: 'SecureStack provides cloud security posture management for DevOps teams. The platform continuously monitors cloud infrastructure for misconfigurations, vulnerabilities, and compliance violations, automatically remediating issues when possible. SecureStack enables organizations to maintain strong security while moving fast with cloud-native development.',
    shortDescription: 'Cloud security posture management for DevOps teams.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://securestack.io',
    featured: false,
  },
  {
    id: 'comp-021',
    name: 'DataVault',
    slug: 'datavault',
    logo: 'DV',
    industry: 'SaaS',
    description: 'DataVault offers privacy-compliant customer data infrastructure for modern marketing teams. The platform unifies customer data from multiple sources, manages consent and privacy preferences, and activates data across marketing channels while maintaining strict compliance with GDPR, CCPA, and other privacy regulations.',
    shortDescription: 'Privacy-first customer data platform for marketing teams.',
    foundedYear: 2020,
    status: 'Active',
    websiteUrl: 'https://datavault.io',
    featured: false,
  },
  {
    id: 'comp-022',
    name: 'TalentPath',
    slug: 'talentpath',
    logo: 'TP',
    industry: 'SaaS',
    description: 'TalentPath is an AI-powered talent acquisition platform that helps companies hire the best candidates faster. The platform automates sourcing, screening, and scheduling while reducing bias in the hiring process. TalentPath\'s predictive analytics help hiring managers understand which candidates are most likely to succeed in specific roles.',
    shortDescription: 'AI-powered talent acquisition and hiring optimization platform.',
    foundedYear: 2019,
    status: 'Exited',
    websiteUrl: 'https://talentpath.io',
    featured: false,
  },
];

// ============================================================================
// TEAM MEMBERS
// ============================================================================

export const teamMembers: TeamMember[] = [
  // Leadership Team (7 members)
  {
    id: 'team-001',
    name: 'Trey Moore',
    slug: 'trey-moore',
    photo: '/images/team/trey-moore.jpg',
    role: 'Founding Partner',
    tier: 'Leadership',
    bio: 'Trey Moore is the Founding Partner of Mission 3A, bringing over 25 years of experience in technology entrepreneurship and venture capital. Prior to founding Mission 3A, Trey served as CEO of Splice, where he led the company through its successful acquisition by GoPro. He began his career at AirStrip Technologies, where he was instrumental in building the company from concept to market leader in mobile healthcare technology. Trey holds a B.S. in Computer Science from Stanford University and an MBA from Harvard Business School. He serves on the boards of several Mission 3A portfolio companies and is a frequent speaker on venture studio models and healthcare innovation.',
    linkedinUrl: 'https://linkedin.com/in/treymoore',
    externalTitle: 'Founding Partner',
  },
  {
    id: 'team-002',
    name: 'Matt Hostetler',
    slug: 'matt-hostetler',
    photo: '/images/team/matt-hostetler.jpg',
    role: 'Managing Partner',
    tier: 'Leadership',
    bio: 'Matt Hostetler serves as Managing Partner at Mission 3A, overseeing operations and investment strategy across the portfolio. With a background in management consulting and growth equity, Matt brings deep expertise in scaling technology businesses. Previously, he was a Principal at a leading growth equity firm where he led investments in enterprise software and healthcare technology companies. Matt earned his B.A. in Economics from Duke University and his MBA from the Wharton School. He is passionate about building sustainable businesses that create meaningful impact.',
    linkedinUrl: 'https://linkedin.com/in/matthostetler',
    externalTitle: 'Managing Partner',
  },
  {
    id: 'team-003',
    name: 'Augie Pedraza',
    slug: 'augie-pedraza',
    photo: '/images/team/augie-pedraza.jpg',
    role: 'Chief Technology Officer',
    tier: 'Leadership',
    bio: 'Augie Pedraza is the Chief Technology Officer at Mission 3A, responsible for technology strategy and engineering across the studio\'s portfolio companies. A seasoned technology executive, Augie has built and scaled engineering organizations at multiple high-growth startups. Prior to joining Mission 3A, he was VP of Engineering at a leading healthcare technology company where he led the development of mission-critical clinical systems. Augie holds a B.S. in Computer Engineering from UT Austin and brings deep expertise in cloud architecture, security, and agile development practices.',
    linkedinUrl: 'https://linkedin.com/in/augiepedraza',
    externalTitle: 'CTO',
  },
  {
    id: 'team-004',
    name: 'Kyle Smith',
    slug: 'kyle-smith',
    photo: '/images/team/kyle-smith.jpg',
    role: 'Head of Marketing',
    tier: 'Leadership',
    bio: 'Kyle Smith leads marketing and brand strategy at Mission 3A, driving awareness and engagement across all studio initiatives. With over 15 years of B2B marketing experience, Kyle has built marketing functions at multiple venture-backed technology companies. Before Mission 3A, he served as CMO at a SaaS company where he transformed the brand and tripled marketing-generated revenue. Kyle holds a B.A. in Communications from UCLA and is an expert in content strategy, demand generation, and brand positioning for technology companies.',
    linkedinUrl: 'https://linkedin.com/in/kylesmith',
    externalTitle: 'Head of Marketing',
  },
  {
    id: 'team-005',
    name: 'Jennifer Kinnard',
    slug: 'jennifer-kinnard',
    photo: '/images/team/jennifer-kinnard.jpg',
    role: 'Head of Operations',
    tier: 'Leadership',
    bio: 'Jennifer Kinnard serves as Head of Operations at Mission 3A, managing the studio\'s operational infrastructure and portfolio support services. Jennifer brings extensive experience in startup operations, finance, and human resources from her time at several successful technology ventures. She previously held operational leadership roles at two venture-backed companies through their Series C funding rounds. Jennifer holds a B.S. in Business Administration from Georgetown University and is passionate about creating operational excellence that enables founders to focus on building great products.',
    linkedinUrl: 'https://linkedin.com/in/jenniferkinnard',
    externalTitle: 'Head of Operations',
  },
  {
    id: 'team-006',
    name: 'David Chen',
    slug: 'david-chen',
    photo: 'DC',
    role: 'Head of Healthcare Strategy',
    tier: 'Leadership',
    bio: 'David Chen leads healthcare strategy and partnerships at Mission 3A, leveraging his deep expertise in healthcare innovation and regulatory affairs. With a background as a physician and healthcare technology executive, David bridges clinical expertise with entrepreneurial vision. He previously served as Chief Medical Officer at a digital health unicorn and advises the FDA on digital health regulations. David holds an M.D. from Johns Hopkins School of Medicine and an MBA from MIT Sloan. He is passionate about transforming healthcare delivery through technology.',
    linkedinUrl: 'https://linkedin.com/in/davidchen',
    externalTitle: 'Head of Healthcare Strategy',
  },
  {
    id: 'team-007',
    name: 'Sarah Mitchell',
    slug: 'sarah-mitchell',
    photo: 'SM',
    role: 'General Counsel',
    tier: 'Leadership',
    bio: 'Sarah Mitchell serves as General Counsel at Mission 3A, overseeing all legal matters for the studio and its portfolio companies. A seasoned technology attorney, Sarah has extensive experience in venture financing, M&A, intellectual property, and regulatory compliance. Prior to joining Mission 3A, she was a partner at a leading technology law firm where she represented venture capital firms and high-growth startups. Sarah holds a J.D. from Columbia Law School and a B.A. from Yale University. She is admitted to practice in Texas and New York.',
    linkedinUrl: 'https://linkedin.com/in/sarahmitchell',
    externalTitle: 'General Counsel',
  },
  
  // Venture Partners (11 members)
  {
    id: 'team-008',
    name: 'Michael Rodriguez',
    slug: 'michael-rodriguez',
    photo: 'MR',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Michael Rodriguez is a Venture Partner at Mission 3A, focusing on IoT and industrial technology investments. With 20 years of experience in hardware engineering and product development, Michael brings deep technical expertise to the studio. He was previously co-founder and CTO of an industrial IoT company acquired in 2019. Michael holds B.S. and M.S. degrees in Electrical Engineering from MIT and serves as an advisor to several Mission 3A portfolio companies in the IoT space.',
    linkedinUrl: 'https://linkedin.com/in/michaelrodriguez',
    externalTitle: 'Former CTO, Industrial IoT Co.',
  },
  {
    id: 'team-009',
    name: 'Emily Watson',
    slug: 'emily-watson',
    photo: 'EW',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Emily Watson serves as a Venture Partner at Mission 3A, specializing in SaaS and enterprise software investments. Emily brings extensive operational experience from her time as COO at a leading enterprise SaaS company that went public in 2021. She is passionate about helping founders navigate the challenges of scaling from product-market fit to category leadership. Emily holds an MBA from Stanford Graduate School of Business and a B.A. from Dartmouth College.',
    linkedinUrl: 'https://linkedin.com/in/emilywatson',
    externalTitle: 'Former COO, Enterprise SaaS',
  },
  {
    id: 'team-010',
    name: 'James Nakamura',
    slug: 'james-nakamura',
    photo: 'JN',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'James Nakamura is a Venture Partner focused on healthcare technology investments at Mission 3A. A serial entrepreneur in the healthcare space, James has founded and exited three healthcare technology companies. His expertise spans digital health, health IT infrastructure, and value-based care models. James holds an M.D. from UCSF and an MBA from Berkeley Haas. He brings both clinical and business perspectives to healthcare investments.',
    linkedinUrl: 'https://linkedin.com/in/jamesnakamura',
    externalTitle: 'Former CEO, Health Tech Co.',
  },
  {
    id: 'team-011',
    name: 'Rachel Foster',
    slug: 'rachel-foster',
    photo: 'RF',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Rachel Foster serves as a Venture Partner at Mission 3A, with a focus on consumer technology and marketplace businesses. Rachel was previously a General Partner at a leading consumer-focused venture capital firm where she led investments in several successful consumer startups. She brings deep expertise in consumer acquisition, brand building, and marketplace dynamics. Rachel holds an MBA from Harvard Business School and a B.A. from the University of Pennsylvania.',
    linkedinUrl: 'https://linkedin.com/in/rachelfoster',
    externalTitle: 'Former GP, Consumer VC',
  },
  {
    id: 'team-012',
    name: 'Thomas Bradley',
    slug: 'thomas-bradley',
    photo: 'TB',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Thomas Bradley is a Venture Partner at Mission 3A, specializing in fintech and financial services technology. With a background in investment banking and fintech entrepreneurship, Thomas brings valuable expertise in regulated industries and complex financial products. He previously founded a payment infrastructure company that was acquired by a major financial institution. Thomas holds a B.S. in Finance from NYU Stern and serves on several fintech company boards.',
    linkedinUrl: 'https://linkedin.com/in/thomasbradley',
    externalTitle: 'Former Founder, Fintech Co.',
  },
  {
    id: 'team-013',
    name: 'Lisa Park',
    slug: 'lisa-park',
    photo: 'LP',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Lisa Park serves as a Venture Partner at Mission 3A, focusing on AI and machine learning investments. A leading expert in applied AI, Lisa was previously Head of AI Research at a major technology company. She has published extensively on machine learning applications and holds numerous patents in AI technologies. Lisa holds a Ph.D. in Computer Science from Carnegie Mellon and a B.S. from Caltech.',
    linkedinUrl: 'https://linkedin.com/in/lisapark',
    externalTitle: 'Former Head of AI Research',
  },
  {
    id: 'team-014',
    name: 'Robert Hayes',
    slug: 'robert-hayes',
    photo: 'RH',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Robert Hayes is a Venture Partner at Mission 3A, bringing deep expertise in sales and go-to-market strategy. Robert was previously Chief Revenue Officer at a unicorn SaaS company where he scaled revenue from $10M to $200M ARR. He is passionate about helping portfolio companies build scalable sales organizations and efficient go-to-market motions. Robert holds a B.A. in Economics from Boston College.',
    linkedinUrl: 'https://linkedin.com/in/roberthayes',
    externalTitle: 'Former CRO, Unicorn SaaS',
  },
  {
    id: 'team-015',
    name: 'Amanda Liu',
    slug: 'amanda-liu',
    photo: 'AL',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Amanda Liu serves as a Venture Partner at Mission 3A, specializing in product strategy and user experience. Amanda was previously VP of Product at a consumer technology company with over 100 million users. She brings deep expertise in product-led growth, user research, and design thinking. Amanda holds a B.S. in Human-Computer Interaction from Carnegie Mellon University.',
    linkedinUrl: 'https://linkedin.com/in/amandaliu',
    externalTitle: 'Former VP Product, Consumer Tech',
  },
  {
    id: 'team-016',
    name: 'Christopher Wright',
    slug: 'christopher-wright',
    photo: 'CW',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Christopher Wright is a Venture Partner at Mission 3A, with expertise in cybersecurity and infrastructure software. Christopher was previously co-founder and CEO of a cybersecurity company acquired for $800M in 2020. He brings deep technical knowledge and industry relationships to the studio\'s security investments. Christopher holds a B.S. in Computer Science from Georgia Tech.',
    linkedinUrl: 'https://linkedin.com/in/christopherwright',
    externalTitle: 'Former CEO, Cybersecurity Co.',
  },
  {
    id: 'team-017',
    name: 'Stephanie Gomez',
    slug: 'stephanie-gomez',
    photo: 'SG',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Stephanie Gomez serves as a Venture Partner at Mission 3A, focusing on digital health and wellness. With a background in clinical psychology and health technology, Stephanie brings unique expertise to healthcare investments. She previously founded a mental health technology platform used by over 500 employers. Stephanie holds a Ph.D. in Clinical Psychology from UCLA and an MBA from UCLA Anderson.',
    linkedinUrl: 'https://linkedin.com/in/stephaniegomez',
    externalTitle: 'Former Founder, Mental Health Tech',
  },
  {
    id: 'team-018',
    name: 'Andrew Kim',
    slug: 'andrew-kim',
    photo: 'AK',
    role: 'Venture Partner',
    tier: 'VenturePartner',
    bio: 'Andrew Kim is a Venture Partner at Mission 3A, specializing in supply chain and logistics technology. Andrew brings operational expertise from his time as VP of Operations at a global e-commerce company. He has deep knowledge of logistics networks, inventory optimization, and supply chain resilience. Andrew holds an MBA from Northwestern Kellogg and a B.S. in Industrial Engineering from Purdue.',
    linkedinUrl: 'https://linkedin.com/in/andrewkim',
    externalTitle: 'Former VP Operations, E-commerce',
  },
  
  // Healthcare Advisors (4 members)
  {
    id: 'team-019',
    name: 'Dr. Greg Berlet',
    slug: 'dr-greg-berlet',
    photo: '/images/team/gregory-berlet.jpg',
    role: 'Healthcare Advisor',
    tier: 'HealthcareAdvisor',
    bio: 'Dr. Greg Berlet is a board-certified orthopedic surgeon and healthcare technology advisor. With over 30 years of clinical practice and medical device innovation experience, Dr. Berlet provides invaluable clinical insights to Mission 3A\'s healthcare portfolio. He has advised numerous medical device companies and holds multiple patents in orthopedic surgical technologies. Dr. Berlet completed his medical training at Ohio State University and his residency at the Mayo Clinic.',
    linkedinUrl: 'https://linkedin.com/in/gregberlet',
    externalTitle: 'Orthopedic Surgeon & Medical Device Advisor',
  },
  {
    id: 'team-020',
    name: 'Patrick Fisher',
    slug: 'patrick-fisher',
    photo: '/images/team/patrick-fisher.jpg',
    role: 'Healthcare Advisor',
    tier: 'HealthcareAdvisor',
    bio: 'Patrick Fisher brings extensive healthcare administration and health system leadership experience to Mission 3A. As former CEO of a major regional health system, Patrick understands the complex challenges facing healthcare delivery organizations. He advises portfolio companies on health system go-to-market strategies, regulatory compliance, and value-based care models. Patrick holds an MHA from the University of Michigan and an MBA from Duke University.',
    linkedinUrl: 'https://linkedin.com/in/patrickfisher',
    externalTitle: 'Former CEO, Regional Health System',
  },
  {
    id: 'team-021',
    name: 'Dr. Mac',
    slug: 'dr-mac',
    photo: '/images/team/dr-mac.jpg',
    role: 'Healthcare Advisor',
    tier: 'HealthcareAdvisor',
    bio: 'Dr. Mac is a physician executive and digital health pioneer with over 25 years of experience in clinical medicine and healthcare technology. He has founded and led several successful digital health companies and served as Chief Medical Informatics Officer at a major academic medical center. Dr. Mac advises Mission 3A on clinical workflow integration, EHR interoperability, and regulatory strategy. He holds an M.D. from Harvard Medical School and an MPH from Harvard T.H. Chan School of Public Health.',
    linkedinUrl: 'https://linkedin.com/in/drmac',
    externalTitle: 'Physician Executive & Digital Health Pioneer',
  },
  {
    id: 'team-022',
    name: 'Gregory Moore',
    slug: 'gregory-moore',
    photo: '/images/team/gregory-moore.jpg',
    role: 'Healthcare Advisor',
    tier: 'HealthcareAdvisor',
    bio: 'Gregory Moore is a healthcare finance and reimbursement expert with extensive experience in healthcare economics and payment innovation. As a former partner at a leading healthcare consulting firm, Gregory has advised payers, providers, and life sciences companies on value-based care strategies. He brings deep expertise in Medicare reimbursement, healthcare economics, and payment model innovation. Gregory holds a B.A. in Economics from Princeton University.',
    linkedinUrl: 'https://linkedin.com/in/gregorymoore',
    externalTitle: 'Healthcare Finance & Reimbursement Expert',
  },
  {
    id: 'team-023',
    name: 'Kevin Cordell',
    slug: 'kevin-cordell',
    photo: '/images/team/kevin-cordell.jpg',
    role: 'Healthcare Advisor',
    tier: 'HealthcareAdvisor',
    bio: 'Kevin Cordell is a healthcare technology strategist and former FDA official with deep expertise in medical device regulation and digital health compliance. Kevin spent 15 years at the FDA, most recently as Director of the Digital Health Center of Excellence. He advises Mission 3A portfolio companies on regulatory strategy, FDA submissions, and quality systems. Kevin holds a J.D. from Georgetown University Law Center and a B.S. in Biomedical Engineering from Johns Hopkins.',
    linkedinUrl: 'https://linkedin.com/in/kevincordell',
    externalTitle: 'Former FDA Digital Health Director',
  },
  
  // Studio Team (20 members)
  {
    id: 'team-024',
    name: 'Alex Thompson',
    slug: 'alex-thompson',
    photo: 'AT',
    role: 'Senior Product Manager',
    tier: 'StudioTeam',
  },
  {
    id: 'team-025',
    name: 'Maria Garcia',
    slug: 'maria-garcia',
    photo: 'MG',
    role: 'Lead UX Designer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-026',
    name: 'Ryan Johnson',
    slug: 'ryan-johnson',
    photo: 'RJ',
    role: 'Senior Software Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-027',
    name: 'Sophie Martin',
    slug: 'sophie-martin',
    photo: 'SM',
    role: 'Data Scientist',
    tier: 'StudioTeam',
  },
  {
    id: 'team-028',
    name: 'Daniel Lee',
    slug: 'daniel-lee',
    photo: 'DL',
    role: 'DevOps Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-029',
    name: 'Emma Wilson',
    slug: 'emma-wilson',
    photo: 'EW',
    role: 'Marketing Manager',
    tier: 'StudioTeam',
  },
  {
    id: 'team-030',
    name: 'Marcus Brown',
    slug: 'marcus-brown',
    photo: 'MB',
    role: 'Finance Manager',
    tier: 'StudioTeam',
  },
  {
    id: 'team-031',
    name: 'Olivia Davis',
    slug: 'olivia-davis',
    photo: 'OD',
    role: 'Talent Acquisition Lead',
    tier: 'StudioTeam',
  },
  {
    id: 'team-032',
    name: 'Jason Taylor',
    slug: 'jason-taylor',
    photo: 'JT',
    role: 'Senior Backend Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-033',
    name: 'Nina Patel',
    slug: 'nina-patel',
    photo: 'NP',
    role: 'Mobile Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-034',
    name: 'Chris Anderson',
    slug: 'chris-anderson',
    photo: 'CA',
    role: 'Frontend Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-035',
    name: 'Zoe Campbell',
    slug: 'zoe-campbell',
    photo: 'ZC',
    role: 'Content Strategist',
    tier: 'StudioTeam',
  },
  {
    id: 'team-036',
    name: 'Brandon Wright',
    slug: 'brandon-wright',
    photo: 'BW',
    role: 'Security Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-037',
    name: 'Maya Singh',
    slug: 'maya-singh',
    photo: 'MS',
    role: 'AI/ML Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-038',
    name: 'Tyler Roberts',
    slug: 'tyler-roberts',
    photo: 'TR',
    role: 'Product Designer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-039',
    name: 'Hannah Kim',
    slug: 'hannah-kim',
    photo: 'HK',
    role: 'Operations Coordinator',
    tier: 'StudioTeam',
  },
  {
    id: 'team-040',
    name: 'Jordan Phillips',
    slug: 'jordan-phillips',
    photo: 'JP',
    role: 'Full Stack Engineer',
    tier: 'StudioTeam',
  },
  {
    id: 'team-041',
    name: 'Isabella Torres',
    slug: 'isabella-torres',
    photo: 'IT',
    role: 'Healthcare Analyst',
    tier: 'StudioTeam',
  },
  {
    id: 'team-042',
    name: 'Kevin Murphy',
    slug: 'kevin-murphy',
    photo: 'KM',
    role: 'Legal Counsel',
    tier: 'StudioTeam',
  },
  {
    id: 'team-043',
    name: 'Lily Chen',
    slug: 'lily-chen',
    photo: 'LC',
    role: 'Community Manager',
    tier: 'StudioTeam',
  },
  
  // Founders (6 members)
  {
    id: 'team-044',
    name: 'Dr. Sarah Chen',
    slug: 'dr-sarah-chen',
    photo: 'SC',
    role: 'Founder & CEO',
    tier: 'Founder',
    bio: 'Dr. Sarah Chen is the founder and CEO of SurgerEase, bringing together her background as a surgeon and healthcare technology entrepreneur.',
    associatedCompanyName: 'SurgerEase',
  },
  {
    id: 'team-045',
    name: 'Michael Torres',
    slug: 'michael-torres',
    photo: 'MT',
    role: 'Co-Founder & CTO',
    tier: 'Founder',
    bio: 'Michael Torres co-founded Replicare and leads the company\'s technology development and AI research initiatives.',
    associatedCompanyName: 'Replicare',
  },
  {
    id: 'team-046',
    name: 'Dr. Emily Johnson',
    slug: 'dr-emily-johnson',
    photo: 'EJ',
    role: 'Founder & CEO',
    tier: 'Founder',
    bio: 'Dr. Emily Johnson founded Good OB after witnessing firsthand the gaps in maternal health care during her practice as an OB-GYN.',
    associatedCompanyName: 'Good OB',
  },
  {
    id: 'team-047',
    name: 'David Park',
    slug: 'david-park',
    photo: 'DP',
    role: 'Founder & CEO',
    tier: 'Founder',
    bio: 'David Park founded SensorFleet after spending a decade in industrial automation and seeing the need for better monitoring solutions.',
    associatedCompanyName: 'SensorFleet',
  },
  {
    id: 'team-048',
    name: 'Jessica Williams',
    slug: 'jessica-williams',
    photo: 'JW',
    role: 'Co-Founder & CEO',
    tier: 'Founder',
    bio: 'Jessica Williams co-founded BiteBox with a mission to make sustainable, personalized nutrition accessible to everyone.',
    associatedCompanyName: 'BiteBox',
  },
  {
    id: 'team-049',
    name: 'Robert Zhang',
    slug: 'robert-zhang',
    photo: 'RZ',
    role: 'Founder & CEO',
    tier: 'Founder',
    bio: 'Robert Zhang founded CloudSync Pro after experiencing the pain of data integration challenges at multiple enterprise companies.',
    associatedCompanyName: 'CloudSync Pro',
  },
];

// ============================================================================
// NEWS/BLOG POSTS (5 articles)
// ============================================================================

export const blogPosts: BlogPost[] = [
  {
    id: 'post-001',
    title: 'Mission 3A Launches Healthcare Advisory Board to Accelerate MedTech Innovation',
    slug: 'mission-3a-launches-healthcare-advisory-board',
    featuredImage: '/images/blog/healthcare-advisory-board.jpg',
    category: 'Press Releases',
    publishDate: '2025-11-15',
    excerpt: 'Mission 3A announces the formation of its Healthcare Advisory Board, bringing together leading physicians, healthcare executives, and regulatory experts to guide the studio\'s growing MedTech portfolio.',
    body: `Mission 3A, a leading venture studio focused on co-founding and scaling technology startups, today announced the formation of its Healthcare Advisory Board. The board brings together five distinguished healthcare leaders who will provide strategic guidance to Mission 3A's expanding portfolio of healthcare and MedTech companies.

The newly formed Healthcare Advisory Board includes:

- Dr. Greg Berlet, board-certified orthopedic surgeon and medical device innovator
- Patrick Fisher, former CEO of a major regional health system
- Dr. Mac, physician executive and digital health pioneer
- Gregory Moore, healthcare finance and reimbursement expert
- Kevin Cordell, former FDA Digital Health Center Director

"Healthcare innovation requires deep clinical expertise, regulatory knowledge, and an understanding of complex healthcare economics," said Trey Moore, Founding Partner at Mission 3A. "Our Healthcare Advisory Board brings together professionals who have excelled in each of these areas. Their guidance will be invaluable as we continue to build companies that transform healthcare delivery."

The Healthcare Advisory Board will work closely with Mission 3A's leadership team and portfolio company founders on product strategy, regulatory pathways, go-to-market planning, and health system partnerships. The board will meet quarterly and provide ongoing advisory support to portfolio companies.

"I'm excited to join Mission 3A's Healthcare Advisory Board and contribute to the next generation of healthcare innovation," said Dr. Greg Berlet. "The studio's approach of combining operational expertise with venture capital creates an ideal environment for building transformative healthcare companies."

Mission 3A's healthcare portfolio includes companies addressing surgical workflows, wound care, maternal health, remote patient monitoring, and clinical decision support. The studio has made healthcare a strategic focus area, with healthcare companies representing the fastest-growing segment of its portfolio.

About Mission 3A
Mission 3A is a venture studio founded in 2018, headquartered in San Antonio, TX with offices in Greenwich, CT. The studio co-founds, builds, and scales technology startups across healthcare, IoT, consumer, and SaaS verticals. Since its founding, Mission 3A has created 22 companies and invested $2+ million in capital.`,
    authorId: 'team-001',
    seoTitle: 'Mission 3A Launches Healthcare Advisory Board | Mission 3A',
    seoDescription: 'Mission 3A announces its new Healthcare Advisory Board, bringing together leading physicians and healthcare experts to guide MedTech innovation.',
    featured: true,
  },
  {
    id: 'post-002',
    title: 'The Venture Studio Model: Why We Believe in Building Companies from Scratch',
    slug: 'venture-studio-model-building-companies-from-scratch',
    featuredImage: '/images/blog/venture-studio-model.jpg',
    category: 'Articles',
    publishDate: '2025-10-08',
    excerpt: 'Co-founding Partner Trey Moore shares insights on why Mission 3A chose the venture studio model and how it creates advantages for founders and investors alike.',
    body: `When we founded Mission 3A in 2018, we made a deliberate choice to build a venture studio rather than a traditional venture capital firm. This decision was rooted in our team's experience building companies and our belief that the earliest stages of company creation benefit from hands-on operational support.

What is a Venture Studio?

A venture studio (also called a startup studio or company builder) is an organization that creates startups internally, typically developing multiple companies in parallel. Unlike accelerators or incubators that work with external founders who already have ideas, venture studios generate ideas internally, validate them, recruit founding teams, and provide ongoing operational support.

At Mission 3A, our process follows five stages:

1. Ideate: We identify market opportunities through our network of advisors, industry research, and founder insights. Our team has developed a systematic approach to evaluating ideas based on market size, competitive dynamics, and our operational capabilities.

2. Validate: Before writing a single line of code, we validate concepts through customer research, prototype testing, and market analysis. This phase typically takes 2-3 months and helps us avoid building products nobody wants.

3. Create: Once validated, we assemble a founding team and begin building the product. Mission 3A provides initial capital, engineering resources, and operational infrastructure to accelerate development.

4. Launch: We work with founding teams to execute go-to-market strategies, leveraging our network for early customer acquisition and partnerships.

5. Scale: As companies find product-market fit, we continue to provide support while helping them raise external capital and build independent organizations.

Why This Model Works

The venture studio model offers several advantages:

Shared Resources: Portfolio companies benefit from shared engineering, design, finance, and legal resources during their earliest stages. This reduces costs and allows founders to focus on their core product and customers.

Experienced Guidance: Studio teams have built companies before. We've made the mistakes so our founders don't have to repeat them. This operational expertise is especially valuable for first-time founders.

Faster Time to Market: With established playbooks and shared resources, studio companies can move faster than startups building from scratch independently.

Higher Success Rates: While venture capital overall has high failure rates, venture studios have demonstrated better outcomes. According to recent studies, studio-founded companies have higher rates of reaching Series A and achieving successful exits.

Our Track Record

Since 2018, Mission 3A has created 22 companies across healthcare, IoT, consumer, and SaaS verticals. Our portfolio includes several companies that have gone on to raise significant external capital, with three exits to date. We're particularly proud of our healthcare portfolio, which includes companies like SurgerEase, Replicare, and Good OB that are making meaningful impacts on patient care.

Looking Forward

As we look ahead, we're excited to continue refining our model and expanding our capabilities. The venture studio approach isn't right for every founder or every idea, but for the right opportunities, it provides a powerful foundation for building transformational companies.

If you're a founder interested in working with a venture studio, or an investor interested in the model, we'd love to hear from you.`,
    authorId: 'team-001',
    seoTitle: 'The Venture Studio Model | Mission 3A',
    seoDescription: 'Learn why Mission 3A chose the venture studio model and how it creates advantages for founders building transformative technology companies.',
    featured: false,
  },
  {
    id: 'post-003',
    title: 'Mission 3A Leads Seed Round for Good OB to Transform Maternal Health',
    slug: 'mission-3a-leads-seed-round-good-ob',
    featuredImage: '/images/blog/good-ob-investment.jpg',
    category: 'Investments',
    publishDate: '2025-09-22',
    excerpt: 'Mission 3A announces its lead investment in Good OB, a digital maternal health platform addressing the maternal health crisis through technology-enabled, patient-centered care.',
    body: `Mission 3A is proud to announce our lead investment in Good OB's $4.5 million seed round. Good OB is a digital maternal health platform designed to improve outcomes for mothers and babies throughout pregnancy and postpartum care.

The maternal health crisis in the United States demands innovative solutions. Despite spending more on healthcare than any other developed nation, the U.S. has the highest maternal mortality rate among wealthy countries. Good OB addresses this challenge through a comprehensive platform that connects patients with their care teams, provides personalized health tracking, and leverages predictive analytics to identify high-risk pregnancies early.

"We founded Good OB because every mother deserves safe, supported pregnancy and postpartum care," said Dr. Emily Johnson, Founder and CEO of Good OB. "The Mission 3A team understood our vision from day one. Their healthcare expertise and operational support will be invaluable as we scale our platform to reach more mothers."

Good OB's platform includes several key features:

- Continuous Monitoring: Integration with connected devices allows for remote monitoring of vital signs and pregnancy indicators
- Risk Stratification: AI-powered algorithms identify high-risk pregnancies early, enabling proactive intervention
- Care Coordination: Seamless communication between patients, OB-GYNs, midwives, and specialists ensures coordinated care
- Education and Support: Personalized content and access to support resources help mothers navigate pregnancy and postpartum

"Good OB represents exactly the type of healthcare innovation we're excited to support," said David Chen, Head of Healthcare Strategy at Mission 3A. "Dr. Johnson and her team have built a platform that addresses a critical need while leveraging technology to improve both patient experience and clinical outcomes."

The seed funding will enable Good OB to expand its engineering team, grow its customer base among health systems and payers, and further develop its predictive analytics capabilities. The company is currently working with several leading health systems and has demonstrated significant improvements in prenatal visit adherence and patient satisfaction.

Mission 3A led the round with participation from several healthcare-focused angel investors and the company's healthcare advisory board members. This investment brings Mission 3A's total healthcare portfolio to seven active companies, reflecting the studio's strategic focus on healthcare innovation.

For more information about Good OB, visit https://goodob.care.`,
    authorId: 'team-006',
    seoTitle: 'Mission 3A Leads Seed Round for Good OB | Mission 3A',
    seoDescription: 'Mission 3A leads Good OB\'s $4.5M seed round to transform maternal health through digital health innovation.',
    featured: true,
  },
  {
    id: 'post-004',
    title: 'Five Lessons from Building 22 Companies: Insights from Our First Six Years',
    slug: 'five-lessons-building-22-companies',
    featuredImage: '/images/blog/lessons-learned.jpg',
    category: 'Articles',
    publishDate: '2025-08-14',
    excerpt: 'After building 22 companies over six years, Mission 3A\'s leadership team shares key lessons on ideation, validation, team building, and scaling startups.',
    body: `This year marks Mission 3A's sixth anniversary. Since founding the studio in 2018, we've co-founded 22 companies, invested over $2 million in capital, celebrated three exits, and learned countless lessons along the way. Here are five key insights from our journey:

1. Validation Before Building

Our most expensive mistakes have come from building products before fully validating market demand. Early in our history, we fell in love with ideas and moved too quickly to development. Today, we spend 2-3 months in rigorous validation before committing engineering resources.

Our validation process includes:
- 50+ customer interviews per concept
- Landing page tests to gauge demand
- Competitive analysis and market sizing
- Technical feasibility assessment

This discipline has significantly improved our success rate. Ideas that survive this process have a much higher probability of finding product-market fit.

2. Founder-Market Fit Matters More Than We Thought

We've learned that the right founder for a healthcare company differs from the right founder for a consumer marketplace. Technical founders excel in some contexts; domain expert founders excel in others.

Today, we spend significant time assessing founder-market fit before launching companies. We look for:
- Deep domain expertise in the target market
- Previous relevant operational experience
- Network in the industry
- Passion for the problem space

When we match the right founder with the right opportunity, outcomes improve dramatically.

3. The First 10 Customers Are Different From the Next 100

Early customer acquisition requires different tactics than scaling. Our first customers typically come through personal networks, advisors, and direct outreach. These customers provide invaluable feedback and often become champions.

However, tactics that work for the first 10 customers rarely scale to 100. We help our companies transition from founder-led sales to scalable acquisition channels, typically around the time they reach $100K ARR.

This transition is challenging but essential. Companies that delay building scalable acquisition channels often hit growth plateaus.

4. Healthcare Moves Slowly—Until It Doesn't

Our healthcare portfolio has taught us that healthcare innovation follows a different timeline than consumer or SaaS. Sales cycles are longer, regulatory requirements add complexity, and stakeholder alignment is crucial.

However, once healthcare companies achieve critical mass, they benefit from powerful moats: high switching costs, regulatory barriers to entry, and deep integration with customer workflows.

We've adjusted our expectations and capital planning accordingly. Healthcare companies require more patience upfront but often achieve more durable competitive positions.

5. Studio Economics Improve With Scale

Our early companies required significant studio investment per company. As we've scaled, shared resources and accumulated knowledge have improved our efficiency.

Today, we can launch companies faster and with less capital than in our early years. Our playbooks, relationships, and infrastructure create compounding advantages. This is the promise of the venture studio model: each company makes the next one easier to build.

Looking Ahead

As we enter our seventh year, we're excited to apply these lessons to our next cohort of companies. We're particularly excited about opportunities in AI-enabled healthcare, climate technology, and vertical SaaS.

To the founders, advisors, and team members who have been part of our journey: thank you. Building companies is hard work, but together, we're creating something meaningful.

If you're interested in joining our next chapter—whether as a founder, team member, or advisor—we'd love to hear from you.`,
    authorId: 'team-002',
    seoTitle: 'Five Lessons from Building 22 Companies | Mission 3A',
    seoDescription: 'Mission 3A shares five key lessons learned from building 22 companies over six years in venture studio entrepreneurship.',
    featured: false,
  },
  {
    id: 'post-005',
    title: 'SurgerEase Announces Partnership with Major Texas Health System',
    slug: 'surgerease-partnership-texas-health-system',
    featuredImage: '/images/blog/surgerease-partnership.jpg',
    category: 'Press Releases',
    publishDate: '2025-07-30',
    excerpt: 'SurgerEase, a Mission 3A portfolio company, announces a system-wide deployment partnership with one of Texas\'s largest health systems to optimize surgical workflows.',
    body: `SurgerEase, a leading provider of surgical workflow automation technology and Mission 3A portfolio company, today announced a comprehensive partnership with Methodist Healthcare System, one of Texas's largest health systems.

Under the agreement, SurgerEase's intelligent surgical workflow platform will be deployed across Methodist's 12-hospital network, encompassing over 150 operating rooms. The deployment represents one of the largest implementations of surgical workflow automation technology in the United States.

"We're thrilled to partner with Methodist Healthcare System to transform surgical operations at scale," said Dr. Sarah Chen, Founder and CEO of SurgerEase. "This partnership validates our platform's ability to deliver measurable improvements in OR efficiency, safety, and patient outcomes in complex, multi-hospital environments."

SurgerEase's platform uses computer vision and machine learning to provide surgical teams with real-time insights and predictive analytics. Key capabilities include:

- OR Scheduling Optimization: AI-powered scheduling reduces turnover time and maximizes block utilization
- Surgical Site Infection Prevention: Real-time compliance monitoring and predictive risk scoring
- Supply Chain Integration: Automated preference card management and inventory optimization
- Performance Analytics: Comprehensive dashboards for OR managers and surgeons

Methodist Healthcare System expects the partnership to deliver significant operational improvements, including:
- 15-20% reduction in average OR turnover time
- 25% improvement in on-time first case starts
- 30% reduction in surgical site infections
- $8-12 million in annual operational savings

"SurgerEase's technology aligns perfectly with our commitment to operational excellence and patient safety," said Dr. James Morrison, Chief Surgical Officer at Methodist Healthcare System. "We're excited to partner with an innovative company based right here in Texas to transform how we deliver surgical care."

The deployment will be implemented in phases over the next 18 months, with full system-wide rollout expected by early 2027. SurgerEase will work closely with Methodist's clinical and operational teams to ensure seamless integration with existing EHR and supply chain systems.

This partnership marks SurgerEase's third major health system deployment and represents significant momentum for the company as it scales its operations nationally.

"We're proud of the SurgerEase team's execution and the trust Methodist Healthcare System has placed in their technology," said Trey Moore, Founding Partner at Mission 3A. "This partnership demonstrates the real-world impact our portfolio companies are having on healthcare delivery."

About SurgerEase
SurgerEase is a surgical workflow automation platform that uses AI and computer vision to optimize operating room efficiency, reduce surgical site infections, and improve patient outcomes. Founded in 2021 and based in San Antonio, Texas, SurgerEase is a portfolio company of Mission 3A.

About Methodist Healthcare System
Methodist Healthcare System is the largest healthcare provider in South and Central Texas, with 12 hospitals, over 5,000 physicians, and 2.5 million patient encounters annually.`,
    authorId: 'team-044',
    seoTitle: 'SurgerEase Announces Texas Health System Partnership | Mission 3A',
    seoDescription: 'SurgerEase, a Mission 3A portfolio company, announces major partnership with Methodist Healthcare System to optimize surgical workflows.',
    featured: false,
  },
];

// ============================================================================
// SITE SETTINGS
// ============================================================================

export const siteSettings: SiteSettings = {
  siteName: 'Mission 3A',
  siteDescription: 'Mission 3A is a venture studio co-founding, building, and scaling technology startups across healthcare, IoT, consumer, and SaaS verticals.',
  email: 'hello@mission3a.com',
  phone: '+1 (210) 555-0147',
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/mission3a',
      icon: 'Linkedin',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/mission3a',
      icon: 'Twitter',
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/mission3a',
      icon: 'Youtube',
    },
  ],
  officeLocations: [
    {
      id: 'office-001',
      name: 'San Antonio Headquarters',
      address: '123 Innovation Drive, Suite 400',
      city: 'San Antonio',
      state: 'TX',
      zip: '78205',
      country: 'USA',
      photo: '/images/offices/san-antonio.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.0!2d-98.4936!3d29.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDI1JzI2LjgiTiA5OMKwMjknMzcuMCJX!5e0!3m2!1sen!2sus!4v1234567890',
      isPrimary: true,
    },
    {
      id: 'office-002',
      name: 'Greenwich Office',
      address: '456 Greenwich Avenue, Floor 3',
      city: 'Greenwich',
      state: 'CT',
      zip: '06830',
      country: 'USA',
      photo: '/images/offices/greenwich.jpg',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.0!2d-73.6285!3d41.0262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzM0LjMiTiA3M8KwMzcnNDIuNiJX!5e0!3m2!1sen!2sus!4v1234567890',
      isPrimary: false,
    },
  ],
  homepageStats: [
    {
      label: 'Companies Created',
      value: '22',
    },
    {
      label: 'Capital Invested',
      value: '2',
      suffix: '+',
    },
    {
      label: 'Partners',
      value: '30',
      suffix: '+',
    },
    {
      label: 'Years of Experience',
      value: '30',
      suffix: '+',
    },
  ],
  studioStats: [
    {
      label: 'Ideas → Companies',
      value: '9',
      description: 'Validated concepts successfully launched',
    },
    {
      label: 'Ideas on Deck',
      value: '4',
      description: 'Currently in validation phase',
    },
    {
      label: 'Ideas Shelved',
      value: '50',
      suffix: '+',
      description: 'Concepts that didn\'t pass validation',
    },
  ],
};

// ============================================================================
// INDUSTRIES DATA
// ============================================================================

export const industriesData: IndustryData[] = [
  {
    id: 'ind-001',
    icon: 'Stethoscope',
    title: 'Healthcare / MedTech',
    description: 'We build companies that transform healthcare delivery through digital health platforms, medical devices, and AI-powered diagnostics. From surgical workflow optimization to maternal health, our portfolio addresses critical challenges in patient care.',
    color: 'text-teal-600',
  },
  {
    id: 'ind-002',
    icon: 'Cpu',
    title: 'IoT & Connected Devices',
    description: 'Our IoT investments span industrial sensor networks, smart grid technology, precision agriculture, and connected infrastructure. We help companies harness the power of connected devices to optimize operations and create new business models.',
    color: 'text-blue-600',
  },
  {
    id: 'ind-003',
    icon: 'ShoppingBag',
    title: 'Consumer & Marketplace',
    description: 'We partner with founders building the next generation of consumer experiences. Our portfolio includes personalized services, on-demand marketplaces, and innovative consumer products that leverage technology to improve everyday life.',
    color: 'text-purple-600',
  },
  {
    id: 'ind-004',
    icon: 'Cloud',
    title: 'SaaS & Enterprise',
    description: 'Our enterprise software investments focus on productivity, security, data infrastructure, and workflow automation. We help B2B founders build scalable platforms that solve real business problems and deliver measurable ROI.',
    color: 'text-indigo-600',
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFeaturedCompanies(): Company[] {
  return companies.filter(company => company.featured);
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find(company => company.slug === slug);
}

export function getCompaniesByIndustry(industry: Industry): Company[] {
  return companies.filter(company => company.industry === industry);
}

export function getActiveCompanies(): Company[] {
  return companies.filter(company => company.status === 'Active');
}

export function getExitedCompanies(): Company[] {
  return companies.filter(company => company.status === 'Exited');
}

export function getTeamByTier(tier: TeamTier): TeamMember[] {
  return teamMembers.filter(member => member.tier === tier);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find(member => member.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, count);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: PostCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPrimaryOffice(): OfficeLocation {
  return siteSettings.officeLocations.find(office => office.isPrimary) || siteSettings.officeLocations[0];
}

export default {
  companies,
  teamMembers,
  blogPosts,
  siteSettings,
  industriesData,
  getFeaturedCompanies,
  getCompanyBySlug,
  getCompaniesByIndustry,
  getActiveCompanies,
  getExitedCompanies,
  getTeamByTier,
  getTeamMemberBySlug,
  getFeaturedPosts,
  getRecentPosts,
  getPostBySlug,
  getPostsByCategory,
  getPrimaryOffice,
};
