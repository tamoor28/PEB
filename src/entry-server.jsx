// Prerenderizado de las páginas de servicio: lo usa scripts/prerender.mjs después de `vite build` para escribir
// el contenido y las etiquetas SEO en el HTML de cada página, de modo que Google lo lea sin ejecutar JavaScript.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { PageLanguageProvider } from './i18n/LanguageContext.jsx'
import ServicePage from './pages/ServicePage.jsx'
import { SERVICE_PAGES } from './data/pages.js'
import { serviceHead } from './seo/serviceHead.js'

export const pages = SERVICE_PAGES.flatMap((item) => ['es', 'ca'].map((lang) => ({ page: item.key, lang, path: item[lang] })))

export const renderBody = (page, lang) =>
  renderToString(
    <StrictMode>
      <PageLanguageProvider page={page} lang={lang}>
        <ServicePage />
      </PageLanguageProvider>
    </StrictMode>,
  )

export const renderHead = serviceHead
