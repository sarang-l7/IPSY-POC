import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/categories/:path*",
        destination: `${process.env.PLP_MFE}/:path*`,
      },
      {
        source: "/pdp/:path*",
        destination: `${process.env.PDP_MFE}/:path*`,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
