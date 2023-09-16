/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:'/bakesforcraves',
  assetPrefix: '/bakesforcraves/', // Add this line
  output: 'export',
  images:{
    unoptimized: true,
  }
  }
  
  module.exports = nextConfig