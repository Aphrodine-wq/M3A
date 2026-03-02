import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Mission 3A | Venture Studio',
  description: 'We co-found, build, and scale technology startups across healthcare, IoT, consumer, and SaaS verticals.',
  keywords: ['venture studio', 'startup', 'healthcare', 'IoT', 'SaaS', 'venture capital', 'San Antonio'],
  openGraph: {
    title: 'Mission 3A | Venture Studio',
    description: 'We co-found, build, and scale technology startups across healthcare, IoT, consumer, and SaaS verticals.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
