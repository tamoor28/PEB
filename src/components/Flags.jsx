// Senyera: nueve franjas horizontales, cinco amarillas y cuatro rojas.
export function CatalanFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 27 18" aria-hidden="true" focusable="false">
      <rect width="27" height="18" fill="#FCDD09" />
      {[2, 6, 10, 14].map((y) => (
        <rect key={y} y={y} width="27" height="2" fill="#DA121A" />
      ))}
    </svg>
  )
}

// Bandera de España simplificada (sin escudo), proporción de franjas 1:2:1.
export function SpanishFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 27 18" aria-hidden="true" focusable="false">
      <rect width="27" height="18" fill="#AA151B" />
      <rect y="4.5" width="27" height="9" fill="#F1BF00" />
    </svg>
  )
}
