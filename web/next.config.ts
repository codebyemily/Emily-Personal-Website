/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
<<<<<<< HEAD
    // ⚠️ Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
=======
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
>>>>>>> ee60d66 (vercel deployment)
}

module.exports = nextConfig