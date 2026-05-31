import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next does not pick up the
  // stray package-lock.json that lives in the parent (home) directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
