import styles from './About.module.scss';

const BackgroundShape = () => (
  <span className={styles.shapeContainer}>
    <svg
      width="2455"
      height="924"
      viewBox="0 0 2455 924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ii_8_9)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1057.52 1.35342C984.167 -3.07589 895.626 8.83611 834.094 60.17C774.209 110.131 736.424 172.881 728.05 245.022C719.873 315.465 741.065 383.291 776.46 443.106C793.086 471.201 813.441 498.599 836.914 525.105C760.473 524.971 680.331 505.242 598.657 471.444C424.795 399.497 261.68 270.437 150.07 171.067C113.008 138.07 56.2178 141.374 23.2302 178.443C-9.75292 215.507 -6.4531 272.296 30.6038 305.289C146.337 408.33 327.63 553.762 529.964 637.491C680.166 699.647 851.64 731.369 1017.71 676.789C1057.4 702.635 1100.08 726.987 1145 749.524C1473.04 914.074 1958.4 999.847 2396.48 833.834C2442.88 816.25 2466.23 764.38 2448.66 717.983C2431.08 671.583 2379.22 648.207 2332.82 665.793C1952.41 809.951 1520.01 736.602 1225.55 588.896C1217.09 584.649 1208.76 580.354 1200.59 576.018C1310.42 488.941 1377.76 399.492 1391.73 306.837C1407.6 201.474 1351.32 122.582 1283.94 75.4501C1218.4 29.6081 1134.08 5.97634 1057.52 1.35342ZM949.184 198.163C959.196 189.811 992.087 177.429 1046.69 180.726C1098.14 183.833 1148.47 199.983 1180.96 222.708C1196.64 233.672 1205.32 243.849 1209.86 252.622C1214.14 260.898 1215.63 269.608 1214.06 280.053C1210.02 306.883 1183.39 362.634 1078.86 443.096C1065.73 453.206 1052.45 462.259 1039.04 470.319C989.354 429.512 953.162 388.895 931.082 351.581C909.339 314.837 904.129 286.372 906.523 265.746C908.722 246.803 918.488 223.773 949.184 198.163Z"
          className={styles.shape}
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_8_9"
          x="-4.50037"
          y="-4.49646"
          width="2464.01"
          height="933.005"
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
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_8_9" />
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
            in2="effect1_innerShadow_8_9"
            result="effect2_innerShadow_8_9"
          />
        </filter>
      </defs>
    </svg>
  </span>
);

export default BackgroundShape;
