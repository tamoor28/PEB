// Datos de contacto y legales de la empresa.
// ⚠️ Sustituye los valores de ejemplo antes de publicar la web
// (recuerda cambiarlos también en index.html, public/robots.txt y public/sitemap.xml).
export const site = {
  name: 'PEB',
  legalName: "PEB · Projectes d'Enginyeria de Barcelona",
  url: 'https://www.tudominio.com',
  email: 'info@tudominio.com',
  phone: '+34 600 000 000',
  city: 'Barcelona',
  // Datos para el aviso legal y la política de privacidad
  holder: '[Nombre y apellidos o razón social]',
  nif: '[NIF]',
  address: '[Dirección], 080XX Barcelona',
  // Deja la cadena vacía para ocultar el enlace
  linkedin: '',
}

export const phoneHref = `tel:${site.phone.replace(/\s+/g, '')}`
