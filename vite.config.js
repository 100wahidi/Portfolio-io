import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio-io/',
  plugins: [
    react(),
    tailwindcss(), // <-- Ajout du plugin Tailwind v4
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})