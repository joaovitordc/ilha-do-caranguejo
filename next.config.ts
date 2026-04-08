import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ilhadocaranguejo.com.br",
      },
    ],
  },
};

export default nextConfig;
