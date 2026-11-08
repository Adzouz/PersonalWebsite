const translations = {
  navbar: {
    clients: 'Clients',
    about: 'A propos',
    showcase: 'Vitrine',
    contact: 'Contact',
    menu: 'Menu',
    darkMode: 'Mode sombre',
  },
  sections: {
    hero: {
      hi: `Salut, je suis`,
      wantToKnowMore: 'En savoir plus ?',
      what: 'Je transforme des <span>idées 💡</span> en <span>réalité 🚀</span>',
      whatRight:
        "L'<span>imagination ✨</span> est mon <span>terrain de jeu 🛝</span>",
    },
    trustedClients: {
      title: `Ils m'ont fait confiance`,
      andMore: 'et plus encore',
    },
    about: {
      title: 'Qui suis-je?',
      start: 'Brisons la glace!',
      'questions.0.question': 'Alors, qui es-tu?',
      'questions.0.answer': `Je suis un développeur front-end originaire de Lille 🇫🇷. J'ai vécu 7 ans à Montréal 🇨🇦, un an à Madrid 🇪🇸 et maintenant je suis de nouveau à Lille.<br />J'ai les deux nationalités française et canadienne.`,
      'questions.1.question': 'Quelles langues parles-tu?',
      'questions.1.answer': `Le français est ma langue natale. Je parle couramment anglais et je parle un petit peu l'espagnol.`,
      'questions.2.question': 'Où as-tu étudié?',
      'questions.2.answer': `SUPINFO University à Lille 🇫🇷. C'est une école d'informatique internationale où j'ai obtenu mon Master of Science en IT. J'ai également eu une certification en sécurité des systèmes.
      <br />J'ai aussi été professeur là-bas:
      <ul>
        <li>B.Sc.1: SEO, SEA, SEM, SMO</li>
        <li>B.Sc.2: PHP, Symfony, AJAX</li>
      </ul>`,
      'questions.3.question': 'Où travailles-tu actuellement?',
      'questions.3.answer': `Je travaille chez Strapi, une compagnie française qui développe un CMS open-source.`,
      'questions.4.question':
        'Quelles sont les outils que tu utilises dans ton travail?',
      'questions.4.answer': `Je travaille principalement avec React et Typescript. Mais maintenant avec les outils d'IA, le champ des possibles est vraiment ouvert. J'apporte l'expérience et l'IA apporte les possibilités.`,
      chatbot: {
        placeholder: 'Posez une question sur moi...',
        fallbackAnswer: `Je n'ai pas bien compris la question ou je n'ai malheureusement pas la réponse. Veuillez reformuler.`,
        ask: 'Demander',
        provideQuestion: 'Vous devez fournir une question.',
        errorOccurred: `Une erreur s'est produite, veuillez recommencer plus tard.`,
        errorRecaptcha: `Une erreur s'est produite avec la validation anti-robot. Veuillez ressayer ou recharger la page.`,
        disclaimer: `Je n'ai pas toutes les réponses et je ne peux répondre qu'à une seule réponse à la fois. Soyez respectueux, s'il vous plait.`,
        errors: {
          PROVIDE_QUESTION: 'Veuillez renseigner une question.',
          ANTIBOT_FAILED: 'Échec de la vérification anti-robot.',
          ERROR_DEFAULT: 'Une erreur est survenue avec le chatbot.',
        },
      },
      downloadCV: 'Télécharger mon CV',
    },
    showcase: {
      title: 'Vitrine',
      activeProProjects: 'Projets professionnels actifs',
      inactiveProProjects: 'Projets professionnels inactifs',
      activePersoProjects: 'Projets personnels actifs',
      inactivePersoProjects: 'Projets personnels inactifs',
      tags: {
        website: 'site web',
        webApp: 'app web',
        mobileApp: 'app mobile',
      },
    },
    contact: {
      title: 'Comment me joindre',
    },
    map: {
      city: 'Lille, FR',
    },
  },
};

export default translations;
