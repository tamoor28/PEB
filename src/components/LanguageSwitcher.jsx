import { useLanguage } from '../i18n/LanguageContext.jsx'
import { CatalanFlag, SpanishFlag } from './Flags.jsx'

const OPTIONS = [
  { code: 'es', short: 'ES', Flag: SpanishFlag },
  { code: 'ca', short: 'CA', Flag: CatalanFlag },
]

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t.language.label}>
      {OPTIONS.map(({ code, short, Flag }) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={`lang-switch__btn${lang === code ? ' is-active' : ''}`}
          aria-pressed={lang === code}
          aria-label={t.language[code]}
          title={t.language[code]}
          onClick={() => setLang(code)}
        >
          <Flag className="lang-switch__flag" />
          <span>{short}</span>
        </button>
      ))}
    </div>
  )
}
