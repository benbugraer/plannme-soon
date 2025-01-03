/** @type {import('next').NextConfig} */
const nextConfig = {
  // Eğer output: 'export' kullanıyorsanız, kaldırın
  // output: 'export',
  images: {
    unoptimized: true,
    domains: [
      // Kullandığınız image domainleri
    ],
  },
};

module.exports = nextConfig;
