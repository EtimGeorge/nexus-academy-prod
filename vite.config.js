// /vite.config.js - FINAL, DEFINITIVE, AND CORRECT VERSION

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // *** THE DEFINITIVE FIX IS HERE ***
  // The base path now correctly matches your new repository name.
  // This will ensure that when Vite builds your project, all the links inside
  // your index.html will correctly point to /nexus-academy-prod/assets/...
  base: "/nexus-academy-prod/",

  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
