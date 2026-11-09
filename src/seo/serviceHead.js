// Etiquetas del <head> de cada página de servicio. Las genera scripts/prerender.mjs a partir de los mismos textos
// que se ven en la página (src/i18n/servicePages.*.js), así las preguntas frecuentes de los datos estructurados
// coinciden siempre con las de la página.
import { site } from '../data/site.js'
import { HOME, absoluteUrl, pagePath } from '../data/pages.js'
import { servicePageTexts } from '../i18n/servicePages.js'

const PROVIDER_NAME = "PEB - Projectes d'Enginyeria de Barcelona"
const AREA_SERVED = 'Barcelona i província'
const OG_LOCALES = { es: 'es_ES', ca: 'ca_ES' }

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function serviceHead(page, lang) {
  const { common, pages } = servicePageTexts[lang]
  const data = pages[page]
  const url = absoluteUrl(pagePath(page, lang))
  const homeUrl = absoluteUrl(HOME[lang])
  const otherLang = lang === 'es' ? 'ca' : 'es'

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#servicio`,
        name: data.h1,
        serviceType: data.name,
        description: data.description,
        url,
        inLanguage: lang,
        provider: {
          '@type': 'ProfessionalService',
          name: PROVIDER_NAME,
          url: homeUrl,
          email: site.email,
          telephone: site.phones.map((phone) => phone.replace(/\s+/g, '')),
        },
        areaServed: { '@type': 'AdministrativeArea', name: AREA_SERVED },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#preguntas`,
        inLanguage: lang,
        mainEntity: data.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#migas`,
        itemListElement: [
          { name: common.breadcrumb.home, item: homeUrl },
          { name: common.breadcrumb.services, item: `${homeUrl}#servicios` },
          { name: data.name, item: url },
        ].map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb })),
      },
    ],
  }

  return [
    `<title>${escapeHtml(data.title)}</title>`,
    `<meta name="description" content="${escapeHtml(data.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="es" href="${absoluteUrl(pagePath(page, 'es'))}" />`,
    `<link rel="alternate" hreflang="ca" href="${absoluteUrl(pagePath(page, 'ca'))}" />`,
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl(pagePath(page, 'es'))}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(site.legalName)}" />`,
    `<meta property="og:locale" content="${OG_LOCALES[lang]}" />`,
    `<meta property="og:locale:alternate" content="${OG_LOCALES[otherLang]}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(data.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(data.description)}" />`,
    `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}
