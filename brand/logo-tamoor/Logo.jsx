// Logo de PEB: las letras P, E y β en una línea, cada una en su módulo y separadas por líneas finas
// naranjas, como una retícula de plano. Letras monolínea de trazo fino; la B se dibuja como la beta
// griega (β) y va en naranja. Lienzo de 100 × 40.
const PE = 'M12.17 27V11H16.77A4 4 0 0 1 16.77 19H12.17M54.6 11H46V27H54.6M46 19H53.2'
const BETA = 'M78.6 33.5V15A4 4 0 0 1 82.6 11H83A3.8 3.8 0 0 1 83 18.6H81.2M81.2 18.6H83.6A4.2 4.2 0 0 1 83.6 27H78.6'

// Los colores salen de --logo-bg, --logo-fg y --logo-accent, así el pie de página puede invertir el logo.
export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 40" aria-hidden="true" focusable="false">
      <rect width="100" height="40" fill="var(--logo-bg)" />
      <path d="M33.33 9V33M66.67 9V33" stroke="var(--logo-accent)" strokeWidth="0.7" />
      <g fill="none" strokeWidth="2.2" strokeLinejoin="miter">
        <path d={PE} stroke="var(--logo-fg)" />
        <path d={BETA} stroke="var(--logo-accent)" />
      </g>
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
