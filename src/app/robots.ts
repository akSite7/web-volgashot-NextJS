import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  
  return {
    rules: [
      {
        userAgent: "yandex",
        allow: "/",
        disallow: ["/fractions", "/buckshots", "/other"],
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
  
}
