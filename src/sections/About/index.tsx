// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import BackgroundShape from './BackgroundShape';
import Chatbot from '../../components/Chatbot';
import Questions from './Questions';

// Styles
import styles from './About.module.scss';

const About = () => {
  const { t, i18n } = useTranslation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const currentLang = i18n.language;

  const recaptchaSiteKey = process.env
    .REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY as string;

  const lang = i18n.language;

  const formatLinks = (text: string) => {
    const urlRegex = /([hH]ttps?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  };

  const resetAll = () => {
    setQuestion('');
    setAnswer('');
    setIsLoading(false);
    setError(null);
  };

  const handleAsk = async () => {
    if (!question) {
      setError(t('sections.about.chatbot.provideQuestion'));
      return;
    }
    if (window.grecaptcha) {
      setError(null);
      setIsLoading(true);
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(recaptchaSiteKey, {
            action: 'homepage',
          })
          .then((token) => {
            if (token) {
              fetch(`${process.env.REACT_APP_CHATBOT_URL}/ask`, {
                method: 'POST',
                body: JSON.stringify({ question, lang, token }),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response) => response.json())
                .then((data: { answer?: string; error?: string }) => {
                  setIsLoading(false);
                  if (data.error) {
                    setAnswer('');
                    setError(t(`sections.about.chatbot.errors.${data.error}`));
                    return;
                  }
                  if (data.answer) {
                    setAnswer(formatLinks(data.answer));
                  } else {
                    setAnswer(t('sections.about.chatbot.fallbackAnswer'));
                  }
                })
                .catch((error) => {
                  setAnswer('');
                  setError(t('sections.about.chatbot.errorOccurred'));
                  console.error('Error with chatbot:', error);
                  setIsLoading(false);
                });
            } else {
              setError(t('sections.about.chatbot.errorRecaptcha'));
            }
          });
      });
    } else {
      setError(t('sections.about.chatbot.errorRecaptcha'));
    }
  };

  return (
    <AppearOnScroll>
      <section id="about" className={styles.section}>
        <h2>{t('sections.about.title')}</h2>
        <p>{t('sections.about.start')}</p>
        <BackgroundShape />
        <ul className={styles.messages}>
          <Questions />
          <Chatbot
            answer={answer}
            error={error}
            handleAsk={handleAsk}
            isLoading={isLoading}
            question={question}
            resetAll={resetAll}
            setQuestion={setQuestion}
          />
        </ul>
        <div className={styles.button}>
          <a
            href={`https://medias.thewebsdoor.com/resume-public-${currentLang}.pdf`}
            target="_blank"
          >
            {t('sections.about.downloadCV')}
          </a>
        </div>
      </section>
    </AppearOnScroll>
  );
};

export default About;
