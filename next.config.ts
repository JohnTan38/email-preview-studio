import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  target: 'static',
  // or
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ]
  },

};

export default nextConfig;
