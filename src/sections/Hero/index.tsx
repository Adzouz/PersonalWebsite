// Libraries
import { useTranslation } from 'react-i18next';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import BackgroundShape from './BackgroundShape';
import TiltElement from '../../components/TiltElement';

// Styles
import styles from './Hero.module.scss';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <AppearOnScroll>
      <section className={styles.container} id={styles.hero}>
        <span className={styles.background} />
        <BackgroundShape />
        <TiltElement>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {t('sections.hero.hi')} <span>Adrien LEPOUTRE</span>
            </h1>
            <p
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: t('sections.hero.what') }}
            />
          </div>
        </TiltElement>
        <div className={styles.button}>
          <a href="#clients">{t('sections.hero.wantToKnowMore')}</a>
        </div>
      </section>
    </AppearOnScroll>
  );
};

export default Hero;
