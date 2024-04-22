/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "virtuoo.vercel.app"
            },
            {
                hostname: "oaidalleapiprodscus.blob.core.windows.net"
            }
        ]
    }
};

export default nextConfig;
