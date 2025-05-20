const translations = {
  metas: {
    description: `I'm Adrien Lepoutre, front-end developer. I create modern websites, web apps and mobile apps.`,
  },
  navbar: {
    clients: 'Clients',
    about: 'About',
    showcase: 'Showcase',
    contact: 'Contact',
    menu: 'Menu',
  },
  sections: {
    hero: {
      hi: `Hi, I'm`,
      wantToKnowMore: 'Want to know more?',
      what: 'I create <span>websites</span>, <span>web apps</span> and <span>mobile apps</span>',
    },
    trustedClients: {
      title: 'They trusted me',
      andMore: 'and more',
    },
    about: {
      title: 'Get to know me',
      start: `Let's start the conversation!`,
      'questions.0.question': 'So, who are you?',
      'questions.0.answer': `I'm a french front-end developer from Lille (France). I spent 7 years in Montreal (CA) and now I live in Madrid (SP).<br />I have both French and Canadian citizenships.`,
      'questions.1.question': 'Which languages do you speak?',
      'questions.1.answer': `French is my native language. I have a pretty good level in English and I speak a bit of Spanish.`,
      'questions.2.question': 'Where did you study?',
      'questions.2.answer': `SUPINFO University, in Lille (FR) where I graduated and got a Master of Science in IT and I have a certification in Systems Security.
      <br />I was also a teacher in the same university:
      <ul>
        <li>B.Sc.1: SEO, SEA, SEM, SMO</li>
        <li>B.Sc.2: PHP, Symfony, AJAX</li>
      </ul>`,
      'questions.3.question': 'Where are you currently working?',
      'questions.3.answer': `I'm working at Strapi, a French company that develops an open-source headless CMS.`,
      'questions.4.question': 'Which tech do you use in your work?',
      'questions.4.answer': `I work with React, React Native and Typescript. I also have a solid knowledge in design with Sass and a bit in unit testing (with Jest and Testing Library).`,
      chatbot: {
        placeholder: 'Type your question...',
        fallbackAnswer: `I didn't get or I can't answer the question. Please rephrase and ask again.`,
        ask: 'Ask',
        provideQuestion: 'You have to provide a question.',
        errorOccurred: `An error occurred, please try again later.`,
        errorRecaptcha:
          'Something went wrong with the anti-bot verification. Please try again or refresh the page.',
        disclaimer: `I don't have all answers and can only answer to one question at a time. The first request could be a bit longer to process. Please be respectful.`,
        errors: {
          PROVIDE_QUESTION: 'Please enter a question.',
          ANTIBOT_FAILED: 'Anti-robot validation failed.',
          ERROR_DEFAULT: 'Error from the chatbot API.',
        },
      },
      downloadCV: 'Download my CV',
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
      city: 'Madrid, Spain',
    },
  },
};

export default translations;
