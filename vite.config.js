// /vite.config.js - FINAL, CORRECTED VERSION

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    // *** THE CRITICAL FIX IS HERE ***
    // This 'alias' configuration tells Vite that whenever it sees a path
    // starting with '@/', it should replace it with the path to our '/src' directory.
    // This is the professional standard for clean import paths in a Vue project.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})