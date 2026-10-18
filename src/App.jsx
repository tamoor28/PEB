import { useState } from 'react'
import { useLanguage } from './i18n/LanguageContext.jsx'
import useReveal from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ServicesOverview from './components/ServicesOverview.jsx'
import ServiceSection from './components/ServiceSection.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import LegalModal from './components/LegalModal.jsx'

export default function App() {
  const { lang, t } = useLanguage()
  const [service, setService] = useState('')
  const [legal, setLegal] = useState(null)
  useReveal(lang)

  return (
    <>
      <a href="#contenido" className="skip-link">
        {t.skip}
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <ServicesOverview />
        {t.categories.map((category, index) => (
          <ServiceSection
            key={category.id}
            category={category}
            index={index}
            total={t.categories.length}
            onRequestQuote={setService}
          />
        ))}
        <Process />
        <About />
        <Contact service={service} onServiceChange={setService} onOpenLegal={setLegal} />
      </main>
      <Footer onOpenLegal={setLegal} />
      <LegalModal type={legal} onClose={() => setLegal(null)} />
    </>
  )
}
