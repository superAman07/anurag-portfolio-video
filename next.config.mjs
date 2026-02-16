/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.burnwe.com',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
};

export default nextConfig;
