import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/"], // Erişilmesini istemediğiniz path'ler
    },
    sitemap: "https://plannme.com/sitemap.xml", // Sitemap URL'iniz
  };
}
