/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://localhost:27017/cybernex",
    DB_URI: "mongodb://localhost:27017/cybernex",

    NEXTAUTH_URL: "http://localhost:3000",

    CLOUD_NAME: "duiggbjad",
    CLOUDINARY_API_KEY: "833299381449851",
    CLOUDINARY_API_SECRET: "X9jmJshtejdqrwr_g4vfIAmcCvo",

    STRIPE_PUBLIC_KEY: "",
    STRIPE_PRIVATE_KEY: "",

    STRIPE_WEBHOOK_SECRET: "",

    NEXTAUTH_SECRET: "techcommerce",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
