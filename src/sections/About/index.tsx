// Libraries
import { useTranslation } from 'react-i18next';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import Chatbot from '../../components/Chatbot';
import Questions from './Questions';

// Styles
import styles from './About.module.scss';

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <AppearOnScroll>
      <section id="about" className={styles.section}>
        <h2>{t('sections.about.title')}</h2>
        <p>{t('sections.about.start')}</p>
        <ul className={styles.messages}>
          <Questions />
          <Chatbot />
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
