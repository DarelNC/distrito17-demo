import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        legal: resolve(__dirname, 'legal.html'),
        privacidad: resolve(__dirname, 'privacidad.html'),
        error: resolve(__dirname, '404.html'),
      },
    },
  },
})
