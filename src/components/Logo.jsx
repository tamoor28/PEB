// Logo de PEB: las letras P, ε y B en una línea, cada una en su módulo y separadas por líneas finas
// naranjas, como una retícula de plano, y un cuarto módulo con la palabra ENGINYERIA. Letras monolínea
// de trazo fino; la E se dibuja como la épsilon griega (ε) y va en naranja. Lienzo de 199 × 40.
// En pantallas estrechas se usa la versión corta (solo P ε B, lienzo de 100 × 40), que es el logo Zain.
// Versiones anteriores guardadas: brand/logo-tamoor/ y brand/logo-zain/.
const PB =
  'M12.17 28V12H16.77A4 4 0 0 1 16.77 20H12.17M78.5 19.6H83.5A4.2 4.2 0 0 1 83.5 28H78.5V12H82.9A3.8 3.8 0 0 1 82.9 19.6H78.5'
const EPSILON = 'M54.4 12H49.8A3.8 3.8 0 0 0 49.8 19.6H50.2A4.2 4.2 0 0 0 50.2 28H54.8'
const WORD =
  'M116.4 16H112V24H116.4M112 20H115.74M120 24V16L125.4 24V16M135 16H133A4 4 0 0 0 133 24H135V20H132.6M138.6 16V24M142.2 24V16L147.6 24V16M151.2 16L154.1 20L157 16M154.1 20V24M165 16H160.6V24H165M160.6 20H164.34M168.6 24V16H171.4A2.2 2.2 0 0 1 171.4 20.4H168.6M171.1 20.4L173.6 24M177.2 16V24M180.8 24L183.9 16L187 24M181.85 21.28H185.95'

// Los colores salen de --logo-bg, --logo-fg y --logo-accent, así el pie de página puede invertir el logo.
export function LogoMark({ className, short = false }) {
  const width = short ? 100 : 199
  return (
    <svg className={className} viewBox={`0 0 ${width} 40`} aria-hidden="true" focusable="false">
      <rect width={width} height="40" fill="var(--logo-bg)" />
      <path d={short ? 'M33.33 8V32M66.67 8V32' : 'M33.33 8V32M66.67 8V32M100 8V32'} stroke="var(--logo-accent)" strokeWidth="0.7" />
      <g fill="none" strokeWidth="2.2" strokeLinejoin="miter">
        <path d={PB} stroke="var(--logo-fg)" />
        <path d={EPSILON} stroke="var(--logo-accent)" />
      </g>
      {!short && <path d={WORD} fill="none" stroke="var(--logo-fg)" strokeWidth="1.1" strokeMiterlimit="1.5" />}
    </svg>
  )
}

export default function Logo() {
  return (
    <span className="logo">
      <LogoMark className="logo__mark logo__mark--full" />
      <LogoMark className="logo__mark logo__mark--short" short />
      <span className="logo__tagline">
        Projectes d&rsquo;Enginyeria
        <br />
        de Barcelona
      </span>
    </span>
  )
}
