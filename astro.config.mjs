// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import { fileURLToPath } from "url";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  base: "/",
  integrations: [],
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            "mixed-decls",
            "color-functions",
            "global-builtin",
            "import",
            "legacy-js-api",
          ],
          additionalData: `
            @import '@/styles/_breakpoints.scss';
            @import '@/styles/_variables.scss';
            @import '@/styles/_fonts.scss'; 
          `,
        },
      },
    },
  },
});
