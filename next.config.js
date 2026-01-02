/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML export for Cloudflare Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // SEO-friendly URLs
}

module.exports = nextConfig
