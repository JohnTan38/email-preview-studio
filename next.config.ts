import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 
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
