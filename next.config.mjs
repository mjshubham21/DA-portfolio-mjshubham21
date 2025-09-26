/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    unoptimized: true, // <UPDATE> Set images to be unoptimized
  },
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true, // <UPDATE> Ignore ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // <UPDATE> Ignore TypeScript build errors
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
}

export default nextConfig
