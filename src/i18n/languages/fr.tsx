const translations = {
  navbar: {
    clients: 'Clients',
    about: 'A propos',
    showcase: 'Vitrine',
    contact: 'Contact',
  },
  sections: {
    hero: {
      hi: `Allô, je suis`,
      wantToKnowMore: 'En savoir plus ?',
      what: 'Je crée des <span>sites web</span>, <span>apps web</span> et des <span>apps mobile</span>',
    },
    trustedClients: {
      title: `Ils m'ont fait confiance`,
      andMore: 'et plus encore',
    },
    about: {
      title: 'Qui suis-je?',
      start: 'Brisons la glace!',
      'questions.0.question': 'Alors, qui es-tu?',
      'questions.0.answer': `Je suis un développeur front-end originaire de Lille (FR), et vivant actuellement à Montreal (CA) depuis décembre 2017. J'ai les deux citoyennetés.`,
      'questions.1.question': 'Quelles langues parles-tu?',
      'questions.1.answer': `Le français est ma langue natale. Je parle couramment anglais et je parle un petit peu l'espagnol.`,
      'questions.2.question': 'Où as-tu étudié?',
      'questions.2.answer': `SUPINFO University à Lille (FR). C'est une école d'informatique internationale où j'ai obtenu mon Master of Science en IT. J'ai également eu une certification en sécurité des systèmes.
      <br />J'ai aussi été professeur là-bas:
      <ul>
        <li>B.Sc.1: SEO, SEA, SEM, SMO</li>
        <li>B.Sc.2: PHP, Symfony, AJAX</li>
      </ul>`,
      'questions.3.question': 'Où travailles-tu actuellement?',
      'questions.3.answer': `Je travaille à Ubisoft, une compagnie française qui développe des jeux vidéo. Je suis dans l'équipe E-commerce et je travaille essentiellement sur la boutique en ligne et sur le client PC Ubisoft Connect.`,
      'questions.4.question': 'En quoi consiste ton travail?',
      'questions.4.answer': `Je conçois des composants et des micro-applications réutilisables. L'objectif est d'harmoniser l'expérience utilisateur entre les différentes plateformes (PC et web).`,
      'questions.5.question':
        'Quelles sont les technologies que tu utilises au quotidien dans ton travail?',
      'questions.5.answer': `Je travaille avec React et je développe des micro-frontends dans des architectures en monorepo (avec Turborepo et Vite). J'ai aussi de solides connaissances en design avec Sass et travaille sur SFCC (Salesforce Commerce Cloud).`,
      chatbot: {
        placeholder: 'Posez votre question...',
        fallbackAnswer: `Je n'ai pas bien compris la question ou je n'ai malheureusement pas la réponse. Veuillez reformuler.`,
        ask: 'Demander',
        provideQuestion: 'Vous devez fournir une question.',
        errorOccurred: `Une erreur s'est produite, veuillez recommencer plus tard.`,
        errorRecaptcha: `Une erreur s'est produite avec la validation anti-robot. Veuillez ressayer ou recharger la page.`,
        disclaimer: `Je n'ai pas toutes les réponses et je ne peux répondre qu'à une seule réponse à la fois. La première requête peut être plus longue que les autres. Soyez respectueux, s'il vous plait.`,
        errors: {
          PROVIDE_QUESTION: 'Veuillez renseigner une question.',
          ANTIBOT_FAILED: 'Échec de la vérification anti-robot.',
          ERROR_DEFAULT: 'Une erreur est survenue avec le chatbot.',
        },
      },
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
  },
};

export default translations;
