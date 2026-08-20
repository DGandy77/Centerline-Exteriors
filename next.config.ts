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
        destination: "/storm-damage-restoration",
        permanent: true,
      },
      {
        source: "/insurance",
        destination: "/storm-damage-restoration",
        permanent: true,
      },
      {
        source: "/insurance-claims",
        destination: "/storm-damage-restoration",
        permanent: true,
      },
      {
        source: "/storm-damage",
        destination: "/storm-damage-restoration",
        permanent: true,
      },
      {
        source: "/request-estimate",
        destination: "/request-inspection",
        permanent: true,
      },
      {
        source: "/commercial-roofing",
        destination: "/roof-inspections",
        permanent: true,
      },
      {
        source: "/interior-restoration",
        destination: "/roof-repair",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
