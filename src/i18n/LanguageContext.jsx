import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { flushSync } from 'react-dom'
import { translations, SUPPORTED_LANGUAGES } from './translations.js'
import { site } from '../data/site.js'

const STORAGE_KEY = 'peb-lang'
const DEFAULT_LANGUAGE = 'es'
const BASE = import.meta.env.BASE_URL

const LanguageContext = createContext(null)

// Cada idioma tiene su propia URL: / (castellano) y /ca/ (catalán).
const pathFor = (lang) => (lang === DEFAULT_LANGUAGE ? BASE : `${BASE}${lang}/`)

function languageFromPath() {
  const { pathname } = window.location
  const rest = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\//, '')
  const segment = rest.split('/')[0]
  return SUPPORTED_LANGUAGES.includes(segment) ? segment : null
}

// Prioridad: idioma de la URL → preferencia guardada → castellano.
function getInitialLanguage() {
  const fromPath = languageFromPath()
  if (fromPath) return fromPath
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored
  } catch {
    /* almacenamiento bloqueado */
  }
  return DEFAULT_LANGUAGE
}

function setAttr(selector, attr, value) {
  document.querySelector(selector)?.setAttribute(attr, value)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)
  const t = translations[lang]

  useEffect(() => {
    const canonical = `${site.url}${lang === DEFAULT_LANGUAGE ? '/' : `/${lang}/`}`

    document.documentElement.lang = lang
    document.title = t.meta.title
    setAttr('meta[name="description"]', 'content', t.meta.description)
    setAttr('meta[property="og:title"]', 'content', t.meta.title)
    setAttr('meta[property="og:description"]', 'content', t.meta.description)
    setAttr('meta[property="og:locale"]', 'content', lang === 'ca' ? 'ca_ES' : 'es_ES')
    setAttr('meta[property="og:url"]', 'content', canonical)
    setAttr('link[rel="canonical"]', 'href', canonical)

    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* almacenamiento bloqueado */
    }

    const { pathname, search, hash } = window.location
    const target = pathFor(lang)
    if (pathname !== target) window.history.replaceState(window.history.state, '', `${target}${search}${hash}`)
  }, [lang, t])

  // Fundido suave entre idiomas con la View Transitions API (si el navegador la soporta).
  const changeLanguage = useCallback((next) => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduceMotion) {
      setLang(next)
      return
    }
    document.startViewTransition(() => flushSync(() => setLang(next)))
  }, [])

  const value = useMemo(() => ({ lang, setLang: changeLanguage, t }), [lang, changeLanguage, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>')
  return context
}
