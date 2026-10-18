import { ArrowRight, Check } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__content">
          <p className="label label--light">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {hero.titleStart}
            <span className="hero__highlight">{hero.titleHighlight}</span>
            {hero.titleEnd}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            <a href="#contacto" className="btn btn--accent btn--lg">
              {hero.ctaPrimary}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#servicios" className="btn btn--ghost btn--lg">
              {hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero__highlights">
            {hero.highlights.map((item, index) => (
              <li key={index}>
                <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__regulations">
          <span className="hero__regulations-label">{hero.regulationsLabel}</span>
          <ul>
            {t.regulations.map((reg) => (
              <li key={reg.code}>
                <abbr title={reg.name}>{reg.code}</abbr>
                <span className="hero__regulations-name">{reg.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
