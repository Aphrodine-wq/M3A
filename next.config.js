/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure static generation works properly
  generateStaticParams: async function() {
    return [];
  },
};

module.exports = nextConfig;
