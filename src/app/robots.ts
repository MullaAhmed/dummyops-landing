import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/*", "/_next/*", "/_static/*"],
    },
    sitemap: "https://www.dummyops.com/sitemap.xml",
  };
}
