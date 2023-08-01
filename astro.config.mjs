import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  site: "https://www.englishwithleo.com/",
  integrations: [vue(), robotsTxt(), sitemap(), serviceWorker()],
  output: "server",
  adapter: vercel(),
  define: {
    PUBLIC_CONTENTFUL_SPACE_ID: process.env.PUBLIC_CONTENTFUL_SPACE_ID,
    PUBLIC_CONTENTFUL_DELIVERY_TOKEN: process.env.PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
    PUBLIC_CONTENTFUL_PREVIEW_TOKEN: process.env.PUBLIC_CONTENTFUL_PREVIEW_TOKEN,
  },
});
