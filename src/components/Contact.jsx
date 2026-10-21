import { useState } from 'react'
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { site } from '../data/site.js'
import PhoneLinks from './PhoneLinks.jsx'

const OTHER = 'otro'
// Web3Forms reenvía cada mensaje del formulario al correo con el que se creó la clave (peb.enginyeria@outlook.com).
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'

export default function Contact({ service, onServiceChange, onOpenLegal }) {
  const { t } = useLanguage()
  const { contact, categories } = t
  const { form, info } = contact
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // Al responder desde el correo, la respuesta va al cliente (replyto).
  const handleSubmit = async (event) => {
    event.preventDefault()
    const formElement = event.currentTarget
    const data = new FormData(formElement)
    const serviceLabel =
      categories.find((category) => category.id === service)?.title ?? (service === OTHER ? form.other : site.name)
    const labels = form.bodyLabels

    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject: form.subject(serviceLabel),
          from_name: site.legalName,
          replyto: data.get('email'),
          botcheck: Boolean(data.get('botcheck')),
          [labels.name]: data.get('name'),
          [labels.email]: data.get('email'),
          [labels.phone]: data.get('phone') || '—',
          [labels.service]: serviceLabel,
          [labels.message]: data.get('message'),
        }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.message)
      formElement.reset()
      onServiceChange('')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
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

          {/* Campo trampa para bots: las personas no lo ven ni lo marcan */}
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

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
            <button type="submit" className="btn btn--dark btn--lg" disabled={status === 'sending'}>
              {status === 'sending' ? form.sending : form.submit}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <p className={`contact-form__hint${status === 'error' ? ' is-error' : ''}`} role="status">
              {status === 'sent' ? form.success : status === 'error' ? form.error(site.email) : form.hint}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
