/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      domains: [process.env.NEXT_PUBLIC_STRAPI_API_URL, 'volgashot.online', 'lh3.googleusercontent.com'],
  }
};

export default nextConfig;