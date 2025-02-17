// Components
import { useTranslation } from 'react-i18next';
import AppearOnScroll from '../../components/AppearOnScroll';
import TiltElement from '../../components/TiltElement';
import WorldMap from '../../components/WorldMap';

// Styles
import styles from './Map.module.scss';

const Map = () => {
  const { t } = useTranslation();
  return (
    <AppearOnScroll>
      <div className={styles.mapContainer}>
        <span className={styles.shapeContainer} />
        <div className={styles.worldMap}>
          <WorldMap />
          <div className={styles.cityContainer}>
            <TiltElement>
              <div className={styles.city}>
                <span>{t('sections.map.city')}</span>
              </div>
            </TiltElement>
          </div>
        </div>
      </div>
    </AppearOnScroll>
  );
};

export default Map;
