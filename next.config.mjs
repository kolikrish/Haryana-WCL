/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Important for static export
  images: {
    unoptimized: true,     // Required for GoDaddy static hosting
  },
};

export default nextConfig;
