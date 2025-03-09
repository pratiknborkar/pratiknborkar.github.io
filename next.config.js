/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Enable unoptimized image loading
  images: {
    unoptimized: true,
  },
  
  // Configure static HTML export
  output: 'export',
}

module.exports = nextConfig;
