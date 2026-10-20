import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import './styles.css'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { canReveal } from './hooks/useReveal.js'
import App from './App.jsx'

// Se activa antes del primer render para que las animaciones de entrada no parpadeen.
if (canReveal()) document.documentElement.classList.add('has-reveal')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
