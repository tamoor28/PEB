# PEB · Projectes d'Enginyeria de Barcelona

Web corporativa de **PEB**, una ingeniería de Barcelona formada por dos ingenieros mecánicos y especializada en **proyectos de actividad, baja tensión y legalización de instalaciones**.

La web presenta los servicios de la empresa, está pensada para aparecer en las búsquedas de Google y se puede consultar en **castellano** y en **catalán** con un solo clic (bandera catalana en la cabecera).

---

## Índice

- [Secciones de la web](#secciones-de-la-web)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Puesta en marcha](#puesta-en-marcha)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo modificar la web](#cómo-modificar-la-web)
- [Logo](#logo)
- [Antes de publicar](#antes-de-publicar)
- [Publicación](#publicación)
- [Posicionamiento en Google (SEO)](#posicionamiento-en-google-seo)

---

## Secciones de la web

| Sección | Ancla | Contenido |
| --- | --- | --- |
| Portada | `#inicio` | Presentación de PEB, llamadas a la acción y normativa de referencia (CTE, RITE, REBT, RIPCI) |
| Servicios | `#servicios` | Resumen de las cuatro áreas de trabajo en tarjetas |
| **01 · Legalización** | `#legalizacion` | Legalización de instalaciones, licencia de actividad, licencia de apertura, comunicación de obra y declaración responsable |
| **02 · Proyectos básicos y de ejecución** | `#proyectos` | Fontanería y saneamiento, climatización y calefacción, ventilación, electricidad, protección contra incendios y energías renovables |
| **03 · Dirección y gestión** | `#direccion` | Dirección facultativa de obra, mediciones y presupuestos |
| **04 · Gestión energética** | `#gestion-energetica` | Proyecto de eficiencia energética, proyectos de sostenibilidad energética y certificación de eficiencia energética |
| Cómo trabajamos | `#como-trabajamos` | Proceso en cuatro pasos: consulta, visita y presupuesto, proyecto técnico, tramitación |
| Nosotros | `#nosotros` | Quiénes somos y nuestros valores |
| Contacto | `#contacto` | Datos de contacto y formulario de solicitud de presupuesto |
| Pie de página | — | Servicios, empresa, contacto, normativa, aviso legal, privacidad y cookies |

## Características

- **Bilingüe castellano / catalán.** Selector con banderas en la cabecera. Cada idioma tiene su propia URL (`/` y `/ca/`) con título, descripción y etiquetas `hreflang` propias, para que Google indexe las dos versiones. La web recuerda el idioma elegido.
- **Preparada para Google.** Metadatos, Open Graph (vista previa al compartir por WhatsApp o LinkedIn), datos estructurados `ProfessionalService` de schema.org, `sitemap.xml` y `robots.txt`.
- **Diseño por secciones y tarjetas con acabado técnico:** portada oscura con retícula de plano, fondos en gris claro, tarjetas con icono para cada servicio, filetes finos, esquinas rectas y un único color de acento.
- **Transiciones suaves:** los bloques aparecen con un fundido al hacer scroll, el cambio de idioma es un fundido, el menú móvil se despliega con animación y la cabecera se oculta al bajar y reaparece al subir. Si el sistema tiene activado «reducir movimiento», las animaciones se desactivan.
- **Adaptada a móvil, tablet y ordenador** (revisada de 320 px a 1440 px), con menú a pantalla completa en el móvil y campos de formulario que no hacen zoom en iPhone.
- **Accesible:** HTML semántico, enlace para saltar al contenido, navegación con teclado y textos alternativos.
- **Formulario de contacto sin servidor:** prepara el correo con los datos del cliente y abre su aplicación de email. El botón «Solicitar presupuesto» de cada sección deja el servicio ya seleccionado.
- **Sin cookies:** las tipografías se sirven desde la propia web (no se usa Google Fonts) y solo se guarda el idioma en el navegador. No hace falta banner de cookies.
- **Textos legales** (aviso legal, privacidad y cookies) en ventanas emergentes, en los dos idiomas.

## Tecnologías

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- [Lucide](https://lucide.dev/) para los iconos
- Tipografías [Archivo](https://fontsource.org/fonts/archivo) (textos y títulos, con su eje de anchura) e [IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono) (etiquetas y numeración), autoalojadas con Fontsource
- CSS propio, sin frameworks

## Puesta en marcha

Requisitos: [Node.js](https://nodejs.org/) 20.19 o superior (recomendado 22 LTS).

```bash
npm install
```

```bash
npm run dev
```

Abre <http://localhost:5173> (castellano) o <http://localhost:5173/ca/> (catalán).

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Genera la web lista para publicar en la carpeta `dist/` |
| `npm run preview` | Sirve la carpeta `dist/` para revisarla antes de publicar |

## Estructura del proyecto

```text
PEB/
├── index.html                 # Página en castellano (metadatos SEO y datos estructurados)
├── ca/index.html              # Página en catalán (metadatos SEO en catalán)
├── public/
│   ├── favicon.svg            # Logo cuadrado (pestaña y avatares)
│   ├── logo.svg               # Logo «PEB»
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.jsx               # Punto de entrada
│   ├── App.jsx                # Orden de las secciones
│   ├── styles.css             # Estilos y paleta de colores
│   ├── data/
│   │   ├── site.js            # ⚙️ Datos de contacto y legales de la empresa
│   │   └── icons.js           # Icono de cada área, servicio y valor
│   ├── i18n/
│   │   ├── translations.js    # ✏️ Todos los textos en castellano y catalán
│   │   └── LanguageContext.jsx
│   ├── hooks/
│   │   ├── useActiveSection.js  # Resalta en el menú la sección visible
│   │   └── useReveal.js         # Animación de aparición al hacer scroll
│   └── components/            # Cabecera, portada, secciones, contacto, footer…
├── .github/workflows/deploy.yml  # Publicación automática en GitHub Pages
└── vite.config.js
```

## Logo

El logo de PEB son las letras **P**, **E** y **β** en una línea dentro de un bloque negro, cada una en su módulo y separadas por **líneas finas naranjas**, como una retícula de plano. Las letras son de **trazo fino y constante**, dibujadas a mano como trazados vectoriales (no dependen de ninguna fuente). La **B se dibuja como la beta griega (β)**, con la esquina superior redondeada y el palo que baja por debajo de la línea, y va en **naranja**.

| Archivo | Uso |
| --- | --- |
| `public/logo.svg` | Logo horizontal en vectorial (bloque negro, P y E blancas, β y líneas de módulo en naranja). Para la web, tarjetas, presupuestos o firmas de correo |
| `public/favicon.svg` | Versión cuadrada y compacta. Icono de la pestaña y foto de perfil en LinkedIn, WhatsApp Business o el Perfil de Empresa de Google |
| `src/components/Logo.jsx` | Versión usada en la web: logo y nombre completo en la cabecera; en el pie de página (fondo negro) se invierte a bloque blanco con letras negras. Los colores se cambian con `--logo-bg`, `--logo-fg` y `--logo-accent` en `src/styles.css` |

Si alguna plataforma pide PNG, se puede exportar el SVG desde cualquier editor de imágenes o abriéndolo en el navegador.

## Cómo modificar la web

| Quiero cambiar… | Archivo |
| --- | --- |
| Email, teléfono, dominio, datos legales, LinkedIn | `src/data/site.js` |
| Cualquier texto (en los dos idiomas) | `src/i18n/translations.js` |
| Añadir o quitar un servicio | `src/i18n/translations.js` (en `es` y en `ca`) y su icono en `src/data/icons.js` |
| Colores, tipografías y velocidad de las animaciones | Variables al principio de `src/styles.css` (`--accent`, `--ink`, `--ease`…) |
| Título y descripción para Google | `index.html`, `ca/index.html` y `meta` en `translations.js` |

> Los textos están duplicados en castellano y catalán: cuando cambies uno, cambia también el otro.

## Antes de publicar

La web lleva **datos de ejemplo** que hay que sustituir:

- [ ] `src/data/site.js`: dominio (`url`), `email`, `phone`, titular, NIF y dirección para los textos legales. Si tenéis LinkedIn, añadid la URL.
- [ ] `index.html` y `ca/index.html`: sustituir `https://www.tudominio.com` por el dominio real (y el email y teléfono de los datos estructurados de `index.html`).
- [ ] `public/robots.txt` y `public/sitemap.xml`: sustituir el dominio.
- [ ] `src/i18n/translations.js`: revisar el horario de atención y, si queréis, añadir vuestros nombres en la sección «Nosotros».
- [ ] Revisar los textos legales con un asesor; son una plantilla básica.

## Publicación

La carpeta `dist/` que genera `npm run build` es una web estática: se puede alojar en cualquier hosting.

### Opción A · GitHub Pages (incluida)

1. En GitHub, ve a **Settings → Pages** y en **Source** elige **GitHub Actions**.
2. Sube los cambios a la rama `main`. El flujo `.github/workflows/deploy.yml` compila y publica la web automáticamente.
3. Sin dominio propio, la web queda en `https://<usuario>.github.io/PEB/`.
4. Con dominio propio (recomendado), configúralo en **Settings → Pages → Custom domain** y crea la variable de repositorio `BASE_PATH` con el valor `/` (**Settings → Secrets and variables → Actions → Variables**).

### Opción B · Netlify o Vercel

Importa el repositorio y usa esta configuración:

- Comando de compilación: `npm run build`
- Carpeta de publicación: `dist`

## Posicionamiento en Google (SEO)

**Incluido en la web:**

- Título y descripción con las búsquedas clave: *legalización de instalaciones*, *licencia de actividad*, *baja tensión*, *Barcelona*…
- Un único `h1` y jerarquía de títulos por servicio.
- Versiones en castellano y catalán enlazadas con `hreflang`.
- Datos estructurados de negocio local con todos los servicios.
- `sitemap.xml` y `robots.txt`.

**Pasos recomendados después de publicar:**

1. **Google Search Console:** dad de alta el dominio y enviad `https://vuestro-dominio/sitemap.xml`.
2. **Perfil de Empresa de Google (Google Business Profile):** es lo que más ayuda a aparecer en búsquedas locales y en Google Maps («ingeniero licencia de actividad Barcelona»). Usad la misma dirección, teléfono y web que en la página.
3. **Reseñas:** pedid a los primeros clientes que dejen una reseña en Google.
4. **Directorios y colegios profesionales:** enlaces desde el colegio de ingenieros, directorios de empresas y LinkedIn.
5. **Contenido:** con el tiempo, publicar casos reales o artículos («¿Qué necesito para abrir un bar en Barcelona?») atrae búsquedas muy concretas.

---

© PEB · Projectes d'Enginyeria de Barcelona. Todos los derechos reservados.
