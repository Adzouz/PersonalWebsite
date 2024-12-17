import styles from './Hero.module.scss';

const BackgroundShape = () => (
  <span className={styles.shapeContainer}>
    <svg
      width="1327"
      height="724"
      viewBox="0 0 1327 724"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_12_28)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1146.64 8.19182C1192.65 -11.3345 1245.78 10.1346 1265.31 56.1444C1310.46 162.528 1353.95 334.002 1304.17 477.776C1277.6 554.511 1224.53 622.219 1137.14 662.636C1052.75 701.666 944.757 711.409 812.732 692.595C573.503 658.503 407.628 656.989 299.173 667.537C244.907 672.815 206.406 680.981 180.961 688.867C158.953 695.688 151.189 700.917 151.082 700.764C151.075 700.754 151.099 700.723 151.152 700.669C114.745 733.572 58.5323 731.481 24.6836 695.616C-9.62224 659.267 -7.96545 601.989 28.3841 567.683C53.7704 543.724 90.0965 527.534 127.38 515.98C167.326 503.6 218.406 493.539 281.652 487.387C408.222 475.077 589.097 477.897 838.268 513.405C950.443 529.391 1019.69 517.534 1061.16 498.355C1099.64 480.562 1121.05 453.451 1133.13 418.549C1160.66 339.047 1138.21 219.972 1098.69 126.855C1079.17 80.8456 1100.63 27.7181 1146.64 8.19182Z"
          className={styles.shape}
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_12_28"
          x="-5"
          y="-4.02344"
          width="1336.31"
          height="733.023"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-5" dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.886275 0 0 0 0 0.909804 0 0 0 0 0.890196 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_12_28"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.768627 0 0 0 0 0.792157 0 0 0 0 0.772549 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_12_28"
            result="effect2_innerShadow_12_28"
          />
        </filter>
      </defs>
    </svg>
  </span>
);

export default BackgroundShape;
