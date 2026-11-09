// Páginas de servicio en castellano. No se indican precios ni plazos: dependen de cada local.
export default {
  common: {
    breadcrumb: { label: 'Ruta de navegación', home: 'Inicio', services: 'Servicios' },
    eyebrow: 'Ingeniería · Barcelona',
    cta: 'Contacta con nosotros',
    city: 'Barcelona y provincia',
    labels: {
      when: 'Cuándo hace falta',
      includes: 'El servicio',
      norms: 'Normativa',
      businesses: 'Sectores',
      faq: 'Dudas habituales',
      others: 'Más servicios',
    },
    normsTitle: 'Normativa aplicable',
    businessesTitle: 'Tipos de negocio con los que trabajamos',
    businessTypes: {
      comercios: 'Comercios',
      restauracion: 'Restauración',
      oficinas: 'Oficinas',
      talleres: 'Talleres',
      almacenes: 'Almacenes',
    },
    why: {
      eyebrow: 'Nuestra forma de trabajar',
      title: 'Por qué PEB',
      intro:
        'Somos ingenieros y llevamos tu proyecto de principio a fin: desde la primera visita hasta que tienes todos los papeles en regla.',
      items: [
        {
          id: 'trato',
          title: 'Trato directo con el ingeniero',
          text: 'Hablas siempre con el ingeniero que redacta y firma tu proyecto, sin intermediarios.',
        },
        {
          id: 'presupuesto',
          title: 'Presupuesto cerrado y sin compromiso',
          text: 'Antes de empezar sabes exactamente qué incluye el trabajo y cuánto cuesta.',
        },
        {
          id: 'papeleo',
          title: 'Nos encargamos del papeleo',
          text: 'Preparamos y presentamos la documentación ante el ayuntamiento y hacemos el seguimiento.',
        },
        {
          id: 'local',
          title: 'Conocemos la normativa local',
          text: 'Trabajamos con la normativa y los trámites de Barcelona y su área metropolitana.',
        },
      ],
    },
    faqTitle: 'Preguntas frecuentes',
    othersTitle: 'Otros servicios',
    othersMore: 'Ver servicio',
  },

  pages: {
    'licencia-actividad': {
      name: 'Licencia de actividad',
      title: 'Licencia de actividad en Barcelona | PEB Enginyeria',
      description:
        'Tramitamos tu licencia de actividad en Barcelona: estudio del local, proyecto técnico y gestión con el ayuntamiento hasta la apertura. Contacta con nosotros.',
      h1: 'Licencia de actividad en Barcelona',
      intro: [
        'Si vas a abrir un negocio, cambiar de actividad o reformar tu local, el ayuntamiento necesita comprobar que el local es apto para lo que vas a hacer. Según la actividad, el trámite será una licencia, una comunicación previa o una declaración responsable.',
        'En PEB estudiamos tu caso, redactamos el proyecto técnico y lo tramitamos por ti, para que abras con todo en regla y sin sorpresas.',
      ],
      short: 'Estudio del local, proyecto de actividad y tramitación con el ayuntamiento hasta que puedas abrir.',
      when: {
        title: '¿Cuándo necesitas una licencia de actividad?',
        intro:
          'Cualquier negocio que se desarrolle en un local necesita que el ayuntamiento lo autorice o tenga constancia de él. Estos son los casos más habituales:',
        items: [
          {
            title: 'Vas a abrir un negocio',
            text: 'Una tienda, un bar, una oficina o un taller: antes de empezar, el ayuntamiento tiene que conocer la actividad y comprobar que el local cumple la normativa.',
          },
          {
            title: 'Cambias de actividad en el mismo local',
            text: 'Si el local tenía permiso para otro uso, por ejemplo una tienda que pasa a ser una cafetería, hace falta un nuevo trámite.',
          },
          {
            title: 'Reformas o amplías el local',
            text: 'Las obras que cambian la distribución, las instalaciones o la superficie pueden obligar a actualizar el permiso de la actividad.',
          },
          {
            title: 'Traspasas o compras un negocio en marcha',
            text: 'Conviene comprobar que la licencia anterior sigue siendo válida para lo que vas a hacer y comunicar el cambio de titular.',
          },
          {
            title: 'Te lo pide el ayuntamiento',
            text: 'Tras una inspección o un requerimiento, te pueden pedir que regularices la actividad o que corrijas deficiencias.',
          },
        ],
      },
      includes: {
        title: 'Qué incluye',
        intro: 'Nos ocupamos de todo el proceso, desde la primera visita al local hasta que tienes el título para abrir.',
        items: [
          {
            icon: 'ScanSearch',
            title: 'Estudio previo del local',
            text: 'Analizamos el local y la actividad para saber qué régimen corresponde y qué adaptaciones hacen falta. Así lo sabes antes de firmar un alquiler o empezar obras.',
          },
          {
            icon: 'FileText',
            title: 'Proyecto de actividad',
            text: 'Redactamos el proyecto técnico con la descripción de la actividad, las instalaciones, la protección contra incendios, la evacuación y la accesibilidad, con los cálculos y planos necesarios.',
          },
          {
            icon: 'Gauge',
            title: 'Revisión de las instalaciones',
            text: 'Revisamos la electricidad, la climatización y la ventilación del local y te decimos qué hay que adaptar o legalizar para que la actividad cumpla.',
          },
          {
            icon: 'Landmark',
            title: 'Tramitación ante el ayuntamiento',
            text: 'Presentamos la documentación y hacemos el seguimiento del expediente, incluidas las subsanaciones o aclaraciones que pida el ayuntamiento.',
          },
          {
            icon: 'BadgeCheck',
            title: 'Certificado técnico final',
            text: 'Cuando el local está listo, comprobamos que se ajusta al proyecto y a la normativa y emitimos el certificado técnico que se presenta en el ayuntamiento.',
          },
        ],
      },
      norms: {
        intro: 'El trámite y los requisitos dependen de la actividad, de su tamaño y del municipio. Estas son las normas con las que trabajamos más a menudo:',
        items: [
          {
            code: 'Ordenanzas',
            name: 'Normativa municipal de actividades',
            text: 'Cada ayuntamiento regula sus trámites y requisitos, por eso un mismo negocio puede tramitarse de forma distinta según el municipio.',
          },
          {
            code: 'Ley 18/2020',
            name: 'Ley de facilitación de la actividad económica (Cataluña)',
            text: 'Marca cuándo basta con una declaración responsable o una comunicación previa y cuándo hace falta licencia.',
          },
          {
            code: 'Ley 11/2009',
            name: 'Ley de espectáculos públicos y actividades recreativas (Cataluña)',
            text: 'Se aplica a bares musicales, discotecas y otros locales de ocio, con requisitos propios.',
          },
          {
            code: 'CTE',
            name: 'Código Técnico de la Edificación',
            text: 'Fija las condiciones de seguridad en caso de incendio (DB-SI) y de seguridad de utilización y accesibilidad (DB-SUA) que debe cumplir el local.',
          },
        ],
      },
      businesses: {
        intro: 'Tramitamos la actividad de todo tipo de locales. Cada uno tiene sus particularidades:',
        items: {
          comercios: 'Tiendas y locales de venta al público, de barrio o de mayor superficie.',
          restauracion: 'Bares, cafeterías y restaurantes, con especial atención a la cocina, la extracción de humos y el aforo.',
          oficinas: 'Despachos, consultas y espacios de trabajo, abiertos o no al público.',
          talleres: 'Talleres de reparación o de fabricación, con sus instalaciones y riesgos propios.',
          almacenes: 'Naves y almacenes, donde pesan mucho lo que se guarda y la evacuación.',
        },
      },
      faq: [
        {
          q: '¿Qué diferencia hay entre licencia, comunicación previa y declaración responsable?',
          a: 'Son formas distintas de tramitar la actividad según su riesgo y su tamaño. Con una declaración responsable o una comunicación previa, en general puedes empezar en cuanto la presentas con toda la documentación. La licencia se reserva a las actividades de más riesgo y hay que esperar a que el ayuntamiento la conceda.',
        },
        {
          q: '¿Cuánto tarda el trámite?',
          a: 'Depende del régimen, del ayuntamiento y de si el local necesita obras. Tras el estudio previo te damos una previsión realista para tu caso.',
        },
        {
          q: '¿Cuánto cuesta una licencia de actividad?',
          a: 'Depende de la actividad, de la superficie y del trabajo técnico necesario. Después de visitar el local te enviamos un presupuesto cerrado y sin compromiso, ajustado a tu local. A los honorarios hay que sumar las tasas municipales, que fija cada ayuntamiento.',
        },
        {
          q: 'Si el local ya tenía licencia, ¿tengo que tramitar una nueva?',
          a: 'Si mantienes la misma actividad y no haces obras ni cambios en las instalaciones, normalmente basta con comunicar el cambio de titular. Si cambia la actividad o el local, hará falta un nuevo trámite. Lo comprobamos en el estudio previo.',
        },
        {
          q: '¿Qué pasa si abro sin el permiso de actividad?',
          a: 'El ayuntamiento puede imponer sanciones y ordenar el cierre del local hasta que la actividad se regularice. Por eso conviene empezar el trámite antes de abrir.',
        },
        {
          q: '¿Trabajáis fuera de la ciudad de Barcelona?',
          a: 'Sí, en toda la provincia de Barcelona. Cada ayuntamiento tiene su propia ordenanza y adaptamos la documentación a lo que pide cada uno.',
        },
      ],
    },

    'baja-tension': {
      name: 'Proyectos eléctricos de baja tensión',
      title: 'Proyectos de baja tensión en Barcelona | PEB Enginyeria',
      description:
        'Proyectos y legalización de instalaciones eléctricas de baja tensión en Barcelona según el REBT, para locales y naves. Contacta con nosotros.',
      h1: 'Proyectos eléctricos de baja tensión en Barcelona',
      intro: [
        'La instalación eléctrica de un local, una oficina o una nave tiene que cumplir el Reglamento Electrotécnico para Baja Tensión (REBT) y estar legalizada para poder contratar el suministro, ampliar la potencia o abrir al público.',
        'En PEB redactamos la documentación técnica que necesitas, calculamos la instalación y coordinamos la legalización con tu instalador, para que todo quede en regla.',
      ],
      short: 'Cálculo, proyecto y legalización de instalaciones eléctricas según el REBT.',
      when: {
        title: '¿Cuándo necesitas un proyecto de baja tensión?',
        intro:
          'No siempre hace falta un proyecto completo: según el tipo de local y la potencia, el REBT pide un proyecto firmado por un técnico o basta con una memoria técnica de diseño. Estos son los casos más habituales:',
        items: [
          {
            title: 'Abres o reformas un local',
            text: 'La instalación eléctrica es una de las cosas que se revisan para la licencia de actividad, y una reforma suele obligar a adaptarla.',
          },
          {
            title: 'Necesitas más potencia',
            text: 'Si añades maquinaria, una cocina eléctrica o climatización, puede que tengas que ampliar la potencia y actualizar la documentación de la instalación.',
          },
          {
            title: 'La instalación es antigua o no está legalizada',
            text: 'Si no tienes el certificado de la instalación o no se corresponde con lo que hay, hay que regularizarla.',
          },
          {
            title: 'Instalas puntos de recarga o placas solares',
            text: 'Los cargadores de vehículo eléctrico y el autoconsumo fotovoltaico se conectan a la instalación de baja tensión y también deben cumplir el REBT.',
          },
          {
            title: 'Te toca una inspección',
            text: 'Algunas instalaciones, como las de los locales de pública concurrencia, pasan inspecciones periódicas, y las deficiencias que se detecten hay que corregirlas.',
          },
        ],
      },
      includes: {
        title: 'Qué incluye',
        intro: 'Te acompañamos desde el cálculo de la instalación hasta que queda legalizada.',
        items: [
          {
            icon: 'Gauge',
            title: 'Estudio de necesidades y potencia',
            text: 'Calculamos la potencia que necesita tu actividad según la maquinaria, el alumbrado y la climatización, para contratar lo justo y no quedarte corto.',
          },
          {
            icon: 'FileText',
            title: 'Proyecto o memoria técnica de diseño',
            text: 'Redactamos la documentación que exige el REBT en tu caso, con esquemas unifilares, planos y cálculos.',
          },
          {
            icon: 'CircuitBoard',
            title: 'Cuadros, líneas y protecciones',
            text: 'Dimensionamos el cuadro general, las líneas y las protecciones para que la instalación sea segura y no salten los automáticos sin motivo.',
          },
          {
            icon: 'Lightbulb',
            title: 'Alumbrado y alumbrado de emergencia',
            text: 'Diseñamos el alumbrado del local y el de emergencia y señalización que exige la normativa en los espacios abiertos al público.',
          },
          {
            icon: 'PlugZap',
            title: 'Puntos de recarga y autoconsumo',
            text: 'Integramos en la instalación los puntos de recarga de vehículo eléctrico y la conexión de las placas solares de autoconsumo.',
          },
          {
            icon: 'BadgeCheck',
            title: 'Legalización y certificados',
            text: 'Coordinamos con la empresa instaladora el certificado de instalación y su registro ante la Generalitat y, cuando hay proyecto, emitimos el certificado de dirección de obra.',
          },
        ],
      },
      norms: {
        intro: 'La instalación eléctrica se rige por el reglamento estatal de baja tensión y sus instrucciones técnicas:',
        items: [
          {
            code: 'REBT',
            name: 'Reglamento Electrotécnico para Baja Tensión',
            text: 'Real Decreto 842/2002 y sus instrucciones técnicas complementarias (ITC-BT), que fijan cómo se diseña, ejecuta, legaliza e inspecciona una instalación.',
          },
          {
            code: 'ITC-BT-04',
            name: 'Documentación y puesta en servicio',
            text: 'Indica cuándo hace falta un proyecto y cuándo basta con una memoria técnica de diseño.',
          },
          {
            code: 'ITC-BT-05',
            name: 'Verificaciones e inspecciones',
            text: 'Establece qué instalaciones deben pasar inspección inicial y periódica.',
          },
          {
            code: 'ITC-BT-28',
            name: 'Locales de pública concurrencia',
            text: 'Añade requisitos para comercios, restaurantes y otros locales con público, como el alumbrado de emergencia.',
          },
        ],
      },
      businesses: {
        intro: 'Proyectamos instalaciones eléctricas para todo tipo de locales:',
        items: {
          comercios: 'Tiendas y locales comerciales, con su alumbrado, escaparates y climatización.',
          restauracion: 'Bares y restaurantes, donde la cocina y la climatización aumentan mucho la potencia necesaria.',
          oficinas: 'Oficinas y despachos, con puestos de trabajo, equipos informáticos y climatización.',
          talleres: 'Talleres con maquinaria y motores que necesitan líneas y protecciones específicas.',
          almacenes: 'Naves y almacenes, con alumbrado de grandes superficies y maquinaria.',
        },
      },
      faq: [
        {
          q: '¿Qué es el boletín eléctrico?',
          a: 'Es el nombre popular del certificado de instalación eléctrica. Lo emite la empresa instaladora habilitada al terminar la instalación y se registra ante la Generalitat. Lo necesitas, por ejemplo, para contratar la luz o cambiar la potencia.',
        },
        {
          q: '¿Cuándo hace falta un proyecto y cuándo una memoria técnica?',
          a: 'Depende del tipo de instalación y de la potencia. El REBT exige un proyecto firmado por un técnico en los casos de más potencia o riesgo, como muchos locales de pública concurrencia; en el resto basta con una memoria técnica de diseño. Te decimos cuál es tu caso en la primera consulta.',
        },
        {
          q: '¿Puedo ampliar la potencia de mi local?',
          a: 'Normalmente sí, pero puede que haya que adaptar la instalación y actualizar el certificado. Calculamos la potencia que necesitas y te decimos qué cambios hacen falta.',
        },
        {
          q: '¿Cada cuánto hay que pasar la inspección?',
          a: 'Las instalaciones que la necesitan, como las de los locales de pública concurrencia, pasan una inspección periódica cada cinco años, que hace un organismo de control.',
        },
        {
          q: '¿Trabajáis con mi instalador?',
          a: 'Sí. Si ya tienes un instalador de confianza, redactamos la documentación técnica y coordinamos con él la ejecución y la legalización.',
        },
        {
          q: '¿Cuánto cuesta un proyecto de baja tensión?',
          a: 'Depende de la potencia, de la superficie y de si hace falta proyecto o memoria técnica. Tras la visita te enviamos un presupuesto cerrado y sin compromiso, ajustado a tu local.',
        },
      ],
    },

    incendios: {
      name: 'Protección contra incendios',
      title: 'Protección contra incendios en Barcelona | PEB Enginyeria',
      description:
        'Proyectos de protección contra incendios en Barcelona según el CTE DB-SI y el RIPCI: evacuación, detección y extinción para tu local. Contacta con nosotros.',
      h1: 'Protección contra incendios en Barcelona',
      intro: [
        'Un local abierto al público, una oficina o una nave tienen que estar preparados para que, si hay un incendio, se detecte a tiempo, se pueda controlar y las personas salgan con seguridad. Es uno de los puntos que más se revisan al tramitar una licencia de actividad.',
        'En PEB estudiamos tu local, proyectamos las medidas de protección contra incendios que exige la normativa y te acompañamos hasta su puesta en marcha.',
      ],
      short: 'Evacuación, detección y extinción según el CTE DB-SI y el RIPCI.',
      when: {
        title: '¿Cuándo necesitas un proyecto de protección contra incendios?',
        intro:
          'La protección contra incendios no es solo poner extintores: también cuenta cómo está distribuido el local, por dónde se sale y qué instalaciones hacen falta. La necesitas sobre todo en estos casos:',
        items: [
          {
            title: 'Abres un local o pides la licencia de actividad',
            text: 'El proyecto de actividad tiene que justificar que el local cumple la normativa de seguridad en caso de incendio.',
          },
          {
            title: 'Reformas, amplías o cambias el uso',
            text: 'Si cambian la distribución, la superficie o el número de personas, también pueden cambiar las salidas y las instalaciones que se exigen.',
          },
          {
            title: 'Tienes una inspección o un requerimiento',
            text: 'Tras una inspección del ayuntamiento o de un organismo de control, puede que tengas que corregir deficiencias.',
          },
          {
            title: 'Tienes un taller, una nave o un almacén',
            text: 'En los establecimientos industriales se aplica un reglamento específico que tiene en cuenta lo que se almacena y cómo puede arder.',
          },
          {
            title: 'Instalas o renuevas equipos',
            text: 'La detección, la alarma, los extintores o las bocas de incendio deben cumplir el RIPCI y montarlos empresas habilitadas.',
          },
        ],
      },
      includes: {
        title: 'Qué incluye',
        intro: 'Estudiamos el local en conjunto y definimos todas las medidas que necesita.',
        items: [
          {
            icon: 'DoorOpen',
            title: 'Evacuación y ocupación',
            text: 'Calculamos cuántas personas puede haber en el local y comprobamos las salidas, los recorridos de evacuación y el ancho de puertas y pasillos.',
          },
          {
            icon: 'Layers',
            title: 'Sectorización y resistencia al fuego',
            text: 'Definimos los sectores de incendio y las condiciones de paredes, techos y puertas para que el fuego no se propague.',
          },
          {
            icon: 'BellRing',
            title: 'Detección y alarma',
            text: 'Proyectamos los detectores, los pulsadores y los sistemas de alarma cuando la normativa los exige.',
          },
          {
            icon: 'FireExtinguisher',
            title: 'Extinción',
            text: 'Situamos los extintores y, si hacen falta, las bocas de incendio equipadas u otros sistemas de extinción.',
          },
          {
            icon: 'Lightbulb',
            title: 'Señalización y alumbrado de emergencia',
            text: 'Definimos la señalización de salidas y equipos y el alumbrado de emergencia, para poder evacuar aunque falte la luz.',
          },
          {
            icon: 'BadgeCheck',
            title: 'Puesta en servicio y mantenimiento',
            text: 'Coordinamos la puesta en servicio con la empresa instaladora y te explicamos las revisiones periódicas que exige el RIPCI.',
          },
        ],
      },
      norms: {
        intro: 'La normativa que se aplica depende sobre todo de si el establecimiento es industrial o no:',
        items: [
          {
            code: 'CTE DB-SI',
            name: 'Código Técnico de la Edificación, Seguridad en caso de incendio',
            text: 'Fija la evacuación, la sectorización y los equipos de protección de comercios, restaurantes, oficinas y demás locales no industriales.',
          },
          {
            code: 'RIPCI',
            name: 'Reglamento de instalaciones de protección contra incendios',
            text: 'Real Decreto 513/2017. Regula cómo se diseñan, instalan y mantienen los equipos: extintores, detección, alarma, bocas de incendio y otros sistemas.',
          },
          {
            code: 'RSCIEI',
            name: 'Reglamento de seguridad contra incendios en los establecimientos industriales',
            text: 'Real Decreto 2267/2004. Se aplica a talleres, naves y almacenes industriales en lugar del DB-SI.',
          },
        ],
      },
      businesses: {
        intro: 'Cada tipo de local tiene sus propios riesgos:',
        items: {
          comercios: 'Tiendas con público, donde la ocupación y las salidas son clave.',
          restauracion: 'Bares y restaurantes, con cocina, aforo y, a menudo, sótanos o altillos.',
          oficinas: 'Oficinas y despachos, con sus recorridos de evacuación y su señalización.',
          talleres: 'Talleres con materiales y maquinaria que aumentan el riesgo de incendio.',
          almacenes: 'Almacenes y naves, donde lo que se guarda marca las medidas necesarias.',
        },
      },
      faq: [
        {
          q: '¿Qué normativa se aplica a mi local?',
          a: 'Si es un comercio, un restaurante, una oficina u otro local no industrial, el CTE DB-SI. Si es un taller, una nave o un almacén industrial, el reglamento de establecimientos industriales (RSCIEI). En los dos casos, los equipos deben cumplir el RIPCI.',
        },
        {
          q: '¿Cuántos extintores necesito?',
          a: 'Depende de la superficie, de cómo está distribuido el local y de si hay zonas de riesgo especial, como una cocina o un cuarto de instalaciones. Lo calculamos en el proyecto.',
        },
        {
          q: '¿Quién puede instalar y revisar los equipos?',
          a: 'Solo empresas instaladoras y mantenedoras habilitadas según el RIPCI. Nosotros proyectamos la instalación y coordinamos con la empresa que elijas.',
        },
        {
          q: '¿Cada cuánto hay que revisar los equipos?',
          a: 'El RIPCI fija revisiones periódicas: algunas las puede hacer el propio titular y otras debe hacerlas una empresa mantenedora habilitada. Te explicamos cuáles corresponden a tu instalación.',
        },
        {
          q: '¿Necesito alumbrado de emergencia?',
          a: 'En la mayoría de locales abiertos al público, sí, sobre todo en los recorridos de evacuación. El proyecto indica dónde tiene que ir.',
        },
        {
          q: '¿Cuánto cuesta un proyecto de protección contra incendios?',
          a: 'Depende de la superficie, de la actividad y de las instalaciones que hagan falta. Tras la visita te enviamos un presupuesto cerrado y sin compromiso, ajustado a tu local.',
        },
      ],
    },

    climatizacion: {
      name: 'Climatización y ventilación',
      title: 'Climatización y ventilación en Barcelona | PEB Enginyeria',
      description:
        'Proyectos de climatización y ventilación en Barcelona según el RITE y el CTE DB-HS: aire acondicionado, aerotermia y extracción de humos. Contacta con nosotros.',
      h1: 'Climatización y ventilación en Barcelona',
      intro: [
        'Un local o una oficina con buena climatización y buena ventilación es más cómodo, más sano y gasta menos energía. Estas instalaciones tienen que cumplir el Reglamento de Instalaciones Térmicas en los Edificios (RITE) y, a partir de cierta potencia, necesitan un proyecto.',
        'En PEB calculamos lo que necesita tu espacio, diseñamos la instalación y nos ocupamos de la documentación para legalizarla.',
      ],
      short: 'Aire acondicionado, calefacción, aerotermia y ventilación según el RITE.',
      when: {
        title: '¿Cuándo necesitas un proyecto de climatización o ventilación?',
        intro: 'Te recomendamos contar con un ingeniero sobre todo en estos casos:',
        items: [
          {
            title: 'Abres un local o pides la licencia de actividad',
            text: 'La climatización y la ventilación forman parte de las instalaciones que se revisan para poder abrir.',
          },
          {
            title: 'Instalas o cambias el aire acondicionado o la calefacción',
            text: 'Según la potencia, el RITE pide un proyecto firmado por un técnico o una memoria técnica.',
          },
          {
            title: 'Tienes una cocina profesional',
            text: 'Bares y restaurantes necesitan una extracción de humos bien dimensionada y que cumpla lo que pida la normativa municipal.',
          },
          {
            title: 'El ambiente está cargado o hay condensaciones',
            text: 'Una ventilación insuficiente se nota en el confort y en la calidad del aire, y se puede corregir con un buen diseño.',
          },
          {
            title: 'Quieres gastar menos energía',
            text: 'Pasar a aerotermia o a equipos más eficientes reduce el consumo y las emisiones.',
          },
        ],
      },
      includes: {
        title: 'Qué incluye',
        intro: 'Diseñamos la instalación completa, adaptada al uso de cada espacio.',
        items: [
          {
            icon: 'Thermometer',
            title: 'Cálculo de cargas térmicas',
            text: 'Calculamos el calor y el frío que necesita cada espacio según su orientación, su ocupación y su uso, para elegir equipos de la potencia justa.',
          },
          {
            icon: 'AirVent',
            title: 'Climatización y calefacción',
            text: 'Diseñamos sistemas de aire acondicionado, calefacción, suelo radiante y aerotermia, y elegimos los equipos más adecuados para tu caso.',
          },
          {
            icon: 'Wind',
            title: 'Ventilación y calidad del aire',
            text: 'Calculamos la renovación de aire que exige la normativa según la ocupación y el uso del local, con recuperación de calor cuando corresponde.',
          },
          {
            icon: 'CookingPot',
            title: 'Extracción de humos de cocina',
            text: 'Proyectamos las campanas y los conductos de extracción de las cocinas de bares y restaurantes.',
          },
          {
            icon: 'Fan',
            title: 'Distribución del aire',
            text: 'Diseñamos los conductos, las rejillas y los difusores para repartir el aire sin corrientes molestas ni ruidos.',
          },
          {
            icon: 'BadgeCheck',
            title: 'Legalización y mantenimiento',
            text: 'Preparamos la documentación para registrar la instalación y te explicamos el mantenimiento y las inspecciones que exige el RITE.',
          },
        ],
      },
      norms: {
        intro: 'Las instalaciones térmicas y la ventilación se rigen por:',
        items: [
          {
            code: 'RITE',
            name: 'Reglamento de Instalaciones Térmicas en los Edificios',
            text: 'Real Decreto 1027/2007. Regula el diseño, la eficiencia, la legalización y el mantenimiento de la climatización y la calefacción, y la calidad del aire interior de los edificios no residenciales.',
          },
          {
            code: 'CTE DB-HS',
            name: 'Código Técnico de la Edificación, Salubridad',
            text: 'Su sección HS 3 fija la ventilación de viviendas, trasteros, almacenes de residuos y aparcamientos.',
          },
        ],
      },
      businesses: {
        intro: 'Climatizamos y ventilamos todo tipo de espacios:',
        items: {
          comercios: 'Tiendas donde cuentan el confort de los clientes y el consumo.',
          restauracion: 'Bares y restaurantes, con cocina, extracción de humos y mucha ocupación.',
          oficinas: 'Oficinas donde la temperatura y la calidad del aire influyen en el trabajo.',
          talleres: 'Talleres con calor de la maquinaria, humos o polvo que hay que evacuar.',
          almacenes: 'Almacenes y naves de gran volumen, donde la ventilación es lo principal.',
        },
      },
      faq: [
        {
          q: '¿Necesito un proyecto para instalar aire acondicionado en mi local?',
          a: 'Depende de la potencia térmica. Por encima de 70 kW, el RITE exige un proyecto firmado por un técnico; entre 5 y 70 kW basta con una memoria técnica. Te decimos qué te corresponde.',
        },
        {
          q: '¿Qué es la aerotermia?',
          a: 'Es una bomba de calor que aprovecha la energía del aire exterior para dar calefacción, refrigeración y agua caliente con un consumo eléctrico bajo. Es una buena alternativa a las calderas de gas o de gasóleo.',
        },
        {
          q: '¿Cuánta ventilación necesita mi local?',
          a: 'En los locales no residenciales, el RITE fija el aire exterior que hay que aportar según la ocupación y el uso. Lo calculamos para que cumplas y para que el ambiente sea saludable.',
        },
        {
          q: '¿Dónde puedo poner la unidad exterior?',
          a: 'Depende de las ordenanzas municipales y, si el local está en un edificio con comunidad, de lo que permita la comunidad de propietarios. Lo revisamos antes de proponerte una solución.',
        },
        {
          q: '¿La instalación necesita mantenimiento?',
          a: 'Sí. El RITE obliga a hacer un mantenimiento periódico y, según la potencia, debe hacerlo una empresa mantenedora habilitada. Te explicamos qué corresponde a tu instalación.',
        },
        {
          q: '¿Cuánto cuesta un proyecto de climatización?',
          a: 'Depende de la superficie, del uso y del tipo de sistema. Tras la visita te enviamos un presupuesto cerrado y sin compromiso, ajustado a tu local.',
        },
      ],
    },
  },
}
