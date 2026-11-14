const translations = {
  metas: {
    description: `Soy Adrien Lepoutre, desarrollador fullstack. Creo sitios web, aplicaciones web y aplicaciones móviles modernas.`,
  },
  navbar: {
    clients: 'Clientes',
    about: 'Quién soy',
    showcase: 'Portafolio',
    contact: 'Contacto',
    menu: 'Menú',
    darkMode: 'Modo oscuro',
  },
  sections: {
    hero: {
      hi: `Hola, soy`,
      wantToKnowMore: '¿Quieres saber más?',
      what: 'Transformo <span>ideas 💡</span> en <span>realidad 🚀</span>',
      whatRight: '<span>Imaginación ✨</span> es mi <span>playground 🛝</span>',
    },
    trustedClients: {
      title: 'Confiaron en mí',
      andMore: 'y más',
    },
    about: {
      title: 'Conóceme',
      start: '¡Empecemos la conversación!',
      'questions.0.question': 'Entonces, ¿quién eres?',
      'questions.0.answer':
        'Soy un desarrollador fullstack francés de Lille 🇫🇷. Viví en Montréal 🇨🇦 durante 7 años, un año en Madrid 🇪🇸 y ahora estoy de vuelta en Lille.<br />Tengo nacionalidad francesa y canadiense.',
      'questions.1.question': '¿Qué idiomas hablas?',
      'questions.1.answer':
        'El francés es mi lengua materna. Tengo un nivel bastante bueno de inglés y hablo un poquito de español.',
      'questions.2.question': '¿Dónde estudiaste?',
      'questions.2.answer': `En la Universidad SUPINFO, en Lille 🇫🇷, donde me gradué y obtuve un Máster en Ciencias en Informática y tengo una certificación en Seguridad de Sistemas.
        <br />También fui profesor en la misma universidad:
        <ul>
          <li>B.Sc.1: SEO, SEA, SEM, SMO</li>
          <li>B.Sc.2: PHP, Symfony, AJAX</li>
        </ul>`,
      'questions.3.question': '¿Dónde trabajas actualmente?',
      'questions.3.answer':
        'Trabajo en Strapi, una empresa francesa que desarrolla un opensource headless CMS.',
      'questions.4.question':
        '¿Qué tecnologias usas en tu trabajo profesional?',
      'questions.4.answer':
        'Trabajo con React y Typescript. Pero ahora con las herramientas de IA, el campo es realmente abierto. Yo aporto la experiencia y la IA aporta las posibilidades.',
      chatbot: {
        placeholder: 'Escribe una pregunta sobre mí...',
        fallbackAnswer:
          'No he entendido o no puedo responder a la pregunta. Por favor, reformúlala e inténtalo de nuevo.',
        ask: 'Preguntar',
        provideQuestion: 'Debes escribir una pregunta.',
        errorOccurred:
          'Ocurrió un error, por favor inténtalo de nuevo más tarde.',
        errorRecaptcha:
          'Algo ha ido mal con la verificación anti-bot. Por favor, inténtalo de nuevo o actualiza la página.',
        disclaimer:
          'No tengo todas las respuestas y solo puedo responder una pregunta a la vez. Por favor sé respetuoso.',
        errors: {
          PROVIDE_QUESTION: 'Por favor, introduce una pregunta.',
          ANTIBOT_FAILED: 'La validación anti-robot ha fallado.',
          ERROR_DEFAULT: 'Error en la API del chatbot.',
        },
      },
      downloadCV: 'Descargar mi CV',
    },
    showcase: {
      title: 'Portafolio',
      activeProProjects: 'Proyectos profesionales activos',
      inactiveProProjects: 'Proyectos profesionales inactivos',
      activePersoProjects: 'Proyectos personales activos',
      inactivePersoProjects: 'Proyectos personales inactivos',
      tags: {
        website: 'website',
        webApp: 'web app',
        mobileApp: 'mobile app',
      },
    },
    contact: {
      title: '¿Quieres contactarme?',
    },
    map: {
      city: 'Lille, FR',
    },
    notFound: {
      subtitle: 'Parece que te has equivocado de puerta.',
      question: 'Oye, ¿dónde está {{path}}?',
      answer:
        'En ninguna parte, lo siento 🚪 Esta página no existe: se ha movido o nunca existió. Pero ya que estás aquí, ¿qué quieres hacer?',
      options: {
        home: '🏠 Volver al sitio',
        ask: '💬 Hacer una pregunta',
        play: '🕹️ Jugar a un juego',
      },
      ask: '¡Claro, adelante! Pregúntame lo que quieras sobre mi trabajo.',
      game: {
        rules:
          '¡Juguemos a Bug Squash! Aplasta los bugs 🐛 antes de que lleguen a producción y no toques las funcionalidades ✨. Tienes {{lives}} vidas.',
        score: 'Puntos',
        combo: 'Combo',
        lives: 'Vidas',
        start: 'Empezar',
        again: 'Jugar otra vez',
        over: '¡Fin de la partida!',
        legend: {
          title: 'Reglas:',
          bug: 'Aplastar',
          feature: 'No tocar',
        },
        scores: {
          title: 'Mejores puntuaciones',
          loading: 'Cargando las puntuaciones…',
          failed: 'No se pueden cargar las puntuaciones ahora.',
          empty: 'Todavía no hay puntuaciones. ¡Sé el primero!',
          newHigh: '¡Nuevo récord: {{score}} puntos! Escribe tus iniciales:',
          save: 'Guardar',
          saving: 'Guardando…',
          errors: {
            format: '3 letras, de la A a la Z.',
            blocked: 'Elige otras iniciales.',
            rate: 'Demasiados intentos. Espera un minuto y vuelve a intentarlo.',
            expired: 'Esta partida ya no se puede guardar.',
            failed: 'No se pudo guardar tu puntuación. Inténtalo de nuevo.',
          },
        },
      },
    },
  },
};

export default translations;
