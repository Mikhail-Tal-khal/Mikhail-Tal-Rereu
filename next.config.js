/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Force single React version
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react': path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime.js')
    };
    return config;
  },
  // Modern JSX handling
  experimental: {
    swcPlugins: [
      ['@swc/plugin-react', { 
        runtime: 'automatic', 
        importSource: 'react' 
      }]
    ]
  }
};

module.exports = nextConfig;