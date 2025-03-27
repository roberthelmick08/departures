import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/departures',
        destination: 'https://external.transitapp.com/v3/public/stop_departures?global_stop_id=RTD:64255',
      },
    ]
  },

};

export default nextConfig;
