import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio-iotous/',
  plugins: [
    react(),
    tailwindcss(), // <-- Ajout du plugin Tailwind v4
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})