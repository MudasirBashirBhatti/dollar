// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // next.config.js
//   images: {
//     domains: ['res.cloudinary.com'],
//   },

// };

// export default nextConfig;

import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: (config) => {
    // Adding path alias configuration
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;

