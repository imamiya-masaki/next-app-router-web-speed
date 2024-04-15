/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'webspeed.anpan-playground.com',
            port: '',
            pathname: '/images/**'
        }
    ]
    },
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
