/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        API_URL: "https://cyber-nex.vercel.app",
        DB_LOCAL_URI: "mongodb://localhost:27017/cybernex",
        DB_URI: "",

        NEXTAUTH_URL: "https://cyber-nex.vercel.app",

        CLOUD_NAME: "duiggbjad",
        CLOUDINARY_API_KEY: "",
        CLOUDINARY_API_SECRET: "",

        NEXTAUTH_SECRET: "cybernex",
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
};

module.exports = nextConfig;
