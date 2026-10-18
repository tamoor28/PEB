// Logo de PEB: las letras P, E y B en una línea, cada una en su módulo y separadas por líneas finas,
// con una sombra naranja desplazada. Letras de Archivo (peso 800, anchura 125 %, la misma letra del
// «PEB» original) convertidas a trazados, en un lienzo de 100 × 40.
const LETTERS =
  'M8.63 28.50L8.63 11.48L21.79 11.48Q23.45 11.48 24.72 12.21Q25.98 12.94 26.67 14.25Q27.37 15.56 27.37 17.25Q27.37 18.98 26.65 20.30Q25.93 21.61 24.65 22.34Q23.38 23.07 21.72 23.07L13.66 23.07L13.66 28.50ZM13.66 19.36L20.30 19.36Q21.42 19.36 22 18.81Q22.58 18.27 22.58 17.30Q22.58 16.58 22.32 16.13Q22.06 15.69 21.56 15.44Q21.05 15.19 20.30 15.19L13.66 15.19ZM41.02 28.50L41.02 11.48L58.76 11.48L58.76 15.19L46.07 15.19L46.07 18.07L57.20 18.07L57.20 21.69L46.07 21.69L46.07 24.76L58.98 24.76L58.98 28.50ZM72.32 28.50L72.32 11.48L86.32 11.48Q87.71 11.48 88.83 12Q89.94 12.52 90.59 13.46Q91.23 14.40 91.23 15.66Q91.23 16.78 90.83 17.57Q90.44 18.36 89.78 18.86Q89.12 19.36 88.28 19.60L88.28 19.70Q89.25 19.90 90.02 20.41Q90.78 20.92 91.23 21.78Q91.68 22.65 91.68 23.89Q91.68 25.35 90.97 26.38Q90.26 27.41 89.06 27.95Q87.86 28.50 86.40 28.50ZM77.35 24.91L84.71 24.91Q85.53 24.91 86.03 24.47Q86.52 24.04 86.52 23.15Q86.52 22.68 86.30 22.29Q86.08 21.91 85.67 21.71Q85.26 21.51 84.66 21.51L77.35 21.51ZM77.35 18.19L84.29 18.19Q84.86 18.19 85.26 17.98Q85.66 17.77 85.88 17.40Q86.10 17.03 86.10 16.51Q86.10 15.79 85.61 15.37Q85.11 14.94 84.37 14.94L77.35 14.94Z'

// Los colores salen de --logo-bg, --logo-fg y --logo-shadow, así el pie de página puede invertir el logo.
export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 40" aria-hidden="true" focusable="false">
      <rect width="100" height="40" fill="var(--logo-bg)" />
      <path d="M34 9V31M66 9V31" stroke="var(--logo-fg)" strokeOpacity="0.25" strokeWidth="0.6" />
      <path d={LETTERS} fill="var(--logo-shadow)" transform="translate(1.6 1.6)" />
      <path d={LETTERS} fill="var(--logo-fg)" />
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
