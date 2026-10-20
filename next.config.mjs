/** @type {import('next').NextConfig} */
const nextConfig = {
  // `npm run export` builds a static site into /out (handy for Netlify / GitHub Pages)
  output: process.env.EXPORT ? 'export' : undefined,
  reactStrictMode: true,
};

export default nextConfig;
