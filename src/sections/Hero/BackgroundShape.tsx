import styles from './Hero.module.scss';

const BackgroundShape = () => (
  <span className={styles.shapeContainer}>
    <svg
      width="635"
      height="568"
      viewBox="0 0 635 568"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_12_28)">
        <path
          d="M103.92 477.97L265.47 198.16L213.51 108.16L0 477.97L51.96 567.97H478.98L427.02 477.97H103.92Z"
          className={styles.shape}
        />
        <path
          d="M580.07 383.06L528.11 293.06L358.91 0H254.98L424.19 293.06H314.6L262.64 383.06H476.15L582.9 567.97L634.86 477.97L580.07 383.06Z"
          className={styles.shape}
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_12_28"
          x="-5"
          y="-5"
          width="644.86"
          height="577.97"
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
