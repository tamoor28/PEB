import { site } from './site.js'

// Páginas de la web y su dirección en cada idioma. La principal es / (castellano) y /ca/ (catalán);
// cada servicio con página propia tiene una dirección por idioma.
// ⚠️ Si se añade una página, hay que añadir también su HTML a vite.config.js y sus URL a public/sitemap.xml.
export const HOME = { es: '/', ca: '/ca/' }

// De momento solo se publica licencia de actividad. Los textos de baja tensión, incendios y climatización ya están
// en src/i18n/servicePages.*.js; para activarlos, ver «Añadir otra página de servicio» en el README.
export const SERVICE_PAGES = [
  { key: 'licencia-actividad', es: '/licencia-actividad-barcelona/', ca: '/ca/llicencia-activitat-barcelona/' },
]

// Apartados y tarjetas de la principal que enlazan a una página de servicio
export const CATEGORY_PAGES = { 'licencia-actividad': 'licencia-actividad' }
// Tarjetas de «Proyectos básicos y de ejecución» con enlace «Más información». Al activar sus páginas:
// electricidad: 'baja-tension', incendios: 'incendios', climatizacion: 'climatizacion', ventilacion: 'climatizacion'
export const CARD_PAGES = {}

export const pagePath = (page, lang) => (page ? SERVICE_PAGES.find((item) => item.key === page)[lang] : HOME[lang])

// Dirección completa, para canonical, hreflang, Open Graph, datos estructurados y sitemap
export const absoluteUrl = (path) => `${site.url}${path}`

const BASE = import.meta.env.BASE_URL

// Enlace a otra página de la web desde la página actual. Con una base relativa (vistas previas que no se
// sirven en la raíz de un dominio) se calcula la ruta relativa al archivo HTML.
export function linkFrom(fromPath, toPath) {
  if (!BASE.startsWith('.')) return `${BASE}${toPath.slice(1)}`
  const depth = fromPath.split('/').filter(Boolean).length
  return `${'../'.repeat(depth)}${toPath.slice(1)}index.html`
}
