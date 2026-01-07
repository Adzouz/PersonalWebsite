const translations = {
  metas: {
    description: `I'm Adrien Lepoutre, front-end developer. I create modern websites, web apps and mobile apps.`,
  },
  navbar: {
    clients: 'Clientes',
    about: 'Quién soy',
    showcase: 'Portafolio',
    contact: 'Contacto',
    menu: 'Menú',
  },
  sections: {
    hero: {
      hi: `Hola, soy`,
      wantToKnowMore: '¿Quieres saber más?',
      what: 'Creo <span>sitios web</span>, <span>apps web</span> y <span>apps móviles</span>',
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
        'Soy un desarrollador front-end francés de Lille (Francia). Viví en Montréal (CA) durante 7 años y ahora vivo en Madrid (ES).<br />Tengo nacionalidad francesa y canadiense.',
      'questions.1.question': '¿Qué idiomas hablas?',
      'questions.1.answer':
        'El francés es mi lengua materna. Tengo un nivel bastante bueno de inglés y hablo un poquito de español.',
      'questions.2.question': '¿Dónde estudiaste?',
      'questions.2.answer': `En la Universidad SUPINFO, en Lille (FR), donde me gradué y obtuve un Máster en Ciencias en Informática y tengo una certificación en Seguridad de Sistemas.
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
        'Trabajo con React y Typescript. También tengo sólidos conocimientos de diseño con Sass. También tengo algunos conocimientos de pruebas unitarias (con Jest o Testing Library).',
      chatbot: {
        placeholder: 'Escribe tu pregunta...',
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
      city: 'Bretaña, FR',
    },
  },
};

export default translations;
