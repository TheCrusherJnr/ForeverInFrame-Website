import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "foreverinframe.com.au",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
