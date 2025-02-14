import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
