// Logo de PEB: las letras P, ε y B en una línea, cada una en su módulo y separadas por líneas finas
// naranjas, como una retícula de plano, y debajo, en pequeño, la palabra ENGINYERIA. Letras monolínea
// de trazo fino; la E se dibuja como la épsilon griega (ε) y va en naranja. Lienzo de 100 × 48.
// Versiones anteriores guardadas: brand/logo-tamoor/ y brand/logo-zain/.
const PB =
  'M12.17 25V9H16.77A4 4 0 0 1 16.77 17H12.17M78.5 16.6H83.5A4.2 4.2 0 0 1 83.5 25H78.5V9H82.9A3.8 3.8 0 0 1 82.9 16.6H78.5'
const EPSILON = 'M54.4 9H49.8A3.8 3.8 0 0 0 49.8 16.6H50.2A4.2 4.2 0 0 0 50.2 25H54.8'
const WORD =
  'M24.75 34H22V39H24.75M22 36.5H24.34M28.01 39V34L31.39 39V34M38.4 34H37.15A2.5 2.5 0 0 0 37.15 39H38.4V36.5H36.9M41.67 34V39M44.93 39V34L48.31 39V34M51.57 34L53.38 36.5L55.19 34M53.38 36.5V39M61.21 34H58.46V39H61.21M58.46 36.5H60.8M64.47 39V34H66.22A1.38 1.38 0 0 1 66.22 36.75H64.47M66.03 36.75L67.6 39M70.86 34V39M74.12 39L76.06 34L78 39M74.78 37.3H77.34'

// Los colores salen de --logo-bg, --logo-fg y --logo-accent, así el pie de página puede invertir el logo.
export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 48" aria-hidden="true" focusable="false">
      <rect width="100" height="48" fill="var(--logo-bg)" />
      <path d="M33.33 5V29M66.67 5V29" stroke="var(--logo-accent)" strokeWidth="0.7" />
      <g fill="none" strokeWidth="2.2" strokeLinejoin="miter">
        <path d={PB} stroke="var(--logo-fg)" />
        <path d={EPSILON} stroke="var(--logo-accent)" />
      </g>
      <path d={WORD} fill="none" stroke="var(--logo-fg)" strokeWidth="0.8" strokeMiterlimit="1.5" />
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="logo">
      <LogoMark className="logo__mark" />
      <span className="logo__tagline">
        Projectes d&rsquo;Enginyeria
        <br />
        de Barcelona
      </span>
    </span>
  )
}
