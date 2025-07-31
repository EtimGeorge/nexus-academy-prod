// vite.config.js - FINAL, DEPLOYMENT-READY VERSION

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // *** THE DEFINITIVE FIX FOR GITHUB PAGES IS HERE ***
  // The 'base' option tells Vite that your entire project will be served
  // from a subdirectory on GitHub, not from the root of the domain.
  // Replace 'nexus-academy-prod' with your exact repository name.
  base: "/nexus-academy-prod/",

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
