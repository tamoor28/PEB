import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

// BASE_PATH permite publicar en una subcarpeta (p. ej. GitHub Pages: /PEB/).
// Con dominio propio se deja en '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
  build: {
    rollupOptions: {
      // Una página HTML por idioma: / (castellano) y /ca/ (catalán), cada una con sus metadatos para Google.
      input: {
        es: resolve(root, 'index.html'),
        ca: resolve(root, 'ca/index.html'),
      },
    },
  },
})
