import { ArrowUp, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { site, telHref } from '../data/site.js'
import Logo from './Logo.jsx'
import { CatalanFlag } from './Flags.jsx'

const LEGAL_KEYS = ['aviso', 'privacidad', 'cookies']

export default function Footer({ onOpenLegal }) {
  const { t } = useLanguage()
  const { footer, nav, categories } = t
  const year = new Date().getFullYear()

  const companyLinks = [
    { href: '#nosotros', label: nav.nosotros },
    { href: '#como-trabajamos', label: footer.process },
    { href: '#contacto', label: nav.contacto },
    { href: '#contacto', label: footer.quote },
  ]

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" aria-label={nav.home}>
            <Logo />
          </a>
          <p className="footer__description">{footer.description}</p>
          <p className="footer__heading footer__heading--small">{footer.regulations}</p>
          <p className="footer__regulations">
            {t.regulations.map((reg) => (
              <abbr key={reg.code} title={reg.name}>
                {reg.code}
              </abbr>
            ))}
          </p>
          {site.linkedin && (
            <a href={site.linkedin} className="footer__social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          )}
        </div>

        <nav className="footer__col" aria-labelledby="footer-services">
          <p id="footer-services" className="footer__heading">
            {footer.services}
          </p>
          <ul className="footer__links">
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`}>{category.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-labelledby="footer-company">
          <p id="footer-company" className="footer__heading">
            {footer.company}
          </p>
          <ul className="footer__links">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <p className="footer__heading">{footer.contact}</p>
          <address className="footer__contact">
            <span>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
            {site.phones.map((phone) => (
              <span key={phone}>
                <Phone size={16} aria-hidden="true" />
                <a href={telHref(phone)}>{phone}</a>
              </span>
            ))}
            <span>
              <MapPin size={16} aria-hidden="true" />
              {t.contact.info.areaValue}
            </span>
          </address>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {site.legalName}. {footer.rights}
          </p>
          <ul className="footer__legal">
            {LEGAL_KEYS.map((key) => (
              <li key={key}>
                <button type="button" className="link-button" onClick={() => onOpenLegal(key)}>
                  {footer.legal[key]}
                </button>
              </li>
            ))}
          </ul>
          <p className="footer__made">
            <CatalanFlag className="footer__flag" />
            {footer.madeIn}
          </p>
          <a href="#inicio" className="footer__top" aria-label={footer.backToTop} title={footer.backToTop}>
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
