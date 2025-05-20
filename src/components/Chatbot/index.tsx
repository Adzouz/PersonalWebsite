// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

// Components
import { ClearIcon } from '../Icons';

// Styles
import aboutStyles from '../../sections/About/About.module.scss';
import styles from './Chatbot.module.scss';

interface ChatbotQuestionProps {
  answer: string;
  error: string | null;
  handleAsk: () => void;
  isLoading: boolean;
  question: string;
  resetAll: () => void;
  setQuestion: (question: string) => void;
}

const ChatbotQuestion = ({
  answer,
  error,
  handleAsk,
  isLoading,
  question,
  resetAll,
  setQuestion,
}: ChatbotQuestionProps) => {
  const { t } = useTranslation();
  const [questionFocused, setQuestionFocused] = useState(false);

  const recaptchaSiteKey = process.env
    .REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY as string;

  const loadRecaptchaScript = () => {
    const scriptUrl = 'https://www.google.com/recaptcha/api.js';
    if (!document.querySelector(`script[src^="${scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.src = `${scriptUrl}?render=${recaptchaSiteKey}`;
      script.defer = true;
      document.body.appendChild(script);
    }
  };

  const handleFocus = () => {
    loadRecaptchaScript();
    setQuestionFocused(true);
  };

  return (
    <>
      <li className={styles.chatbotQuestion}>
        <div className={styles.questionInput}>
          <div className={styles.textareaContainer}>
            <textarea
              placeholder={t('sections.about.chatbot.placeholder')}
              onInput={(e) => setQuestion(e.currentTarget.value)}
              value={question}
              onFocus={() => handleFocus()}
              onBlur={() => setQuestionFocused(false)}
              className={questionFocused || question ? styles.focused : ''}
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
        <li className={clsx([aboutStyles.answer, styles.answerBot])}>
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
    </>
  );
};

export default ChatbotQuestion;
