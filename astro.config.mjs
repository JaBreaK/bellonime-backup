// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";



import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_URL: envField.string({
        access: "public",
        context: "server",
      }),
    },
  },

  output: "server",

  adapter: netlify({
    
  }),

  integrations: [tailwind()],
});