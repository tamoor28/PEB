// Logo de PEB: las letras P, ε y B en una línea, cada una en su módulo y separadas por líneas finas
// naranjas, como una retícula de plano. Letras monolínea de trazo fino; la E se dibuja como la
// épsilon griega (ε) y va en naranja. Lienzo de 100 × 40.
// La versión anterior (logo Tamoor, con β naranja) está guardada en brand/logo-tamoor/.
const PB =
  'M12.17 28V12H16.77A4 4 0 0 1 16.77 20H12.17M78.5 19.6H83.5A4.2 4.2 0 0 1 83.5 28H78.5V12H82.9A3.8 3.8 0 0 1 82.9 19.6H78.5'
const EPSILON = 'M54.4 12H49.8A3.8 3.8 0 0 0 49.8 19.6H50.2A4.2 4.2 0 0 0 50.2 28H54.8'

// Los colores salen de --logo-bg, --logo-fg y --logo-accent, así el pie de página puede invertir el logo.
export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 40" aria-hidden="true" focusable="false">
      <rect width="100" height="40" fill="var(--logo-bg)" />
      <path d="M33.33 8V32M66.67 8V32" stroke="var(--logo-accent)" strokeWidth="0.7" />
      <g fill="none" strokeWidth="2.2" strokeLinejoin="miter">
        <path d={PB} stroke="var(--logo-fg)" />
        <path d={EPSILON} stroke="var(--logo-accent)" />
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
