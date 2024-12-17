import styles from '../Svg.module.scss';

const StrapiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 600">
    <title>Strapi</title>
    <path
      className={styles.lightColor}
      d="M0,208C0,109.9,0,60.9,30.5,30.5S109.9,0,208,0h184c98.1,0,147.1,0,177.5,30.5s30.5,79.5,30.5,177.5v184c0,98.1,0,147.1-30.5,177.5s-79.5,30.5-177.5,30.5h-184c-98.1,0-147.1,0-177.5-30.5S0,490.1,0,392v-184Z"
    />
    <path
      className={styles.darkColor}
      d="M414,182h-202l-99.6,99.6c-1.3,1.3-.4,3.4,1.4,3.4h98.2v99c0,2.2,1.8,4,4,4h99v98.2c0,1.8,2.2,2.7,3.4,1.4l99.6-99.6v-202c0-2.2-1.8-4-4-4Z"
    />
  </svg>
);

export default StrapiIcon;
