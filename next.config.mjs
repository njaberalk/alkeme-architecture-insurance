/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/architecture',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
