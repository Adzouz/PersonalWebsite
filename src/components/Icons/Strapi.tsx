import styles from '../Svg.module.scss';

const StrapiIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Strapi</title>
    <path
      className={styles.lightColor}
      d="M0 22.1867C0 11.7278 0 6.49832 3.24916 3.24916C6.49832 0 11.7278 0 22.1867 0H41.8133C52.2722 0 57.5017 0 60.7508 3.24916C64 6.49832 64 11.7278 64 22.1867V41.8133C64 52.2722 64 57.5017 60.7508 60.7508C57.5017 64 52.2722 64 41.8133 64H22.1867C11.7278 64 6.49832 64 3.24916 60.7508C0 57.5017 0 52.2722 0 41.8133V22.1867Z"
    />
    <path
      className={styles.darkColor}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.156 19.4131H22.6094V30.4004H33.596V41.3864H44.5827V19.8398C44.5827 19.6041 44.3917 19.4131 44.156 19.4131Z"
    />
    <rect
      className={styles.darkColor}
      x="33.1719"
      y="30.4004"
      width="0.426667"
      height="0.426667"
    />
    <path
      className={styles.backgroundColor}
      d="M22.6172 30.4004H33.1772C33.4128 30.4004 33.6039 30.5914 33.6039 30.8271V41.3871H23.0439C22.8082 41.3871 22.6172 41.196 22.6172 40.9604V30.4004Z"
    />
    <path
      className={styles.backgroundColor}
      d="M33.6016 41.3867H44.5882L33.9657 52.0092C33.8314 52.1436 33.6016 52.0484 33.6016 51.8584V41.3867Z"
    />
    <path
      className={styles.backgroundColor}
      d="M22.6151 30.3998H12.1434C11.9534 30.3998 11.8582 30.17 11.9926 30.0356L22.6151 19.4131V30.3998Z"
    />
  </svg>
);

export default StrapiIcon;
