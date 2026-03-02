"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Send, CheckCircle, ArrowRight, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site-data";

const inquiryTypes = [
  { value: "founder", label: "Founder / Co-founding Inquiry" },
  { value: "investor", label: "Investor Relations" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "career", label: "Career / Join the Team" },
  { value: "press", label: "Press / Media" },
  { value: "other", label: "General Inquiry" },
];

const quickLinks = [
  { href: "/studio", label: "Learn About Our Studio" },
  { href: "/portfolio", label: "Explore Our Portfolio" },
  { href: "/team", label: "Meet the Team" },
  { href: "/healthcare", label: "Healthcare Focus" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const { officeLocations } = siteSettings;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy text-sm font-medium rounded-full mb-6">
              <Mail className="w-4 h-4" />
              Get In Touch
            </span>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Contact Us
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re a founder looking to build with us, an investor exploring
              opportunities, or a potential team member — we&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_440px] gap-12 items-start">
          {/* Contact Form */}
          <ScrollReveal animation="fade-right">
            <div className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-sm">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-navy mb-2">Send us a message</h2>
                  <p className="text-muted-foreground mb-8">
                    We&apos;ll get back to you within 1–2 business days.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">
                          Full Name <span className="text-accent-blue">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">
                          Email Address <span className="text-accent-blue">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">
                        Inquiry Type <span className="text-accent-blue">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        required
                        value={form.inquiryType}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors text-sm appearance-none cursor-pointer"
                      >
                        <option value="">Select inquiry type...</option>
                        {inquiryTypes.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">
                        Message <span className="text-accent-blue">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about yourself and how we can help..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none text-sm"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
                    Thanks for reaching out. We&apos;ll review your message and get back to you
                    within 1–2 business days.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", inquiryType: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Direct Contact Card */}
            <ScrollReveal animation="fade-left" delay={0.1}>
              <div className="bg-navy rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal/20 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
                  <a
                    href="mailto:hello@mission3a.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 mb-0.5">Email Us</p>
                      <p className="font-medium group-hover:text-teal transition-colors">
                        hello@mission3a.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Office Locations */}
            {officeLocations.map((office, index) => (
              <ScrollReveal key={office.id} animation="fade-left" delay={0.15 + index * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-navy text-sm">{office.name}</h3>
                        {office.isPrimary && (
                          <span className="px-2 py-0.5 bg-teal/10 text-teal text-xs font-medium rounded-full">
                            HQ
                          </span>
                        )}
                      </div>
                      <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                        <p>{office.address}</p>
                        <p>
                          {office.city}, {office.state} {office.zip}
                        </p>
                        <p>{office.country}</p>
                      </address>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Quick Links */}
            <ScrollReveal animation="fade-left" delay={0.35}>
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-4 h-4 text-navy" />
                  <h3 className="font-semibold text-navy text-sm">Explore Mission 3A</h3>
                </div>
                <div className="space-y-1">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between py-2.5 text-sm font-medium text-muted-foreground hover:text-navy transition-colors group border-b border-border last:border-0"
                    >
                      {link.label}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
