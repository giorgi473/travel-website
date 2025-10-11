import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gratisography.com" },
      { protocol: "https", hostname: "example.com" },
      { protocol: "https", hostname: "www.bigfootdigital.co.uk" },
      { protocol: "https", hostname: "media.istockphoto.com" },
    ],
  },
};

export default nextConfig;
