import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ Allow Unsplash
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co', // If you use Mixkit for thumbnails
      },
    ],
  },
};

export default nextConfig;