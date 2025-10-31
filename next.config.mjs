// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // --- INICIO DE LA CORRECCIÓN ---
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      // Aquí puedes añadir otros dominios si los necesitas
    ],
  },
  // --- FIN DE LA CORRECCIÓN ---
}

export default nextConfig