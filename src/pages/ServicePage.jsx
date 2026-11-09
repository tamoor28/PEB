import { useState } from 'react'
import {
  AirVent,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Briefcase,
  Check,
  CircuitBoard,
  CookingPot,
  DoorOpen,
  Fan,
  FileText,
  FireExtinguisher,
  Flame,
  Gauge,
  Handshake,
  Landmark,
  Layers,
  Lightbulb,
  MapPin,
  PlugZap,
  Plus,
  ReceiptText,
  ScanSearch,
  Store,
  Thermometer,
  UtensilsCrossed,
  Warehouse,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { servicePageTexts } from '../i18n/servicePages.js'
import { HOME, SERVICE_PAGES, pagePath } from '../data/pages.js'
import useReveal from '../hooks/useReveal.js'
import Header from '../components/Header.jsx'
import Process from '../components/Process.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import LegalModal from '../components/LegalModal.jsx'

// Iconos que pueden usar los textos de src/i18n/servicePages.*.js (por nombre)
const ICONS = {
  AirVent,
  BadgeCheck,
  BellRing,
  CircuitBoard,
  CookingPot,
  DoorOpen,
  Fan,
  FileText,
  FireExtinguisher,
  Gauge,
  Landmark,
  Layers,
  Lightbulb,
  PlugZap,
  ScanSearch,
  Thermometer,
  Wind,
}

const BUSINESS_ICONS = {
  comercios: Store,
  restauracion: UtensilsCrossed,
  oficinas: Briefcase,
  talleres: Wrench,
  almacenes: Warehouse,
}

const WHY_ICONS = { trato: Handshake, presupuesto: ReceiptText, papeleo: Landmark, local: MapPin }

const PAGE_ICONS = { 'licencia-actividad': Store, 'baja-tension': Zap, incendios: Flame, climatizacion: Thermometer }

// El nombre de la ciudad del título se subraya como en la portada de la principal
function PageTitle({ text }) {
  const city = 'Barcelona'
  if (!text.endsWith(city)) return text
  return (
    <>
      {text.slice(0, -city.length)}
      <span className="hero__highlight">{city}</span>
    </>
  )
}

export default function ServicePage() {
  const { lang, t, page, link } = useLanguage()
  const { common, pages } = servicePageTexts[lang]
  const data = pages[page]
  const home = link(HOME[lang])

  // El desplegable «Servicio» del formulario empieza con el servicio de la página. Si no es un apartado
  // de la principal, se añade como opción propia.
  const isCategory = t.categories.some((category) => category.id === page)
  const extraOption = isCategory ? undefined : { id: page, title: data.name }
  const [service, setService] = useState(page)
  const [legal, setLegal] = useState(null)
  useReveal(lang)

  const others = SERVICE_PAGES.filter((item) => item.key !== page)

  return (
    <>
      <a href="#contenido" className="skip-link">
        {t.skip}
      </a>
      <Header />
      <main id="contenido">
        <section id="inicio" className="hero hero--page" aria-labelledby="page-title">
          <div className="container">
            <nav className="breadcrumbs" aria-label={common.breadcrumb.label}>
              <ol>
                <li>
                  <a href={home}>{common.breadcrumb.home}</a>
                </li>
                <li>
                  <a href={`${home}#servicios`}>{common.breadcrumb.services}</a>
                </li>
                <li>
                  <span aria-current="page">{data.name}</span>
                </li>
              </ol>
            </nav>

            <div className="hero__content">
              <p className="label label--light">{common.eyebrow}</p>
              <h1 id="page-title" className="hero__title">
                <PageTitle text={data.h1} />
              </h1>
              {data.intro.map((paragraph) => (
                <p key={paragraph} className="hero__subtitle">
                  {paragraph}
                </p>
              ))}
              <div className="hero__actions">
                <a href="#contacto" className="btn btn--accent btn--lg">
                  {common.cta}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section page-section" aria-labelledby="when-title">
          <div className="container page-split">
            <div className="page-split__aside" data-reveal>
              <p className="label">{common.labels.when}</p>
              <h2 id="when-title" className="section-title">
                {data.when.title}
              </h2>
              <p className="section-intro">{data.when.intro}</p>
            </div>
            <ul className="situations">
              {data.when.items.map((item, index) => (
                <li key={item.title} className="situation" data-reveal style={{ '--i': index }}>
                  <span className="situation__icon" aria-hidden="true">
                    <Check size={16} strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="situation__title">{item.title}</h3>
                    <p className="situation__text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section service-section service-section--alt page-includes" aria-labelledby="includes-title">
          <div className="container service-section__inner">
            <div className="service-section__aside" data-reveal>
              <p className="label">{common.labels.includes}</p>
              <h2 id="includes-title" className="section-title">
                {data.includes.title}
              </h2>
              <p className="section-intro">{data.includes.intro}</p>
              <a href="#contacto" className="btn btn--dark">
                {common.cta}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <ul className="service-grid">
              {data.includes.items.map((item, index) => {
                const Icon = ICONS[item.icon]
                return (
                  <li key={item.title} data-reveal style={{ '--i': index }}>
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

        <section className="section page-section" aria-labelledby="norms-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="label">{common.labels.norms}</p>
              <h2 id="norms-title" className="section-title">
                {common.normsTitle}
              </h2>
              <p className="section-intro">{data.norms.intro}</p>
            </div>
            <ul className="norms">
              {data.norms.items.map((norm, index) => (
                <li key={norm.code} className="norm" data-reveal style={{ '--i': index }}>
                  <p className="norm__code">{norm.code}</p>
                  <div>
                    <h3 className="norm__name">{norm.name}</h3>
                    <p className="norm__text">{norm.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section page-section page-section--alt" aria-labelledby="businesses-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="label">{common.labels.businesses}</p>
              <h2 id="businesses-title" className="section-title">
                {common.businessesTitle}
              </h2>
              <p className="section-intro">{data.businesses.intro}</p>
            </div>
            <ul className="business-grid">
              {Object.entries(common.businessTypes).map(([id, title], index) => {
                const Icon = BUSINESS_ICONS[id]
                return (
                  <li key={id} data-reveal style={{ '--i': index }}>
                    <div className="business-card">
                      <span className="icon-box" aria-hidden="true">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <h3 className="business-card__title">{title}</h3>
                      <p className="business-card__text">{data.businesses.items[id]}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <Process />

        <section className="section about" aria-labelledby="why-title">
          <div className="container about__inner">
            <div className="about__content" data-reveal>
              <p className="label">{common.why.eyebrow}</p>
              <h2 id="why-title" className="section-title">
                {common.why.title}
              </h2>
              <p className="about__text">{common.why.intro}</p>
            </div>
            <ul className="about__values">
              {common.why.items.map((item, index) => {
                const Icon = WHY_ICONS[item.id]
                return (
                  <li key={item.id} data-reveal style={{ '--i': index + 1 }}>
                    <div className="value-card">
                      <span className="icon-box" aria-hidden="true">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <h3 className="value-card__title">{item.title}</h3>
                      <p className="value-card__text">{item.text}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="section page-section page-section--alt" aria-labelledby="faq-title">
          <div className="container page-split">
            <div className="page-split__aside" data-reveal>
              <p className="label">{common.labels.faq}</p>
              <h2 id="faq-title" className="section-title">
                {common.faqTitle}
              </h2>
            </div>
            <div className="faq" data-reveal>
              {data.faq.map((item) => (
                <details key={item.q} className="faq__item">
                  <summary>
                    <h3 className="faq__question">{item.q}</h3>
                    <span className="faq__icon" aria-hidden="true">
                      <Plus size={18} />
                    </span>
                  </summary>
                  <p className="faq__answer">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contact
          service={service}
          onServiceChange={(value) => setService(value || page)}
          onOpenLegal={setLegal}
          extraOption={extraOption}
        />

        <section className="section page-section" aria-labelledby="others-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="label">{common.labels.others}</p>
              <h2 id="others-title" className="section-title">
                {common.othersTitle}
              </h2>
            </div>
            <ul className="overview__grid page-others">
              {others.map((item, index) => {
                const Icon = PAGE_ICONS[item.key]
                const other = pages[item.key]
                return (
                  <li key={item.key} data-reveal style={{ '--i': index }}>
                    <a href={link(pagePath(item.key, lang))} className="overview-card">
                      <span className="overview-card__top">
                        <span className="icon-box icon-box--lg" aria-hidden="true">
                          <Icon size={24} strokeWidth={1.5} />
                        </span>
                      </span>
                      <h3 className="overview-card__title">{other.name}</h3>
                      <span className="overview-card__text">{other.short}</span>
                      <span className="overview-card__footer">
                        <span className="overview-card__count">{common.city}</span>
                        <span className="overview-card__more">
                          {common.othersMore}
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
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalModal type={legal} onClose={() => setLegal(null)} />
    </>
  )
}
