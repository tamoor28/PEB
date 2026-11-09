import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './styles.css'
import { LanguageProvider, PageLanguageProvider } from './i18n/LanguageContext.jsx'
import { canReveal } from './hooks/useReveal.js'
import App from './App.jsx'

// Se activa antes del primer render para que las animaciones de entrada no parpadeen.
if (canReveal()) document.documentElement.classList.add('has-reveal')

// Las páginas de servicio indican en el HTML qué página e idioma son (data-page y data-lang).
const root = document.getElementById('root')
const { page, lang } = root.dataset

if (page) {
  // Su código y sus textos se cargan aparte, para que la principal no los descargue.
  import('./pages/ServicePage.jsx').then(({ default: ServicePage }) => {
    const app = (
      <StrictMode>
        <PageLanguageProvider page={page} lang={lang}>
          <ServicePage />
        </PageLanguageProvider>
      </StrictMode>
    )
    // Llegan ya renderizadas en el HTML (prerenderizado): React solo las activa.
    if (root.firstElementChild) hydrateRoot(root, app)
    else createRoot(root).render(app)
  })
} else {
  createRoot(root).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>,
  )
}
