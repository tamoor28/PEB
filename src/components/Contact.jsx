import { useState } from 'react'
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'
import PhoneLinks from './PhoneLinks.jsx'

const OTHER = 'otro'

export default function Contact({ service, onServiceChange, onOpenLegal }) {
  const { t } = useLanguage()
  const { contact, categories } = t
  const { form, info } = contact
  const [sent, setSent] = useState(false)

  // Sin servidor: el formulario prepara el correo y abre la aplicación de email del visitante.
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const serviceLabel =
      categories.find((category) => category.id === service)?.title ?? (service === OTHER ? form.other : site.name)
    const labels = form.bodyLabels
    const body = [
      `${labels.name}: ${data.get('name')}`,
      `${labels.email}: ${data.get('email')}`,
      data.get('phone') ? `${labels.phone}: ${data.get('phone')}` : null,
      `${labels.service}: ${serviceLabel}`,
      '',
      data.get('message'),
    ]
      .filter((line) => line !== null)
      .join('\n')

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(form.subject(serviceLabel))}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  const details = [
    { Icon: Mail, label: info.email, value: site.email, href: `mailto:${site.email}` },
    { Icon: Phone, label: info.phone, value: <PhoneLinks className="contact-detail__value" /> },
    { Icon: MapPin, label: info.area, value: info.areaValue },
    { Icon: Clock, label: info.hours, value: info.hoursValue },
  ]

  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__inner">
        <div className="contact__info" data-reveal>
          <p className="label">{contact.eyebrow}</p>
          <h2 id="contact-title" className="section-title">
            {contact.title}
          </h2>
          <p className="section-intro">{contact.intro}</p>

          <ul className="contact__details">
            {details.map(({ Icon, label, value, href }) => (
              <li key={label} className="contact-detail">
                <span className="icon-box" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <span>
                  <span className="contact-detail__label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-detail__value">
                      {value}
                    </a>
                  ) : (
                    <span className="contact-detail__value">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal style={{ '--i': 1 }}>
          <div className="form-row">
            <label className="field">
              <span className="field__label">{form.name}</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label className="field">
              <span className="field__label">{form.email}</span>
              <input name="email" type="email" autoComplete="email" inputMode="email" required />
            </label>
          </div>
          <div className="form-row">
            <label className="field">
              <span className="field__label">{form.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
            </label>
            <label className="field">
              <span className="field__label">{form.service}</span>
              <select name="service" value={service} onChange={(event) => onServiceChange(event.target.value)} required>
                <option value="" disabled>
                  {form.servicePlaceholder}
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
                <option value={OTHER}>{form.other}</option>
              </select>
            </label>
          </div>
          <label className="field">
            <span className="field__label">{form.message}</span>
            <textarea name="message" rows={5} placeholder={form.messagePlaceholder} required />
          </label>

          <label className="checkbox">
            <input type="checkbox" name="privacy" required />
            <span>
              {form.privacyStart}
              <button type="button" className="link-button" onClick={() => onOpenLegal('privacidad')}>
                {form.privacyLink}
              </button>
              .
            </span>
          </label>

          <div className="contact-form__footer">
            <button type="submit" className="btn btn--dark btn--lg">
              {form.submit}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <p className="contact-form__hint" role="status">
              {sent ? form.success(site.email) : form.hint}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
