import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Ventana con el aviso legal, la política de privacidad o la de cookies.
export default function LegalModal({ type, onClose }) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)
  const content = type ? t.legal[type] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (type && !dialog.open) dialog.showModal()
    if (!type && dialog.open) dialog.close()
  }, [type])

  return (
    <dialog
      ref={dialogRef}
      className="legal-modal"
      aria-labelledby="legal-title"
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      {content && (
        <div className="legal-modal__body">
          <div className="legal-modal__head">
            <h2 id="legal-title">{content.title}</h2>
            <button type="button" className="legal-modal__close" onClick={onClose} aria-label={t.legal.close}>
              <X size={20} />
            </button>
          </div>
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="legal-modal__updated">{t.legal.updated}</p>
        </div>
      )}
    </dialog>
  )
}
