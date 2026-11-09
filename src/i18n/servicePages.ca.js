// Pàgines de servei en català. Els marcadors entre claudàtors ([PRECIO DESDE], [PLAZO HABITUAL]) s'han de
// substituir per la dada real abans de publicar.
export default {
  common: {
    breadcrumb: { label: 'Ruta de navegació', home: 'Inici', services: 'Serveis' },
    eyebrow: 'Enginyeria · Barcelona',
    cta: 'Demana pressupost sense compromís',
    city: 'Barcelona i província',
    labels: {
      when: 'Quan cal',
      includes: 'El servei',
      norms: 'Normativa',
      businesses: 'Sectors',
      faq: 'Dubtes habituals',
      others: 'Més serveis',
    },
    normsTitle: 'Normativa aplicable',
    businessesTitle: 'Tipus de negoci amb què treballem',
    businessTypes: {
      comercios: 'Comerços',
      restauracion: 'Restauració',
      oficinas: 'Oficines',
      talleres: 'Tallers',
      almacenes: 'Magatzems',
    },
    why: {
      eyebrow: 'La nostra manera de treballar',
      title: 'Per què PEB',
      intro:
        'Som enginyers i portem el teu projecte de principi a fi: des de la primera visita fins que tens tots els papers en regla.',
      items: [
        {
          id: 'trato',
          title: "Tracte directe amb l'enginyer",
          text: "Parles sempre amb l'enginyer que redacta i signa el teu projecte, sense intermediaris.",
        },
        {
          id: 'presupuesto',
          title: 'Pressupost tancat i sense compromís',
          text: 'Abans de començar saps exactament què inclou la feina i quant costa.',
        },
        {
          id: 'papeleo',
          title: 'Ens encarreguem de la paperassa',
          text: "Preparem i presentem la documentació davant l'ajuntament i en fem el seguiment.",
        },
        {
          id: 'local',
          title: 'Coneixem la normativa local',
          text: 'Treballem amb la normativa i els tràmits de Barcelona i la seva àrea metropolitana.',
        },
      ],
    },
    faqTitle: 'Preguntes freqüents',
    othersTitle: 'Altres serveis',
    othersMore: 'Veure el servei',
  },

  pages: {
    'licencia-actividad': {
      name: "Llicència d'activitat",
      title: "Llicència d'activitat a Barcelona | PEB Enginyeria",
      description:
        "Tramitem la teva llicència d'activitat a Barcelona: estudi del local, projecte tècnic i gestió amb l'ajuntament fins a l'obertura. Demana'ns pressupost.",
      h1: "Llicència d'activitat a Barcelona",
      intro: [
        "Si obres un negoci, canvies d'activitat o reformes el local, l'ajuntament ha de comprovar que el local és apte per al que hi vols fer. Segons l'activitat, el tràmit serà una llicència, una comunicació prèvia o una declaració responsable.",
        'A PEB estudiem el teu cas, redactem el projecte tècnic i el tramitem per tu, perquè obris amb tot en regla i sense sorpreses.',
      ],
      short: "Estudi del local, projecte d'activitat i tramitació amb l'ajuntament fins que puguis obrir.",
      when: {
        title: "Quan necessites una llicència d'activitat?",
        intro:
          "Qualsevol negoci que es desenvolupi en un local necessita que l'ajuntament l'autoritzi o en tingui constància. Aquests són els casos més habituals:",
        items: [
          {
            title: 'Obres un negoci',
            text: "Una botiga, un bar, una oficina o un taller: abans de començar, l'ajuntament ha de conèixer l'activitat i comprovar que el local compleix la normativa.",
          },
          {
            title: "Canvies d'activitat al mateix local",
            text: 'Si el local tenia permís per a un altre ús, per exemple una botiga que passa a ser una cafeteria, cal fer un nou tràmit.',
          },
          {
            title: 'Reformes o amplies el local',
            text: "Les obres que canvien la distribució, les instal·lacions o la superfície poden obligar a actualitzar el permís de l'activitat.",
          },
          {
            title: 'Traspasses o compres un negoci en marxa',
            text: 'Convé comprovar que la llicència anterior continua sent vàlida per al que hi faràs i comunicar el canvi de titular.',
          },
          {
            title: "Te'l demana l'ajuntament",
            text: "Després d'una inspecció o d'un requeriment, et poden demanar que regularitzis l'activitat o que corregeixis deficiències.",
          },
        ],
      },
      includes: {
        title: 'Què inclou',
        intro: 'Ens ocupem de tot el procés, des de la primera visita al local fins que tens el títol per obrir.',
        items: [
          {
            icon: 'ScanSearch',
            title: 'Estudi previ del local',
            text: "Analitzem el local i l'activitat per saber quin règim correspon i quines adaptacions calen. Així ho saps abans de signar un lloguer o començar obres.",
          },
          {
            icon: 'FileText',
            title: "Projecte d'activitat",
            text: "Redactem el projecte tècnic amb la descripció de l'activitat, les instal·lacions, la protecció contra incendis, l'evacuació i l'accessibilitat, amb els càlculs i plànols necessaris.",
          },
          {
            icon: 'Gauge',
            title: 'Revisió de les instal·lacions',
            text: "Revisem l'electricitat, la climatització i la ventilació del local i et diem què cal adaptar o legalitzar perquè l'activitat compleixi.",
          },
          {
            icon: 'Landmark',
            title: "Tramitació davant l'ajuntament",
            text: "Presentem la documentació i fem el seguiment de l'expedient, incloses les esmenes o els aclariments que demani l'ajuntament.",
          },
          {
            icon: 'BadgeCheck',
            title: 'Certificat tècnic final',
            text: "Quan el local està a punt, comprovem que s'ajusta al projecte i a la normativa i emetem el certificat tècnic que es presenta a l'ajuntament.",
          },
        ],
      },
      norms: {
        intro: "El tràmit i els requisits depenen de l'activitat, de la seva mida i del municipi. Aquestes són les normes amb què treballem més sovint:",
        items: [
          {
            code: 'Ordenances',
            name: "Normativa municipal d'activitats",
            text: 'Cada ajuntament regula els seus tràmits i requisits; per això un mateix negoci es pot tramitar de manera diferent segons el municipi.',
          },
          {
            code: 'Llei 18/2020',
            name: "Llei de facilitació de l'activitat econòmica",
            text: "Marca quan n'hi ha prou amb una declaració responsable o una comunicació prèvia i quan cal llicència.",
          },
          {
            code: 'Llei 11/2009',
            name: 'Llei dels espectacles públics i les activitats recreatives',
            text: "S'aplica als bars musicals, les discoteques i altres locals d'oci, amb requisits propis.",
          },
          {
            code: 'CTE',
            name: "Codi Tècnic de l'Edificació",
            text: "Fixa les condicions de seguretat en cas d'incendi (DB-SI) i de seguretat d'utilització i accessibilitat (DB-SUA) que ha de complir el local.",
          },
        ],
      },
      businesses: {
        intro: "Tramitem l'activitat de tota mena de locals. Cadascun té les seves particularitats:",
        items: {
          comercios: 'Botigues i locals de venda al públic, de barri o de més superfície.',
          restauracion: "Bars, cafeteries i restaurants, amb una atenció especial a la cuina, l'extracció de fums i l'aforament.",
          oficinas: 'Despatxos, consultes i espais de treball, oberts o no al públic.',
          talleres: 'Tallers de reparació o de fabricació, amb les seves instal·lacions i riscos propis.',
          almacenes: "Naus i magatzems, on pesen molt el que s'hi guarda i l'evacuació.",
        },
      },
      faq: [
        {
          q: 'Quina diferència hi ha entre llicència, comunicació prèvia i declaració responsable?',
          a: "Són maneres diferents de tramitar l'activitat segons el risc i la mida. Amb una declaració responsable o una comunicació prèvia, en general pots començar tan bon punt la presentes amb tota la documentació. La llicència es reserva a les activitats de més risc i cal esperar que l'ajuntament la concedeixi.",
        },
        {
          q: 'Quant triga el tràmit?',
          a: "Depèn del règim, de l'ajuntament i de si el local necessita obres. Després de l'estudi previ et donem una previsió realista per al teu cas. Com a orientació, el procés sol durar [PLAZO HABITUAL].",
        },
        {
          q: "Quant costa una llicència d'activitat?",
          a: "Depèn de l'activitat, de la superfície i de la feina tècnica necessària. Després de visitar el local t'enviem un pressupost tancat i sense compromís; com a orientació, parteix de [PRECIO DESDE]. Als honoraris s'hi han de sumar les taxes municipals, que fixa cada ajuntament.",
        },
        {
          q: "Si el local ja tenia llicència, n'he de tramitar una de nova?",
          a: "Si mantens la mateixa activitat i no fas obres ni canvis a les instal·lacions, normalment n'hi ha prou amb comunicar el canvi de titular. Si canvia l'activitat o el local, caldrà un nou tràmit. Ho comprovem a l'estudi previ.",
        },
        {
          q: "Què passa si obro sense el permís d'activitat?",
          a: "L'ajuntament pot imposar sancions i ordenar el tancament del local fins que l'activitat es regularitzi. Per això convé començar el tràmit abans d'obrir.",
        },
        {
          q: 'Treballeu fora de la ciutat de Barcelona?',
          a: 'Sí, a tota la província de Barcelona. Cada ajuntament té la seva ordenança i adaptem la documentació al que demana cadascun.',
        },
      ],
    },

    'baja-tension': {
      name: 'Projectes elèctrics de baixa tensió',
      title: 'Projectes de baixa tensió a Barcelona | PEB Enginyeria',
      description:
        "Projectes i legalització d'instal·lacions elèctriques de baixa tensió a Barcelona segons el REBT, per a locals, oficines i naus. Demana'ns pressupost.",
      h1: 'Projectes elèctrics de baixa tensió a Barcelona',
      intro: [
        "La instal·lació elèctrica d'un local, una oficina o una nau ha de complir el Reglament electrotècnic per a baixa tensió (REBT) i estar legalitzada per poder contractar el subministrament, ampliar la potència o obrir al públic.",
        'A PEB redactem la documentació tècnica que necessites, calculem la instal·lació i coordinem la legalització amb el teu instal·lador, perquè tot quedi en regla.',
      ],
      short: "Càlcul, projecte i legalització d'instal·lacions elèctriques segons el REBT.",
      when: {
        title: 'Quan necessites un projecte de baixa tensió?',
        intro:
          "No sempre cal un projecte complet: segons el tipus de local i la potència, el REBT demana un projecte signat per un tècnic o n'hi ha prou amb una memòria tècnica de disseny. Aquests són els casos més habituals:",
        items: [
          {
            title: 'Obres o reformes un local',
            text: "La instal·lació elèctrica és una de les coses que es revisen per a la llicència d'activitat, i una reforma sol obligar a adaptar-la.",
          },
          {
            title: 'Necessites més potència',
            text: 'Si hi afegeixes maquinària, una cuina elèctrica o climatització, potser hauràs d\'ampliar la potència i actualitzar la documentació de la instal·lació.',
          },
          {
            title: 'La instal·lació és antiga o no està legalitzada',
            text: 'Si no tens el certificat de la instal·lació o no correspon al que hi ha, cal regularitzar-la.',
          },
          {
            title: 'Instal·les punts de recàrrega o plaques solars',
            text: "Els carregadors de vehicle elèctric i l'autoconsum fotovoltaic es connecten a la instal·lació de baixa tensió i també han de complir el REBT.",
          },
          {
            title: 'Et toca una inspecció',
            text: "Algunes instal·lacions, com les dels locals de pública concurrència, passen inspeccions periòdiques, i les deficiències que s'hi detectin s'han de corregir.",
          },
        ],
      },
      includes: {
        title: 'Què inclou',
        intro: "T'acompanyem des del càlcul de la instal·lació fins que queda legalitzada.",
        items: [
          {
            icon: 'Gauge',
            title: 'Estudi de necessitats i potència',
            text: "Calculem la potència que necessita la teva activitat segons la maquinària, l'enllumenat i la climatització, per contractar la justa i no quedar-te curt.",
          },
          {
            icon: 'FileText',
            title: 'Projecte o memòria tècnica de disseny',
            text: 'Redactem la documentació que exigeix el REBT en el teu cas, amb esquemes unifilars, plànols i càlculs.',
          },
          {
            icon: 'CircuitBoard',
            title: 'Quadres, línies i proteccions',
            text: 'Dimensionem el quadre general, les línies i les proteccions perquè la instal·lació sigui segura i no saltin els automàtics sense motiu.',
          },
          {
            icon: 'Lightbulb',
            title: "Enllumenat i enllumenat d'emergència",
            text: "Dissenyem l'enllumenat del local i el d'emergència i senyalització que exigeix la normativa als espais oberts al públic.",
          },
          {
            icon: 'PlugZap',
            title: 'Punts de recàrrega i autoconsum',
            text: "Integrem a la instal·lació els punts de recàrrega de vehicle elèctric i la connexió de les plaques solars d'autoconsum.",
          },
          {
            icon: 'BadgeCheck',
            title: 'Legalització i certificats',
            text: "Coordinem amb l'empresa instal·ladora el certificat d'instal·lació i el seu registre davant la Generalitat i, quan hi ha projecte, emetem el certificat de direcció d'obra.",
          },
        ],
      },
      norms: {
        intro: 'La instal·lació elèctrica es regeix pel reglament estatal de baixa tensió i les seves instruccions tècniques:',
        items: [
          {
            code: 'REBT',
            name: 'Reglament electrotècnic per a baixa tensió',
            text: 'Reial decret 842/2002 i les seves instruccions tècniques complementàries (ITC-BT), que fixen com es dissenya, s\'executa, es legalitza i s\'inspecciona una instal·lació.',
          },
          {
            code: 'ITC-BT-04',
            name: 'Documentació i posada en servei',
            text: "Indica quan cal un projecte i quan n'hi ha prou amb una memòria tècnica de disseny.",
          },
          {
            code: 'ITC-BT-05',
            name: 'Verificacions i inspeccions',
            text: 'Estableix quines instal·lacions han de passar inspecció inicial i periòdica.',
          },
          {
            code: 'ITC-BT-28',
            name: 'Locals de pública concurrència',
            text: "Afegeix requisits per a comerços, restaurants i altres locals amb públic, com l'enllumenat d'emergència.",
          },
        ],
      },
      businesses: {
        intro: 'Projectem instal·lacions elèctriques per a tota mena de locals:',
        items: {
          comercios: 'Botigues i locals comercials, amb el seu enllumenat, aparadors i climatització.',
          restauracion: 'Bars i restaurants, on la cuina i la climatització augmenten molt la potència necessària.',
          oficinas: 'Oficines i despatxos, amb llocs de treball, equips informàtics i climatització.',
          talleres: 'Tallers amb maquinària i motors que necessiten línies i proteccions específiques.',
          almacenes: "Naus i magatzems, amb enllumenat de grans superfícies i maquinària.",
        },
      },
      faq: [
        {
          q: 'Què és el butlletí elèctric?',
          a: "És el nom popular del certificat d'instal·lació elèctrica. L'emet l'empresa instal·ladora habilitada en acabar la instal·lació i es registra davant la Generalitat. El necessites, per exemple, per contractar la llum o canviar la potència.",
        },
        {
          q: 'Quan cal un projecte i quan una memòria tècnica?',
          a: "Depèn del tipus d'instal·lació i de la potència. El REBT exigeix un projecte signat per un tècnic en els casos de més potència o risc, com molts locals de pública concurrència; en la resta n'hi ha prou amb una memòria tècnica de disseny. Et diem quin és el teu cas a la primera consulta.",
        },
        {
          q: 'Puc ampliar la potència del meu local?',
          a: 'Normalment sí, però potser caldrà adaptar la instal·lació i actualitzar el certificat. Calculem la potència que necessites i et diem quins canvis calen.',
        },
        {
          q: "Cada quan s'ha de passar la inspecció?",
          a: 'Les instal·lacions que la necessiten, com les dels locals de pública concurrència, passen una inspecció periòdica cada cinc anys, que fa un organisme de control.',
        },
        {
          q: 'Treballeu amb el meu instal·lador?',
          a: "Sí. Si ja tens un instal·lador de confiança, redactem la documentació tècnica i coordinem amb ell l'execució i la legalització.",
        },
        {
          q: 'Quant costa un projecte de baixa tensió?',
          a: "Depèn de la potència, de la superfície i de si cal projecte o memòria tècnica. Després de la visita t'enviem un pressupost tancat i sense compromís; com a orientació, parteix de [PRECIO DESDE].",
        },
      ],
    },

    incendios: {
      name: 'Protecció contra incendis',
      title: 'Protecció contra incendis a Barcelona | PEB Enginyeria',
      description:
        'Projectes de protecció contra incendis a Barcelona segons el CTE DB-SI i el RIPCI: evacuació, detecció i extinció per al teu local. Demana pressupost.',
      h1: 'Protecció contra incendis a Barcelona',
      intro: [
        "Un local obert al públic, una oficina o una nau han d'estar preparats perquè, si hi ha un incendi, es detecti a temps, es pugui controlar i les persones surtin amb seguretat. És un dels punts que més es revisen en tramitar una llicència d'activitat.",
        "A PEB estudiem el teu local, projectem les mesures de protecció contra incendis que exigeix la normativa i t'acompanyem fins a la posada en marxa.",
      ],
      short: 'Evacuació, detecció i extinció segons el CTE DB-SI i el RIPCI.',
      when: {
        title: 'Quan necessites un projecte de protecció contra incendis?',
        intro:
          'La protecció contra incendis no és només posar extintors: també compta com està distribuït el local, per on se surt i quines instal·lacions calen. La necessites sobretot en aquests casos:',
        items: [
          {
            title: "Obres un local o demanes la llicència d'activitat",
            text: "El projecte d'activitat ha de justificar que el local compleix la normativa de seguretat en cas d'incendi.",
          },
          {
            title: "Reformes, amplies o canvies l'ús",
            text: "Si canvien la distribució, la superfície o el nombre de persones, també poden canviar les sortides i les instal·lacions que s'exigeixen.",
          },
          {
            title: 'Tens una inspecció o un requeriment',
            text: "Després d'una inspecció de l'ajuntament o d'un organisme de control, potser hauràs de corregir deficiències.",
          },
          {
            title: 'Tens un taller, una nau o un magatzem',
            text: "Als establiments industrials s'aplica un reglament específic que té en compte el que s'hi emmagatzema i com pot cremar.",
          },
          {
            title: 'Instal·les o renoves equips',
            text: "La detecció, l'alarma, els extintors o les boques d'incendi han de complir el RIPCI i els han de muntar empreses habilitades.",
          },
        ],
      },
      includes: {
        title: 'Què inclou',
        intro: 'Estudiem el local en conjunt i definim totes les mesures que necessita.',
        items: [
          {
            icon: 'DoorOpen',
            title: 'Evacuació i ocupació',
            text: "Calculem quantes persones hi pot haver al local i comprovem les sortides, els recorreguts d'evacuació i l'amplada de portes i passadissos.",
          },
          {
            icon: 'Layers',
            title: 'Sectorització i resistència al foc',
            text: "Definim els sectors d'incendi i les condicions de parets, sostres i portes perquè el foc no es propagui.",
          },
          {
            icon: 'BellRing',
            title: 'Detecció i alarma',
            text: "Projectem els detectors, els polsadors i els sistemes d'alarma quan la normativa els exigeix.",
          },
          {
            icon: 'FireExtinguisher',
            title: 'Extinció',
            text: "Situem els extintors i, si calen, les boques d'incendi equipades o altres sistemes d'extinció.",
          },
          {
            icon: 'Lightbulb',
            title: "Senyalització i enllumenat d'emergència",
            text: "Definim la senyalització de sortides i equips i l'enllumenat d'emergència, per poder evacuar encara que falti la llum.",
          },
          {
            icon: 'BadgeCheck',
            title: 'Posada en servei i manteniment',
            text: "Coordinem la posada en servei amb l'empresa instal·ladora i t'expliquem les revisions periòdiques que exigeix el RIPCI.",
          },
        ],
      },
      norms: {
        intro: "La normativa que s'aplica depèn sobretot de si l'establiment és industrial o no:",
        items: [
          {
            code: 'CTE DB-SI',
            name: "Codi Tècnic de l'Edificació, Seguretat en cas d'incendi",
            text: "Fixa l'evacuació, la sectorització i els equips de protecció de comerços, restaurants, oficines i altres locals no industrials.",
          },
          {
            code: 'RIPCI',
            name: "Reglament d'instal·lacions de protecció contra incendis",
            text: "Reial decret 513/2017. Regula com es dissenyen, s'instal·len i es mantenen els equips: extintors, detecció, alarma, boques d'incendi i altres sistemes.",
          },
          {
            code: 'RSCIEI',
            name: 'Reglament de seguretat contra incendis en els establiments industrials',
            text: "Reial decret 2267/2004. S'aplica a tallers, naus i magatzems industrials en lloc del DB-SI.",
          },
        ],
      },
      businesses: {
        intro: 'Cada tipus de local té els seus propis riscos:',
        items: {
          comercios: "Botigues amb públic, on l'ocupació i les sortides són clau.",
          restauracion: 'Bars i restaurants, amb cuina, aforament i, sovint, soterranis o altells.',
          oficinas: "Oficines i despatxos, amb els seus recorreguts d'evacuació i la seva senyalització.",
          talleres: "Tallers amb materials i maquinària que augmenten el risc d'incendi.",
          almacenes: "Magatzems i naus, on el que s'hi guarda marca les mesures necessàries.",
        },
      },
      faq: [
        {
          q: "Quina normativa s'aplica al meu local?",
          a: "Si és un comerç, un restaurant, una oficina o un altre local no industrial, el CTE DB-SI. Si és un taller, una nau o un magatzem industrial, el reglament d'establiments industrials (RSCIEI). En tots dos casos, els equips han de complir el RIPCI.",
        },
        {
          q: 'Quants extintors necessito?',
          a: "Depèn de la superfície, de com està distribuït el local i de si hi ha zones de risc especial, com una cuina o un quart d'instal·lacions. Ho calculem al projecte.",
        },
        {
          q: 'Qui pot instal·lar i revisar els equips?',
          a: "Només empreses instal·ladores i mantenidores habilitades segons el RIPCI. Nosaltres projectem la instal·lació i ens coordinem amb l'empresa que triïs.",
        },
        {
          q: "Cada quan s'han de revisar els equips?",
          a: "El RIPCI fixa revisions periòdiques: algunes les pot fer el mateix titular i d'altres les ha de fer una empresa mantenidora habilitada. T'expliquem quines corresponen a la teva instal·lació.",
        },
        {
          q: "Necessito enllumenat d'emergència?",
          a: "A la majoria de locals oberts al públic, sí, sobretot als recorreguts d'evacuació. El projecte indica on ha d'anar.",
        },
        {
          q: 'Quant costa un projecte de protecció contra incendis?',
          a: "Depèn de la superfície, de l'activitat i de les instal·lacions que calguin. Després de la visita t'enviem un pressupost tancat i sense compromís; com a orientació, parteix de [PRECIO DESDE].",
        },
      ],
    },

    climatizacion: {
      name: 'Climatització i ventilació',
      title: 'Climatització i ventilació a Barcelona | PEB Enginyeria',
      description:
        'Projectes de climatització i ventilació a Barcelona segons el RITE i el CTE DB-HS: aire condicionat, aerotèrmia i extracció de fums. Demana pressupost.',
      h1: 'Climatització i ventilació a Barcelona',
      intro: [
        "Un local o una oficina amb bona climatització i bona ventilació és més còmode, més sa i gasta menys energia. Aquestes instal·lacions han de complir el Reglament d'instal·lacions tèrmiques als edificis (RITE) i, a partir de certa potència, necessiten un projecte.",
        'A PEB calculem el que necessita el teu espai, dissenyem la instal·lació i ens ocupem de la documentació per legalitzar-la.',
      ],
      short: 'Aire condicionat, calefacció, aerotèrmia i ventilació segons el RITE.',
      when: {
        title: 'Quan necessites un projecte de climatització o ventilació?',
        intro: 'Et recomanem comptar amb un enginyer sobretot en aquests casos:',
        items: [
          {
            title: "Obres un local o demanes la llicència d'activitat",
            text: 'La climatització i la ventilació formen part de les instal·lacions que es revisen per poder obrir.',
          },
          {
            title: "Instal·les o canvies l'aire condicionat o la calefacció",
            text: 'Segons la potència, el RITE demana un projecte signat per un tècnic o una memòria tècnica.',
          },
          {
            title: 'Tens una cuina professional',
            text: 'Els bars i restaurants necessiten una extracció de fums ben dimensionada i que compleixi el que demani la normativa municipal.',
          },
          {
            title: "L'ambient està carregat o hi ha condensacions",
            text: "Una ventilació insuficient es nota en el confort i en la qualitat de l'aire, i es pot corregir amb un bon disseny.",
          },
          {
            title: 'Vols gastar menys energia',
            text: "Passar a l'aerotèrmia o a equips més eficients redueix el consum i les emissions.",
          },
        ],
      },
      includes: {
        title: 'Què inclou',
        intro: "Dissenyem la instal·lació completa, adaptada a l'ús de cada espai.",
        items: [
          {
            icon: 'Thermometer',
            title: 'Càlcul de càrregues tèrmiques',
            text: "Calculem la calor i el fred que necessita cada espai segons l'orientació, l'ocupació i l'ús, per triar equips de la potència justa.",
          },
          {
            icon: 'AirVent',
            title: 'Climatització i calefacció',
            text: "Dissenyem sistemes d'aire condicionat, calefacció, terra radiant i aerotèrmia, i triem els equips més adequats per al teu cas.",
          },
          {
            icon: 'Wind',
            title: "Ventilació i qualitat de l'aire",
            text: "Calculem la renovació d'aire que exigeix la normativa segons l'ocupació i l'ús del local, amb recuperació de calor quan correspon.",
          },
          {
            icon: 'CookingPot',
            title: 'Extracció de fums de cuina',
            text: "Projectem les campanes i els conductes d'extracció de les cuines de bars i restaurants.",
          },
          {
            icon: 'Fan',
            title: "Distribució de l'aire",
            text: "Dissenyem els conductes, les reixetes i els difusors per repartir l'aire sense corrents molestos ni sorolls.",
          },
          {
            icon: 'BadgeCheck',
            title: 'Legalització i manteniment',
            text: "Preparem la documentació per registrar la instal·lació i t'expliquem el manteniment i les inspeccions que exigeix el RITE.",
          },
        ],
      },
      norms: {
        intro: 'Les instal·lacions tèrmiques i la ventilació es regeixen per:',
        items: [
          {
            code: 'RITE',
            name: "Reglament d'instal·lacions tèrmiques als edificis",
            text: "Reial decret 1027/2007. Regula el disseny, l'eficiència, la legalització i el manteniment de la climatització i la calefacció, i la qualitat de l'aire interior dels edificis no residencials.",
          },
          {
            code: 'CTE DB-HS',
            name: "Codi Tècnic de l'Edificació, Salubritat",
            text: "La secció HS 3 fixa la ventilació d'habitatges, trasters, magatzems de residus i aparcaments.",
          },
        ],
      },
      businesses: {
        intro: "Climatitzem i ventilem tota mena d'espais:",
        items: {
          comercios: 'Botigues on compten el confort dels clients i el consum.',
          restauracion: 'Bars i restaurants, amb cuina, extracció de fums i molta ocupació.',
          oficinas: "Oficines on la temperatura i la qualitat de l'aire influeixen en la feina.",
          talleres: 'Tallers amb calor de la maquinària, fums o pols que cal evacuar.',
          almacenes: 'Magatzems i naus de gran volum, on la ventilació és el principal.',
        },
      },
      faq: [
        {
          q: 'Necessito un projecte per instal·lar aire condicionat al meu local?',
          a: "Depèn de la potència tèrmica. Per sobre de 70 kW, el RITE exigeix un projecte signat per un tècnic; entre 5 i 70 kW n'hi ha prou amb una memòria tècnica. Et diem què et correspon.",
        },
        {
          q: "Què és l'aerotèrmia?",
          a: "És una bomba de calor que aprofita l'energia de l'aire exterior per donar calefacció, refrigeració i aigua calenta amb un consum elèctric baix. És una bona alternativa a les calderes de gas o de gasoil.",
        },
        {
          q: 'Quanta ventilació necessita el meu local?',
          a: "En els locals no residencials, el RITE fixa l'aire exterior que s'ha d'aportar segons l'ocupació i l'ús. El calculem perquè compleixis i perquè l'ambient sigui saludable.",
        },
        {
          q: 'On puc posar la unitat exterior?',
          a: 'Depèn de les ordenances municipals i, si el local és en un edifici amb comunitat, del que permeti la comunitat de propietaris. Ho revisem abans de proposar-te una solució.',
        },
        {
          q: 'La instal·lació necessita manteniment?',
          a: "Sí. El RITE obliga a fer un manteniment periòdic i, segons la potència, l'ha de fer una empresa mantenidora habilitada. T'expliquem què correspon a la teva instal·lació.",
        },
        {
          q: 'Quant costa un projecte de climatització?',
          a: "Depèn de la superfície, de l'ús i del tipus de sistema. Després de la visita t'enviem un pressupost tancat i sense compromís; com a orientació, parteix de [PRECIO DESDE].",
        },
      ],
    },
  },
}
