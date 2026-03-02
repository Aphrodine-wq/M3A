import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/studio", label: "Studio" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/healthcare", label: "Healthcare" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const officeLocations = [
  {
    name: "San Antonio",
    address: "San Antonio, TX",
    description: "Headquarters",
  },
  {
    name: "Greenwich",
    address: "Greenwich, CT",
    description: "East Coast Office",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Mission 3A</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A venture studio founded in 2018, co-founding and scaling
              technology startups across healthcare, IoT, consumer, and SaaS
              verticals.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@mission3a.com"
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Offices
            </h3>
            <div className="space-y-4">
              {officeLocations.map((office) => (
                <div key={office.name} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{office.name}</p>
                    <p className="text-sm text-gray-400">{office.address}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {office.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-blue flex-shrink-0" />
                <a
                  href="mailto:hello@mission3a.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  hello@mission3a.com
                </a>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-accent-blue hover:bg-accent-blue-light text-white text-sm font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Mission 3A. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/legal/privacy-policy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
