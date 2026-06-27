import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Bypass strict Next.js security blocking JavaScript on local Wi-Fi mobile devices
  // @ts-ignore - Next.js new config option might not be in TS definitions yet
  allowedDevOrigins: ['192.168.68.104', 'localhost'],
};

export default nextConfig;
