// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import TiltElement from '../../components/TiltElement';
import WorldMap from '../../components/WorldMap';

// Styles
import styles from './Map.module.scss';

const Map = () => {
  return (
    <AppearOnScroll>
      <section id={styles.map}>
        <span className={styles.shapeContainer} />
        <div className={styles.worldMap}>
          <WorldMap />
          <div className={styles.cityContainer}>
            <TiltElement>
              <div className={styles.city}>
                <span>Montreal, CA</span>
              </div>
            </TiltElement>
          </div>
        </div>
      </section>
    </AppearOnScroll>
  );
};

export default Map;
