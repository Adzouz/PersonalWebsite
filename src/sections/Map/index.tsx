// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import WorldMap from '../../components/WorldMap';

// Styles
import styles from './Map.module.scss';

const Map = () => {
  return (
    <AppearOnScroll>
      <div className={styles.mapContainer}>
        <span className={styles.shapeContainer} />
        <div className={styles.worldMap}>
          <WorldMap />
        </div>
      </div>
    </AppearOnScroll>
  );
};

export default Map;
