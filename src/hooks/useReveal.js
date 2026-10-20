import { useEffect } from 'react'

export const canReveal = () =>
  typeof window !== 'undefined' &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Hace aparecer con un fundido los elementos marcados con data-reveal cuando entran en pantalla.
// Se vuelve a ejecutar al cambiar de idioma para incluir los elementos nuevos.
export default function useReveal(key) {
  useEffect(() => {
    if (!canReveal()) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-visible', '')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    document.querySelectorAll('[data-reveal]:not([data-visible])').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])
}
