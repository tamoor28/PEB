import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = fileURLToPath(new URL('.', import.meta.url))

// Una página HTML por idioma y página, cada una con sus metadatos para Google:
// la principal (/ y /ca/) y las páginas de servicio (ver src/data/pages.js).
const PAGES = [
  'index.html',
  'ca/index.html',
  'licencia-actividad-barcelona/index.html',
  'ca/llicencia-activitat-barcelona/index.html',
]

// BASE_PATH permite publicar en una subcarpeta (p. ej. GitHub Pages: /PEB/).
// Con dominio propio se deja en '/'.
const base = process.env.BASE_PATH || '/'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base,
  // Vite compila para servidor con base '/' aunque sea relativa ('./'): se fija la misma que en el navegador
  // para que los enlaces prerenderizados coincidan con los de React al activarse.
  define: isSsrBuild ? { 'import.meta.env.BASE_URL': JSON.stringify(base) } : {},
  // La compilación para servidor (--ssr) solo genera el prerenderizado; las páginas las compila la del navegador.
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          input: Object.fromEntries(PAGES.map((page) => [page.replace(/\/?index\.html$/, '') || 'es', resolve(root, page)])),
        },
      },
}))
