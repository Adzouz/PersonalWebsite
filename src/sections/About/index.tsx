// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import BackgroundShape from './BackgroundShape';
import Questions from './Questions';
import { ClearIcon } from '../../components/Icons';

// Styles
import styles from './About.module.scss';

const About = () => {
  const { t, i18n } = useTranslation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [questionFocused, setQuestionFocused] = useState(false);

  const recaptchaSiteKey = process.env
    .REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY as string;

  const lang = i18n.language;

  const loadRecaptchaScript = () => {
    const scriptUrl = 'https://www.google.com/recaptcha/api.js';
    if (!document.querySelector(`script[src^="${scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.src = `${scriptUrl}?render=${recaptchaSiteKey}`;
      script.defer = true;
      document.body.appendChild(script);
    }
  };

  const formatLinks = (text: string) => {
    const urlRegex = /([hH]ttps?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  };

  const resetAll = () => {
    setQuestion('');
    setAnswer('');
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
                body: JSON.stringify({ question, lang }),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response) => response.json())
                .then((data: { answer: string }) => {
                  if (data.answer) {
                    setAnswer(formatLinks(data.answer));
                  } else {
                    setAnswer(t('sections.about.chatbot.fallbackAnswer'));
                  }
                  setIsLoading(false);
                })
                .catch((error) => {
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

  const handleFocus = () => {
    loadRecaptchaScript();
    setQuestionFocused(true);
  };

  return (
    <AppearOnScroll>
      <section id="about" className={styles.container}>
        <h2>{t('sections.about.title')}</h2>
        <p>{t('sections.about.start')}</p>
        <BackgroundShape />
        <ul className={styles.messages}>
          <Questions />
          <li
            className={clsx([
              styles.chatbotQuestion,
              (questionFocused || question) && styles.chatbotQuestionFocused,
            ])}
          >
            <div className={styles.questionInput}>
              <div className={styles.textareaContainer}>
                <textarea
                  placeholder={t('sections.about.chatbot.placeholder')}
                  onInput={(e) => setQuestion(e.currentTarget.value)}
                  value={question}
                  onFocus={() => handleFocus()}
                  onBlur={() => setQuestionFocused(false)}
                />
              </div>
              {error ? (
                <div className={styles.errorMessage}>{error}</div>
              ) : (
                <div className={styles.infoMessage}>
                  {t('sections.about.chatbot.disclaimer')}
                </div>
              )}
            </div>
            <div className={styles.buttons}>
              {question && (
                <button onClick={() => handleAsk()}>
                  {t('sections.about.chatbot.ask')}
                </button>
              )}
              {question && (
                <button onClick={() => resetAll()}>
                  <ClearIcon />
                </button>
              )}
            </div>
            <div className={styles.recaptcha}>
              <div
                className="g-recaptcha"
                data-sitekey={recaptchaSiteKey}
                data-size="invisible"
              ></div>
            </div>
          </li>
          {(isLoading || answer) && (
            <li className={clsx([styles.answer, styles.answerBot])}>
              {isLoading ? (
                <div className={styles.loading}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              )}
            </li>
          )}
        </ul>
      </section>
    </AppearOnScroll>
  );
};

export default About;
