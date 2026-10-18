import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { categoryIcons, serviceIcons } from '../data/icons.js'

export default function ServiceSection({ category, index, total, onRequestQuote }) {
  const { t } = useLanguage()
  const CategoryIcon = categoryIcons[category.id]
  const pad = (n) => String(n).padStart(2, '0')
  const titleId = `${category.id}-title`

  return (
    <section
      id={category.id}
      className={`section service-section${index % 2 === 1 ? ' service-section--alt' : ''}`}
      aria-labelledby={titleId}
    >
      <div className="container service-section__inner">
        <div className="service-section__aside" data-reveal>
          <p className="service-section__number">
            <span className="icon-box" aria-hidden="true">
              <CategoryIcon size={20} strokeWidth={1.5} />
            </span>
            {pad(index + 1)}
            <span className="service-section__total">/ {pad(total)}</span>
          </p>
          <h2 id={titleId} className="section-title">
            {category.title}
          </h2>
          <p className="section-intro">{category.intro}</p>
          <a href="#contacto" className="btn btn--dark" onClick={() => onRequestQuote(category.id)}>
            {t.sectionCta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <ul className="service-grid">
          {category.items.map((item, itemIndex) => {
            const Icon = serviceIcons[item.id]
            return (
              <li key={item.id} data-reveal style={{ '--i': itemIndex }}>
                <article className="service-card">
                  <span className="icon-box" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="service-card__title">{item.title}</h3>
                  <p className="service-card__text">{item.text}</p>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
