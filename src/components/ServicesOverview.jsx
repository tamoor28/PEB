import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { categoryIcons } from '../data/icons.js'
import { CATEGORY_PAGES, pagePath } from '../data/pages.js'

export default function ServicesOverview() {
  const { t, lang, link } = useLanguage()
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
            // Los servicios con página propia llevan a ella; el resto, a su apartado de esta página
            const page = CATEGORY_PAGES[category.id]
            return (
              <li key={category.id} data-reveal style={{ '--i': index }}>
                <a href={page ? link(pagePath(page, lang)) : `#${category.id}`} className="overview-card">
                  <span className="overview-card__top">
                    <span className="icon-box icon-box--lg" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.5} />
                    </span>
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
