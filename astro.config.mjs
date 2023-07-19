import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import serviceWorker from "astrojs-service-worker";

// https://astro.build/config
export default defineConfig({
  site: "https://leobeghine.vercel.app/",
  integrations: [vue(), robotsTxt(), sitemap(), serviceWorker()],
  output: "server",
  adapter: vercel(),
});
