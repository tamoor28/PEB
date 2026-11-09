// Escribe en el HTML de cada página de servicio su contenido y sus etiquetas SEO (title, description, canonical,
// hreflang, Open Graph y datos estructurados). Se ejecuta después de las dos compilaciones de `npm run build`.
// Uso: node scripts/prerender.mjs [carpeta de salida, por defecto dist]
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = resolve(process.argv[2] ?? resolve(root, 'dist'))
const { pages, renderBody, renderHead } = await import(pathToFileURL(resolve(root, 'dist-server/entry-server.js')).href)

for (const { page, lang, path } of pages) {
  const file = resolve(outDir, `.${path}`, 'index.html')
  const html = await readFile(file, 'utf8')
  if (!html.includes('<!--head-->') || !html.includes('<!--app-->')) {
    throw new Error(`${file}: faltan los marcadores <!--head--> o <!--app-->`)
  }
  await writeFile(file, html.replace('<!--head-->', renderHead(page, lang)).replace('<!--app-->', renderBody(page, lang)))
  console.log(`prerenderizada ${path}`)
}
