import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otsezwft84yprwie.public.blob.vercel-storage.com",
      },
      { protocol: "https", hostname: "img.freepik.com" },
    ],
  },
};

export default nextConfig;
