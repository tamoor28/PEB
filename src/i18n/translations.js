// Todos los textos de la web en castellano (es) y catalán (ca).
// Para modificar un texto, cámbialo en los dos idiomas.
import { site } from '../data/site.js'

const regulations = {
  es: [
    { code: 'CTE', name: 'Código Técnico de la Edificación' },
    { code: 'RITE', name: 'Reglamento de Instalaciones Térmicas en los Edificios' },
    { code: 'REBT', name: 'Reglamento Electrotécnico para Baja Tensión' },
    { code: 'RIPCI', name: 'Reglamento de Instalaciones de Protección Contra Incendios' },
  ],
  ca: [
    { code: 'CTE', name: "Codi Tècnic de l'Edificació" },
    { code: 'RITE', name: "Reglament d'Instal·lacions Tèrmiques en els Edificis" },
    { code: 'REBT', name: 'Reglament Electrotècnic per a Baixa Tensió' },
    { code: 'RIPCI', name: "Reglament d'Instal·lacions de Protecció Contra Incendis" },
  ],
}

export const translations = {
  es: {
    meta: {
      title: "PEB · Projectes d'Enginyeria de Barcelona | Legalización de instalaciones y licencias de actividad",
      description:
        'Ingeniería en Barcelona: legalización de instalaciones, licencias de actividad y apertura, proyectos de baja tensión, climatización, ventilación, PCI, dirección de obra y certificación energética.',
    },
    skip: 'Saltar al contenido',
    language: {
      label: 'Idioma de la web',
      es: 'Castellano',
      ca: 'Català',
    },
    nav: {
      legalizacion: 'Legalización',
      proyectos: 'Proyectos',
      direccion: 'Dirección',
      energia: 'Energía',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
      cta: 'Pide presupuesto',
      open: 'Abrir menú',
      close: 'Cerrar menú',
      home: 'PEB, ir al inicio',
      label: 'Navegación principal',
    },
    hero: {
      eyebrow: 'Ingeniería · Barcelona',
      titleStart: 'Proyectos de ingeniería y ',
      titleHighlight: 'legalización de instalaciones',
      titleEnd: ' en Barcelona',
      subtitle:
        'Somos PEB, un equipo de ingenieros mecánicos que redacta proyectos técnicos, tramita licencias de actividad y legaliza instalaciones de baja tensión, climatización, ventilación, fontanería y protección contra incendios. Nos ocupamos del papeleo para que tú te centres en tu negocio.',
      ctaPrimary: 'Solicita presupuesto',
      ctaSecondary: 'Ver servicios',
      highlights: [
        'Trato directo con ingenieros',
        'Tramitación ante ayuntamientos y administración',
        'Presupuesto cerrado y sin compromiso',
      ],
      regulationsLabel: 'Proyectos conforme a',
    },
    overview: {
      eyebrow: 'Servicios',
      title: 'Un único equipo para todo el ciclo de tu proyecto',
      intro:
        'Desde el primer trámite hasta la puesta en marcha: proyectamos, legalizamos, dirigimos la obra y optimizamos el consumo energético de tus instalaciones.',
      count: (n) => `${n} servicios`,
      more: 'Ver detalle',
    },
    categories: [
      {
        id: 'legalizacion',
        title: 'Legalización',
        short: 'Baja tensión, licencias de actividad y obra menor. También aperturas, declaraciones responsables e instalaciones.',
        intro:
          'Te acompañamos en todo el proceso administrativo para que tu actividad, local o instalación cumpla la normativa y pueda funcionar con todas las garantías.',
        items: [
          {
            id: 'baja-tension',
            featured: true,
            title: 'Baja tensión',
            text: 'Legalizamos instalaciones eléctricas de baja tensión: memoria técnica de diseño o proyecto según el REBT, certificado de instalación y registro ante la Generalitat.',
          },
          {
            id: 'actividad',
            featured: true,
            title: 'Licencia de actividad',
            text: 'Redactamos el proyecto de actividad y lo tramitamos según el régimen (licencia, comunicación o declaración) que corresponda a tu negocio.',
          },
          {
            id: 'obra-menor',
            featured: true,
            title: 'Obra menor',
            text: 'Tramitamos la comunicación o licencia de obra menor ante el ayuntamiento para reformas y adecuaciones de locales y viviendas.',
          },
          {
            id: 'instalaciones',
            title: 'Legalización de instalaciones',
            text: 'Regularizamos instalaciones térmicas y de protección contra incendios: memoria o proyecto técnico, certificados y registro ante el organismo competente.',
          },
          {
            id: 'apertura',
            title: 'Licencia de apertura',
            text: 'Gestionamos la documentación necesaria para abrir tu local: comercios, restauración, oficinas, talleres, almacenes y mucho más.',
          },
          {
            id: 'declaracion',
            title: 'Declaración responsable',
            text: 'Elaboramos la declaración responsable y la documentación técnica que la acompaña para iniciar la actividad sin esperas innecesarias.',
          },
        ],
      },
      {
        id: 'proyectos',
        title: 'Proyectos básicos y de ejecución',
        short: 'Proyectos de fontanería, climatización, ventilación, electricidad, protección contra incendios y renovables.',
        intro:
          'Diseñamos y calculamos las instalaciones de tu edificio o local, desde el proyecto básico hasta el proyecto de ejecución listo para obra.',
        items: [
          {
            id: 'fontaneria',
            title: 'Fontanería y saneamiento',
            text: 'Redes de agua fría y ACS, evacuación de aguas pluviales y residuales, dimensionadas según el CTE DB-HS.',
          },
          {
            id: 'climatizacion',
            title: 'Climatización y calefacción',
            text: 'Sistemas de climatización, aerotermia, suelo radiante y calefacción conforme al RITE, optimizando confort y consumo.',
          },
          {
            id: 'ventilacion',
            title: 'Ventilación',
            text: 'Ventilación y renovación de aire en viviendas, locales y cocinas industriales, con extracción de humos y calidad del aire interior.',
          },
          {
            id: 'electricidad',
            title: 'Electricidad',
            text: 'Instalaciones eléctricas de baja tensión: cuadros, líneas, alumbrado y puntos de recarga de vehículo eléctrico según el REBT.',
          },
          {
            id: 'incendios',
            title: 'Protección contra incendios',
            text: 'Sectorización, evacuación, detección y extinción de acuerdo con el CTE DB-SI y el RIPCI.',
          },
          {
            id: 'renovables',
            title: 'Energías renovables',
            text: 'Instalaciones fotovoltaicas de autoconsumo, solar térmica y aerotermia para reducir costes y emisiones.',
          },
        ],
      },
      {
        id: 'direccion',
        title: 'Dirección y gestión',
        short: 'Dirección facultativa de obra, mediciones y presupuestos.',
        intro:
          'Velamos por que la obra se ejecute según el proyecto, en plazo y dentro del presupuesto previsto.',
        items: [
          {
            id: 'direccion-facultativa',
            title: 'Dirección facultativa de obra',
            text: 'Supervisamos la ejecución de las instalaciones, coordinamos a los industriales y emitimos los certificados de final de obra.',
          },
          {
            id: 'mediciones',
            title: 'Mediciones y presupuestos',
            text: 'Elaboramos mediciones detalladas y presupuestos fiables para comparar ofertas y controlar el coste de tu proyecto.',
          },
        ],
      },
      {
        id: 'gestion-energetica',
        title: 'Gestión energética',
        short: 'Eficiencia, sostenibilidad y certificación energética de edificios.',
        intro:
          'Te ayudamos a consumir menos, ahorrar en la factura y mejorar la calificación energética de tus edificios.',
        items: [
          {
            id: 'eficiencia',
            title: 'Proyecto de eficiencia energética',
            text: 'Analizamos consumos y proponemos mejoras en la envolvente, las instalaciones y la iluminación, con su retorno de la inversión.',
          },
          {
            id: 'sostenibilidad',
            title: 'Proyectos de sostenibilidad energética',
            text: 'Definimos estrategias de descarbonización e integración de renovables, y te apoyamos en la solicitud de ayudas y subvenciones.',
          },
          {
            id: 'certificacion',
            title: 'Certificación de eficiencia energética',
            text: 'Emitimos el certificado energético para la venta o el alquiler de viviendas y locales, con su registro en el ICAEN.',
          },
        ],
      },
    ],
    sectionCta: 'Solicitar presupuesto',
    featuredTag: 'Especialidad',
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un proceso claro, de principio a fin',
      intro:
        'Sabemos que los trámites pueden ser complejos. Por eso te guiamos paso a paso y te mantenemos informado en todo momento.',
      steps: [
        { title: 'Primera consulta', text: 'Nos explicas tu proyecto y analizamos qué trámites y documentación necesitas.' },
        { title: 'Visita y presupuesto', text: 'Visitamos el local o la instalación y te enviamos un presupuesto cerrado y sin compromiso.' },
        { title: 'Proyecto técnico', text: 'Redactamos el proyecto o la documentación técnica con los cálculos y planos necesarios.' },
        { title: 'Tramitación y seguimiento', text: 'Presentamos el expediente y hacemos el seguimiento hasta obtener la resolución.' },
      ],
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Ingeniería cercana, rigurosa y sin complicaciones',
      paragraphs: [
        "PEB · Projectes d'Enginyeria de Barcelona nace de la iniciativa de dos ingenieros mecánicos con un objetivo claro: que legalizar una instalación o abrir un negocio sea un proceso sencillo y transparente.",
        'Combinamos una sólida formación técnica con un trato directo y personal: hablas siempre con el ingeniero que firma tu proyecto.',
      ],
      values: [
        { id: 'rigor', title: 'Rigor técnico', text: 'Cálculos y documentación cuidados al detalle, conforme a la normativa vigente.' },
        { id: 'trato', title: 'Trato directo', text: 'Un único interlocutor durante todo el proceso, sin intermediarios.' },
        { id: 'transparencia', title: 'Transparencia', text: 'Presupuestos claros y plazos realistas desde el primer día.' },
        { id: 'local', title: 'Compromiso local', text: 'Conocemos la normativa y los trámites de Barcelona y su área metropolitana.' },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntanos tu proyecto',
      intro: 'Te respondemos con una primera valoración y un presupuesto sin compromiso.',
      info: {
        email: 'Correo electrónico',
        phone: 'Teléfono',
        area: 'Zona de trabajo',
        areaValue: 'Barcelona y provincia de Barcelona',
        hours: 'Horario',
        hoursValue: 'De lunes a viernes, de 9:00 a 18:00',
      },
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        phone: 'Teléfono (opcional)',
        service: 'Servicio',
        servicePlaceholder: 'Selecciona un servicio',
        other: 'Otro / no lo tengo claro',
        message: 'Mensaje',
        messagePlaceholder: 'Tipo de local o instalación, ubicación, plazos…',
        privacyStart: 'He leído y acepto la ',
        privacyLink: 'política de privacidad',
        submit: 'Enviar solicitud',
        hint: 'Al enviar se abrirá tu aplicación de correo con el mensaje preparado.',
        success: (email) => `Hemos abierto tu aplicación de correo. Si no se abre, escríbenos a ${email}.`,
        subject: (service) => `Solicitud de presupuesto · ${service}`,
        bodyLabels: { name: 'Nombre', email: 'Correo', phone: 'Teléfono', service: 'Servicio' },
      },
    },
    footer: {
      description:
        'Ingeniería de instalaciones, legalizaciones y licencias de actividad en Barcelona y su área metropolitana.',
      services: 'Servicios',
      company: 'Empresa',
      contact: 'Contacto',
      process: 'Cómo trabajamos',
      quote: 'Solicitar presupuesto',
      regulations: 'Normativa de referencia',
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho en Barcelona',
      backToTop: 'Volver arriba',
      legal: { aviso: 'Aviso legal', privacidad: 'Política de privacidad', cookies: 'Política de cookies' },
    },
    legal: {
      close: 'Cerrar',
      updated: 'Última actualización: octubre de 2026',
      aviso: {
        title: 'Aviso legal',
        body: [
          `En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que este sitio web es titularidad de ${site.holder}, con NIF ${site.nif} y domicilio en ${site.address}. Correo electrónico de contacto: ${site.email}.`,
          'Los contenidos de este sitio web tienen carácter informativo. Queda prohibida su reproducción total o parcial sin la autorización expresa del titular.',
          'El titular no se responsabiliza del uso que terceras personas hagan de la información publicada ni de los contenidos de los sitios web externos enlazados.',
        ],
      },
      privacidad: {
        title: 'Política de privacidad',
        body: [
          `Responsable del tratamiento: ${site.holder} (NIF ${site.nif}), ${site.address}. Contacto: ${site.email}.`,
          'Finalidad: atender las consultas y solicitudes de presupuesto que nos envíes y, en su caso, gestionar la relación profesional.',
          'Legitimación: tu consentimiento al contactar con nosotros y, si contratas nuestros servicios, la ejecución del contrato.',
          'Conservación: los datos se conservarán durante el tiempo necesario para atender tu solicitud y cumplir las obligaciones legales.',
          'Destinatarios: no se cederán datos a terceros, salvo obligación legal o cuando sea necesario para tramitar tu expediente ante la administración.',
          `Derechos: puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${site.email}, así como presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
        ],
      },
      cookies: {
        title: 'Política de cookies',
        body: [
          'Este sitio web no utiliza cookies propias ni de terceros con fines analíticos, publicitarios o de seguimiento.',
          'Únicamente se guarda en el almacenamiento local de tu navegador el idioma que has elegido (castellano o catalán) para mostrarte la web en ese idioma en tus próximas visitas. Puedes eliminarlo en cualquier momento desde la configuración del navegador.',
          'Si en el futuro se incorporan herramientas de analítica, se actualizará esta política y se solicitará tu consentimiento previo.',
        ],
      },
    },
    regulations: regulations.es,
  },

  ca: {
    meta: {
      title: "PEB · Projectes d'Enginyeria de Barcelona | Legalització d'instal·lacions i llicències d'activitat",
      description:
        "Enginyeria a Barcelona: legalització d'instal·lacions, llicències d'activitat i d'obertura, projectes de baixa tensió, climatització, ventilació, PCI, direcció d'obra i certificació energètica.",
    },
    skip: 'Salta al contingut',
    language: {
      label: 'Idioma del web',
      es: 'Castellano',
      ca: 'Català',
    },
    nav: {
      legalizacion: 'Legalització',
      proyectos: 'Projectes',
      direccion: 'Direcció',
      energia: 'Energia',
      nosotros: 'Qui som',
      contacto: 'Contacte',
      cta: 'Demana pressupost',
      open: 'Obre el menú',
      close: 'Tanca el menú',
      home: "PEB, ves a l'inici",
      label: 'Navegació principal',
    },
    hero: {
      eyebrow: 'Enginyeria · Barcelona',
      titleStart: "Projectes d'enginyeria i ",
      titleHighlight: "legalització d'instal·lacions",
      titleEnd: ' a Barcelona',
      subtitle:
        "Som PEB, un equip d'enginyers mecànics que redacta projectes tècnics, tramita llicències d'activitat i legalitza instal·lacions de baixa tensió, climatització, ventilació, lampisteria i protecció contra incendis. Ens encarreguem de la paperassa perquè tu et puguis centrar en el teu negoci.",
      ctaPrimary: 'Demana pressupost',
      ctaSecondary: 'Consulta els serveis',
      highlights: [
        'Tracte directe amb enginyers',
        "Tramitació davant d'ajuntaments i l'administració",
        'Pressupost tancat i sense compromís',
      ],
      regulationsLabel: "Projectes d'acord amb",
    },
    overview: {
      eyebrow: 'Serveis',
      title: 'Un únic equip per a tot el cicle del teu projecte',
      intro:
        "Des del primer tràmit fins a la posada en marxa: projectem, legalitzem, dirigim l'obra i optimitzem el consum energètic de les teves instal·lacions.",
      count: (n) => `${n} serveis`,
      more: 'Veure el detall',
    },
    categories: [
      {
        id: 'legalizacion',
        title: 'Legalització',
        short: "Baixa tensió, llicències d'activitat i obra menor. També obertures, declaracions responsables i instal·lacions.",
        intro:
          "T'acompanyem en tot el procés administratiu perquè la teva activitat, local o instal·lació compleixi la normativa i pugui funcionar amb totes les garanties.",
        items: [
          {
            id: 'baja-tension',
            featured: true,
            title: 'Baixa tensió',
            text: "Legalitzem instal·lacions elèctriques de baixa tensió: memòria tècnica de disseny o projecte segons el REBT, certificat d'instal·lació i registre davant la Generalitat.",
          },
          {
            id: 'actividad',
            featured: true,
            title: "Llicència d'activitat",
            text: "Redactem el projecte d'activitat i el tramitem segons el règim (llicència, comunicació o declaració) que correspongui al teu negoci.",
          },
          {
            id: 'obra-menor',
            featured: true,
            title: 'Obra menor',
            text: "Tramitem la comunicació o llicència d'obra menor davant l'ajuntament per a reformes i adequacions de locals i habitatges.",
          },
          {
            id: 'instalaciones',
            title: "Legalització d'instal·lacions",
            text: "Regularitzem instal·lacions tèrmiques i de protecció contra incendis: memòria o projecte tècnic, certificats i registre davant l'organisme competent.",
          },
          {
            id: 'apertura',
            title: "Llicència d'obertura",
            text: 'Gestionem la documentació necessària per obrir el teu local: comerços, restauració, oficines, tallers, magatzems i molt més.',
          },
          {
            id: 'declaracion',
            title: 'Declaració responsable',
            text: "Elaborem la declaració responsable i la documentació tècnica que l'acompanya per iniciar l'activitat sense esperes innecessàries.",
          },
        ],
      },
      {
        id: 'proyectos',
        title: "Projectes bàsics i d'execució",
        short: 'Projectes de lampisteria, climatització, ventilació, electricitat, protecció contra incendis i renovables.',
        intro:
          "Dissenyem i calculem les instal·lacions del teu edifici o local, des del projecte bàsic fins al projecte d'execució a punt per a l'obra.",
        items: [
          {
            id: 'fontaneria',
            title: 'Lampisteria i sanejament',
            text: "Xarxes d'aigua freda i ACS, evacuació d'aigües pluvials i residuals, dimensionades segons el CTE DB-HS.",
          },
          {
            id: 'climatizacion',
            title: 'Climatització i calefacció',
            text: "Sistemes de climatització, aerotèrmia, terra radiant i calefacció d'acord amb el RITE, optimitzant el confort i el consum.",
          },
          {
            id: 'ventilacion',
            title: 'Ventilació',
            text: "Ventilació i renovació d'aire en habitatges, locals i cuines industrials, amb extracció de fums i qualitat de l'aire interior.",
          },
          {
            id: 'electricidad',
            title: 'Electricitat',
            text: 'Instal·lacions elèctriques de baixa tensió: quadres, línies, enllumenat i punts de recàrrega de vehicle elèctric segons el REBT.',
          },
          {
            id: 'incendios',
            title: 'Protecció contra incendis',
            text: "Sectorització, evacuació, detecció i extinció d'acord amb el CTE DB-SI i el RIPCI.",
          },
          {
            id: 'renovables',
            title: 'Energies renovables',
            text: "Instal·lacions fotovoltaiques d'autoconsum, solar tèrmica i aerotèrmia per reduir costos i emissions.",
          },
        ],
      },
      {
        id: 'direccion',
        title: 'Direcció i gestió',
        short: "Direcció facultativa d'obra, amidaments i pressupostos.",
        intro: "Vetllem perquè l'obra s'executi segons el projecte, dins de termini i del pressupost previst.",
        items: [
          {
            id: 'direccion-facultativa',
            title: "Direcció facultativa d'obra",
            text: "Supervisem l'execució de les instal·lacions, coordinem els industrials i emetem els certificats de final d'obra.",
          },
          {
            id: 'mediciones',
            title: 'Amidaments i pressupostos',
            text: 'Elaborem amidaments detallats i pressupostos fiables per comparar ofertes i controlar el cost del teu projecte.',
          },
        ],
      },
      {
        id: 'gestion-energetica',
        title: 'Gestió energètica',
        short: "Eficiència, sostenibilitat i certificació energètica d'edificis.",
        intro:
          "T'ajudem a consumir menys, estalviar en la factura i millorar la qualificació energètica dels teus edificis.",
        items: [
          {
            id: 'eficiencia',
            title: "Projecte d'eficiència energètica",
            text: "Analitzem consums i proposem millores en l'envolupant, les instal·lacions i l'enllumenat, amb el seu retorn de la inversió.",
          },
          {
            id: 'sostenibilidad',
            title: 'Projectes de sostenibilitat energètica',
            text: "Definim estratègies de descarbonització i integració de renovables, i et donem suport en la sol·licitud d'ajuts i subvencions.",
          },
          {
            id: 'certificacion',
            title: "Certificació d'eficiència energètica",
            text: "Emetem el certificat energètic per a la venda o el lloguer d'habitatges i locals, amb el seu registre a l'ICAEN.",
          },
        ],
      },
    ],
    sectionCta: 'Sol·licita pressupost',
    featuredTag: 'Especialitat',
    process: {
      eyebrow: 'Com treballem',
      title: 'Un procés clar, de principi a fi',
      intro:
        'Sabem que els tràmits poden ser complexos. Per això et guiem pas a pas i et mantenim informat en tot moment.',
      steps: [
        { title: 'Primera consulta', text: "Ens expliques el teu projecte i analitzem quins tràmits i quina documentació necessites." },
        { title: 'Visita i pressupost', text: "Visitem el local o la instal·lació i t'enviem un pressupost tancat i sense compromís." },
        { title: 'Projecte tècnic', text: 'Redactem el projecte o la documentació tècnica amb els càlculs i plànols necessaris.' },
        { title: 'Tramitació i seguiment', text: "Presentem l'expedient i en fem el seguiment fins a obtenir-ne la resolució." },
      ],
    },
    about: {
      eyebrow: 'Qui som',
      title: 'Enginyeria propera, rigorosa i sense complicacions',
      paragraphs: [
        "PEB · Projectes d'Enginyeria de Barcelona neix de la iniciativa de dos enginyers mecànics amb un objectiu clar: que legalitzar una instal·lació o obrir un negoci sigui un procés senzill i transparent.",
        "Combinem una sòlida formació tècnica amb un tracte directe i personal: parles sempre amb l'enginyer que signa el teu projecte.",
      ],
      values: [
        { id: 'rigor', title: 'Rigor tècnic', text: "Càlculs i documentació cuidats al detall, d'acord amb la normativa vigent." },
        { id: 'trato', title: 'Tracte directe', text: 'Un únic interlocutor durant tot el procés, sense intermediaris.' },
        { id: 'transparencia', title: 'Transparència', text: 'Pressupostos clars i terminis realistes des del primer dia.' },
        { id: 'local', title: 'Compromís local', text: 'Coneixem la normativa i els tràmits de Barcelona i la seva àrea metropolitana.' },
      ],
    },
    contact: {
      eyebrow: 'Contacte',
      title: "Explica'ns el teu projecte",
      intro: 'Et responem amb una primera valoració i un pressupost sense compromís.',
      info: {
        email: 'Correu electrònic',
        phone: 'Telèfon',
        area: 'Zona de treball',
        areaValue: 'Barcelona i província de Barcelona',
        hours: 'Horari',
        hoursValue: 'De dilluns a divendres, de 9:00 a 18:00',
      },
      form: {
        name: 'Nom',
        email: 'Correu electrònic',
        phone: 'Telèfon (opcional)',
        service: 'Servei',
        servicePlaceholder: 'Selecciona un servei',
        other: 'Altres / no ho tinc clar',
        message: 'Missatge',
        messagePlaceholder: "Tipus de local o d'instal·lació, ubicació, terminis…",
        privacyStart: 'He llegit i accepto la ',
        privacyLink: 'política de privadesa',
        submit: 'Envia la sol·licitud',
        hint: "En enviar, s'obrirà la teva aplicació de correu amb el missatge preparat.",
        success: (email) => `Hem obert la teva aplicació de correu. Si no s'obre, escriu-nos a ${email}.`,
        subject: (service) => `Sol·licitud de pressupost · ${service}`,
        bodyLabels: { name: 'Nom', email: 'Correu', phone: 'Telèfon', service: 'Servei' },
      },
    },
    footer: {
      description:
        "Enginyeria d'instal·lacions, legalitzacions i llicències d'activitat a Barcelona i la seva àrea metropolitana.",
      services: 'Serveis',
      company: 'Empresa',
      contact: 'Contacte',
      process: 'Com treballem',
      quote: 'Sol·licita pressupost',
      regulations: 'Normativa de referència',
      rights: 'Tots els drets reservats.',
      madeIn: 'Fet a Barcelona',
      backToTop: 'Torna a dalt',
      legal: { aviso: 'Avís legal', privacidad: 'Política de privadesa', cookies: 'Política de galetes' },
    },
    legal: {
      close: 'Tanca',
      updated: "Darrera actualització: octubre de 2026",
      aviso: {
        title: 'Avís legal',
        body: [
          `En compliment de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa que aquest lloc web és titularitat de ${site.holder}, amb NIF ${site.nif} i domicili a ${site.address}. Correu electrònic de contacte: ${site.email}.`,
          "Els continguts d'aquest lloc web tenen caràcter informatiu. Se'n prohibeix la reproducció total o parcial sense l'autorització expressa del titular.",
          "El titular no es responsabilitza de l'ús que terceres persones facin de la informació publicada ni dels continguts dels llocs web externs enllaçats.",
        ],
      },
      privacidad: {
        title: 'Política de privadesa',
        body: [
          `Responsable del tractament: ${site.holder} (NIF ${site.nif}), ${site.address}. Contacte: ${site.email}.`,
          'Finalitat: atendre les consultes i sol·licituds de pressupost que ens enviïs i, si escau, gestionar la relació professional.',
          "Legitimació: el teu consentiment en contactar amb nosaltres i, si contractes els nostres serveis, l'execució del contracte.",
          'Conservació: les dades es conservaran durant el temps necessari per atendre la teva sol·licitud i complir les obligacions legals.',
          "Destinataris: no se cediran dades a tercers, excepte per obligació legal o quan sigui necessari per tramitar el teu expedient davant l'administració.",
          `Drets: pots exercir els drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a ${site.email}, així com presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).`,
        ],
      },
      cookies: {
        title: 'Política de galetes',
        body: [
          'Aquest lloc web no utilitza galetes pròpies ni de tercers amb finalitats analítiques, publicitàries o de seguiment.',
          "Només es desa a l'emmagatzematge local del teu navegador l'idioma que has triat (castellà o català) per mostrar-te el web en aquest idioma en les properes visites. El pots eliminar en qualsevol moment des de la configuració del navegador.",
          "Si en el futur s'incorporen eines d'analítica, s'actualitzarà aquesta política i se sol·licitarà el teu consentiment previ.",
        ],
      },
    },
    regulations: regulations.ca,
  },
}

export const SUPPORTED_LANGUAGES = Object.keys(translations)
