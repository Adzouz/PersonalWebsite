import styles from '../Svg.module.scss';

const AngularJSIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
    <title>AngularJS</title>
    <g>
      <path
        className={styles.darkColor}
        d="M50,0l50,14-8,66-42,20-42-20L0,14,50,0Z"
      />
      <path className={styles.lightColor} d="M50,5L6,18l7.5,59,36.5,17V5Z" />
      <path className={styles.lightColor} d="M50,5l44,13-7.5,59-36.5,17V5Z" />
      <path
        className={styles.darkColor}
        d="M50,7l33,68h-11l-7-16h-15v-9h11l-11-24V7Z"
      />
      <path
        className={styles.darkColor}
        d="M50,7L17,75h11l7-16h15v-9h-11l11-24V7Z"
      />
    </g>
  </svg>
);

export default AngularJSIcon;
