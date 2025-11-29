import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/station.html",
        destination: "/station",
        permanent: true,
      },
      {
        source: "/garage.html",
        destination: "/garage",
        permanent: true,
      },
      {
        source: "/shop.html",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/lavage.html",
        destination: "/lavage",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
