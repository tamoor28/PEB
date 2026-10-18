import { useLanguage } from '../i18n/LanguageContext.jsx'
import { valueIcons } from '../data/icons.js'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="nosotros" className="section about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__content" data-reveal>
          <p className="label">{about.eyebrow}</p>
          <h2 id="about-title" className="section-title">
            {about.title}
          </h2>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="about__text">
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="about__values">
          {about.values.map((value, index) => {
            const Icon = valueIcons[value.id]
            return (
              <li key={value.id} data-reveal style={{ '--i': index + 1 }}>
                <div className="value-card">
                  <span className="icon-box" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__text">{value.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
