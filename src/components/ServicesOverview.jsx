import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { categoryIcons } from '../data/icons.js'

export default function ServicesOverview() {
  const { t } = useLanguage()
  const { overview, categories } = t

  return (
    <section id="servicios" className="section overview" aria-labelledby="overview-title">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="label">{overview.eyebrow}</p>
          <h2 id="overview-title" className="section-title">
            {overview.title}
          </h2>
          <p className="section-intro">{overview.intro}</p>
        </div>

        <ul className="overview__grid">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.id]
            return (
              <li key={category.id} data-reveal style={{ '--i': index }}>
                <a href={`#${category.id}`} className="overview-card">
                  <span className="overview-card__top">
                    <span className="icon-box icon-box--lg" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
                    <span className="overview-card__number">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <span className="overview-card__title">{category.title}</span>
                  <span className="overview-card__text">{category.short}</span>
                  <span className="overview-card__footer">
                    <span className="overview-card__count">{overview.count(category.items.length)}</span>
                    <span className="overview-card__more">
                      {overview.more}
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
