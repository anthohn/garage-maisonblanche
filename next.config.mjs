/** @type {import('next').NextConfig} */
const nextConfig = {
    // Activer le mode strict de React pour détecter les problèmes potentiels
    reactStrictMode: true,

    // Configuration des images si nécessaire (domaines autorisés, etc.)
    images: {
        // domains: ['example.com'],
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
