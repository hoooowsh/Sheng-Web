/** @type {import('next').NextConfig} */
// const nextConfig = {

// };

module.exports = {
  images: {
    unoptimized: true,
  },
  // output: "export",
  // set output to "standalone"
  // this will create a single bundle file for the client
  // instead of multiple chunks
  output: "standalone",
  // distDir: "dist",
};
