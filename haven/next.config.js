/** @type {import('next').NextConfig} */
const nextConfig = {

  //the following are recommended for Next and Mongoose to work together, but cause build issues.

  // experimental: {
  //   esmExternals: "loose",
  //   serverComponentsExternalPackages: ["mongoose"]
  // },
  // webpack: (config) => {
  //   config.experiments = {
  //     topLevelAwait: true
  //   };
  //   return config;
  // },
}

module.exports = nextConfig
