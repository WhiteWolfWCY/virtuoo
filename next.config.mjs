/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "virtuoo.vercel.app"
            },
            {
                hostname: "oaidalleapiprodscus.blob.core.windows.net"
            },
            {
                hostname: "virtuoo-production.up.railway.app"
            }
        ]
    }
};

export default nextConfig;
