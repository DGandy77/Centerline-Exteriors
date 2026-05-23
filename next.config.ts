import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/residential-roof-inspections",
        destination: "/roof-inspections",
        permanent: true,
      },
      {
        source: "/residential-roof-replacement",
        destination: "/roof-replacement",
        permanent: true,
      },
      {
        source: "/residential-storm-damage",
        destination: "/storm-damage",
        permanent: true,
      },
      {
        source: "/insurance",
        destination: "/insurance-claims",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
