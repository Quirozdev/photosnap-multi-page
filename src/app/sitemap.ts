import { SITE_URL } from "@/core/config/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", SITE_URL).toString(),
    },
    {
      url: new URL("/stories", SITE_URL).toString(),
    },
    {
      url: new URL("/features", SITE_URL).toString(),
    },
    {
      url: new URL("/pricing", SITE_URL).toString(),
    },
  ];
}
