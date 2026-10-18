import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Process() {
  const { t } = useLanguage()
  const { process } = t

  return (
    <section id="como-trabajamos" className="section process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="label label--light">{process.eyebrow}</p>
          <h2 id="process-title" className="section-title">
            {process.title}
          </h2>
          <p className="section-intro">{process.intro}</p>
        </div>

        <ol className="process__steps">
          {process.steps.map((step, index) => (
            <li key={index} className="process-step" data-reveal style={{ '--i': index }}>
              <span className="process-step__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
