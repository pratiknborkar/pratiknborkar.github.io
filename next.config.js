/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Add the output configuration for static HTML export
  basePath: "/pratiknborkar.github.io",
  output: 'export',
  reactStrictMode: true,
}

module.exports = nextConfig;
