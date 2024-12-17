import styles from '../Svg.module.scss';

const TurborepoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 23.1 23.1">
    <title>Turborepo</title>
    <path
      className={styles.lightColor}
      d="M11.6,4c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5,7.5-3.4,7.5-7.5-3.4-7.5-7.5-7.5ZM11.6,15.5c-2.1,0-3.9-1.7-3.9-3.9s1.7-3.9,3.9-3.9,3.9,1.7,3.9,3.9-1.7,3.9-3.9,3.9Z"
    />
    <path
      className={styles.darkColor}
      d="M12.2,2.8V0c6.1.3,10.9,5.4,10.9,11.6s-4.8,11.2-10.9,11.6v-2.8c4.5-.3,8.1-4.1,8.1-8.8S16.7,3.1,12.2,2.8ZM4.9,17.3c-1.2-1.4-2-3.2-2.1-5.1H0c.1,2.7,1.2,5.2,2.9,7.1l2-2h0ZM10.9,23.1v-2.8c-1.9-.1-3.7-.9-5.1-2.1l-2,2c1.9,1.7,4.4,2.8,7.1,2.9h0Z"
    />
  </svg>
);

export default TurborepoIcon;
