// Datos de contacto y legales de la empresa.
// ⚠️ Sustituye los valores de ejemplo antes de publicar la web
// (recuerda cambiarlos también en index.html, public/robots.txt y public/sitemap.xml).
export const site = {
  name: 'PEB',
  legalName: "PEB · Projectes d'Enginyeria de Barcelona",
  url: 'https://tamoor28.github.io/PEB',
  email: 'peb.enginyeria@outlook.com',
  phones: ['+34 612 441 354', '+34 632 37 99 24'],
  city: 'Barcelona',
  // Datos para el aviso legal y la política de privacidad
  holder: '[Nombre y apellidos o razón social]',
  nif: '[NIF]',
  address: '[Dirección], 080XX Barcelona',
  // Deja la cadena vacía para ocultar el enlace
  linkedin: '',
}

export const telHref = (phone) => `tel:${phone.replace(/\s+/g, '')}`
