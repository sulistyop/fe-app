import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Mengubah output menjadi file statis untuk GitHub Pages
  basePath: '/fe-app', // Ganti <your-repository> dengan nama repository Anda
  assetPrefix: '/fe-app', // Ganti <your-repository> dengan nama repository Anda
  images: {
    domains: ['placeimg.com'], // Domain untuk memuat gambar eksternal
    unoptimized: true, // Diperlukan untuk output statis
  },
};

export default nextConfig;
