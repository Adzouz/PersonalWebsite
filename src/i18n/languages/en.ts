const translations = {
  metas: {
    description: `I'm Adrien Lepoutre, fullstack developer. I create modern websites, web apps and mobile apps.`,
  },
  navbar: {
    clients: 'Clients',
    about: 'About',
    showcase: 'Showcase',
    contact: 'Contact',
    menu: 'Menu',
    darkMode: 'Dark mode',
  },
  sections: {
    hero: {
      hi: `Hi, I'm`,
      wantToKnowMore: 'Want to know more?',
      what: 'I turn <span>ideas 💡</span> into <span>reality 🚀</span>',
      whatRight: '<span>Imagination ✨</span> is my <span>playground 🛝</span>',
    },
    trustedClients: {
      title: 'They trusted me',
      andMore: 'and more',
    },
    about: {
      title: 'Get to know me',
      start: `Let's start the conversation!`,
      'questions.0.question': 'So, who are you?',
      'questions.0.answer': `I'm a french fullstack developer from Lille 🇫🇷. I spent 7 years in Montreal 🇨🇦, almost a year in Madrid 🇪🇸 and now I'm back in Lille again.<br />I have both French and Canadian citizenships.`,
      'questions.1.question': 'Which languages do you speak?',
      'questions.1.answer': `French is my native language. I have a pretty good level in English and I speak a bit of Spanish.`,
      'questions.2.question': 'Where did you study?',
      'questions.2.answer': `SUPINFO University, in Lille 🇫🇷 where I graduated and got a Master of Science in IT and I have a certification in Systems Security.
      <br />I was also a teacher in the same university:
      <ul>
        <li>B.Sc.1: SEO, SEA, SEM, SMO</li>
        <li>B.Sc.2: PHP, Symfony, AJAX</li>
      </ul>`,
      'questions.3.question': 'Where are you currently working?',
      'questions.3.answer': `I'm working at Strapi, a French company that develops an open-source headless CMS.`,
      'questions.4.question': 'Which tech do you use in your work?',
      'questions.4.answer': `I work with React, React Native and Typescript. But now with AI tools, the field is really open. I bring the experience and AI brings the possibilities.`,
      chatbot: {
        placeholder: 'Type a question about me...',
        fallbackAnswer: `I didn't get or I can't answer the question. Please rephrase and ask again.`,
        ask: 'Ask',
        provideQuestion: 'You have to provide a question.',
        errorOccurred: `An error occurred, please try again later.`,
        errorRecaptcha:
          'Something went wrong with the anti-bot verification. Please try again or refresh the page.',
        disclaimer: `I don't have all answers and can only answer to one question at a time. Please be respectful.`,
        errors: {
          PROVIDE_QUESTION: 'Please enter a question.',
          ANTIBOT_FAILED: 'Anti-robot validation failed.',
          ERROR_DEFAULT: 'Error from the chatbot API.',
        },
      },
      downloadCV: 'Download my resume',
    },
    showcase: {
      title: 'Showcase',
      activeProProjects: 'Active professional projects',
      inactiveProProjects: 'Ghosts professional projects',
      activePersoProjects: 'Active personal projects',
      inactivePersoProjects: 'Ghosts personal projects',
      tags: {
        website: 'website',
        webApp: 'web app',
        mobileApp: 'mobile app',
      },
    },
    contact: {
      title: 'Want to reach me?',
    },
    map: {
      city: 'Lille, FR',
    },
    notFound: {
      subtitle: 'Looks like you took the wrong door.',
      question: 'Hey, where is {{path}}?',
      answer: `Nowhere, I'm afraid 🚪 This page doesn't exist: it moved, or it never did. But since you're here, what would you like to do?`,
      options: {
        home: '🏠 Back to the site',
        ask: '💬 Ask me a question',
        play: '🕹️ Play a game',
      },
      ask: 'Sure, go ahead! Ask me anything about my work.',
      game: {
        rules: `Let's play Bug Squash! Squash the bugs 🐛 before they ship to production, and leave the features ✨ alone. You have {{lives}} lives.`,
        score: 'Score',
        combo: 'Combo',
        lives: 'Lives',
        start: 'Start',
        again: 'Play again',
        over: 'Game over!',
        legend: {
          title: 'Rules:',
          bug: 'Squash',
          feature: `Don't touch`,
        },
        scores: {
          title: 'High scores',
          loading: 'Loading the scores…',
          failed: `The scores can't be loaded right now.`,
          empty: 'No scores yet. Be the first!',
          newHigh: 'New high score: {{score}} points! Enter your initials:',
          save: 'Save',
          saving: 'Saving…',
          errors: {
            format: '3 letters, from A to Z.',
            blocked: 'Please pick other initials.',
            rate: 'Too many tries. Wait a minute, then try again.',
            expired: `This game can't be saved anymore.`,
            failed: `Your score couldn't be saved. Try again.`,
          },
        },
      },
    },
  },
};

export default translations;
