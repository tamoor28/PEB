import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import useActiveSection from '../hooks/useActiveSection.js'
import { site } from '../data/site.js'
import PhoneLinks from './PhoneLinks.jsx'
import Logo from './Logo.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const LINKS = [
  { id: 'licencia-actividad', key: 'actividad' },
  { id: 'legalizacion', key: 'legalizacion' },
  { id: 'proyectos', key: 'proyectos' },
  { id: 'direccion', key: 'direccion' },
  { id: 'gestion-energetica', key: 'energia' },
  { id: 'nosotros', key: 'nosotros' },
  { id: 'contacto', key: 'contacto' },
]

// Se observan también las secciones sin enlace para no dejar resaltado un enlace que ya no toca.
const OBSERVED = ['inicio', 'servicios', ...LINKS.map((link) => link.id), 'como-trabajamos']

export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const active = useActiveSection(OBSERVED)

  // La cabecera se oculta al bajar y reaparece al subir, para dejar más espacio en el móvil.
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 240)
        lastY = y
      }
      ticking = false
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 1199 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)
  const classes = ['header', scrolled && 'is-scrolled', hidden && !open && 'is-hidden', open && 'is-open']

  return (
    <header className={classes.filter(Boolean).join(' ')}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" aria-label={t.nav.home} onClick={close}>
          <Logo />
        </a>

        <nav id="main-nav" className="header__nav" aria-label={t.nav.label}>
          <ul className="header__links">
            {LINKS.map(({ id, key }, index) => (
              <li key={id} style={{ '--i': index }}>
                <a
                  href={`#${id}`}
                  className={`header__link${active === id ? ' is-active' : ''}`}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={close}
                >
                  <span className="header__link-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__mobile-footer">
            <a href="#contacto" className="btn btn--accent" onClick={close}>
              {t.nav.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="header__mobile-contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>
                <PhoneLinks />
              </span>
            </p>
          </div>
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <a href="#contacto" className="btn btn--dark btn--sm header__cta">
            {t.nav.cta}
          </a>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.nav.close : t.nav.open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="header__toggle-line" />
            <span className="header__toggle-line" />
          </button>
        </div>
      </div>
    </header>
  )
}
