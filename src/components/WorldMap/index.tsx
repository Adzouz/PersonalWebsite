// Libraries
import clsx from 'clsx';

// Styles
import { default as globalStyles } from '../Svg.module.scss';
import styles from './WorldMap.module.scss';

const WorldMap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 88 45">
    <path
      className={globalStyles.lightColor}
      d="M0,8h1v1H0v-1h0ZM0,10h1v1H0v-1h0ZM2,8h1v1h-1v-1h0ZM2,10h1v1h-1v-1h0ZM2,12h1v1h-1v-1h0ZM4,8h1v1h-1v-1h0ZM4,10h1v1h-1v-1h0ZM6,8h1v1h-1v-1h0ZM6,10h1v1h-1v-1h0ZM4,12h1v1h-1v-1h0ZM8,8h1v1h-1v-1h0ZM8,10h1v1h-1v-1h0ZM8,12h1v1h-1v-1h0ZM10,8h1v1h-1v-1h0ZM10,10h1v1h-1v-1h0ZM10,12h1v1h-1v-1h0ZM10,14h1v1h-1v-1h0ZM10,16h1v1h-1v-1h0ZM12,4h1v1h-1v-1h0ZM12,6h1v1h-1v-1h0ZM12,8h1v1h-1v-1h0ZM12,10h1v1h-1v-1h0ZM12,12h1v1h-1v-1h0ZM12,14h1v1h-1v-1h0ZM12,16h1v1h-1v-1h0ZM12,18h1v1h-1v-1h0ZM12,20h1v1h-1v-1h0ZM14,4h1v1h-1v-1h0ZM16,2h1v1h-1v-1h0ZM14,6h1v1h-1v-1h0ZM14,8h1v1h-1v-1h0ZM14,10h1v1h-1v-1h0ZM14,12h1v1h-1v-1h0ZM14,14h1v1h-1v-1h0ZM14,16h1v1h-1v-1h0ZM14,18h1v1h-1v-1h0ZM14,20h1v1h-1v-1h0ZM14,22h1v1h-1v-1h0ZM16,6h1v1h-1v-1h0ZM16,8h1v1h-1v-1h0ZM16,10h1v1h-1v-1h0ZM16,12h1v1h-1v-1h0ZM16,14h1v1h-1v-1h0ZM16,16h1v1h-1v-1h0ZM16,18h1v1h-1v-1h0ZM16,20h1v1h-1v-1h0ZM16,22h1v1h-1v-1h0ZM16,24h1v1h-1v-1h0ZM18,2h1v1h-1v-1h0ZM18,4h1v1h-1v-1h0ZM18,6h1v1h-1v-1h0ZM20,6h1v1h-1v-1h0ZM22,6h1v1h-1v-1h0ZM18,8h1v1h-1v-1h0ZM18,14h1v1h-1v-1h0ZM18,16h1v1h-1v-1h0ZM18,18h1v1h-1v-1h0ZM18,20h1v1h-1v-1h0ZM20,14h1v1h-1v-1h0ZM20,16h1v1h-1v-1h0ZM20,18h1v1h-1v-1h0ZM20,20h1v1h-1v-1h0ZM20,26h1v1h-1v-1h0ZM22,26h1v1h-1v-1h0ZM24,26h1v1h-1v-1h0ZM26,26h1v1h-1v-1h0ZM22,28h1v1h-1v-1h0ZM24,28h1v1h-1v-1h0ZM26,28h1v1h-1v-1h0ZM28,28h1v1h-1v-1h0ZM22,30h1v1h-1v-1h0ZM24,30h1v1h-1v-1h0ZM26,30h1v1h-1v-1h0ZM28,30h1v1h-1v-1h0ZM30,30h1v1h-1v-1h0ZM22,32h1v1h-1v-1h0ZM24,32h1v1h-1v-1h0ZM26,32h1v1h-1v-1h0ZM28,32h1v1h-1v-1h0ZM24,34h1v1h-1v-1h0ZM26,34h1v1h-1v-1h0ZM28,34h1v1h-1v-1h0ZM24,36h1v1h-1v-1h0ZM26,36h1v1h-1v-1h0ZM24,38h1v1h-1v-1h0ZM24,40h1v1h-1v-1h0ZM24,42h1v1h-1v-1h0ZM26,44h1v1h-1v-1h0ZM26,38h1v1h-1v-1h0ZM28,36h1v1h-1v-1h0ZM30,32h1v1h-1v-1h0ZM22,12h1v1h-1v-1h0ZM22,14h1v1h-1v-1h0ZM22,8h1v1h-1v-1h0ZM22,10h1v1h-1v-1h0ZM22,16h1v1h-1v-1h0ZM24,12h1v1h-1v-1h0ZM24,14h1v1h-1v-1h0ZM24,8h1v1h-1v-1h0ZM24,10h1v1h-1v-1h0ZM24,16h1v1h-1v-1h0ZM26,14h1v1h-1v-1h0ZM26,16h1v1h-1v-1h0ZM22,18h1v1h-1v-1h0ZM18,24h1v1h-1v-1h0ZM20,0h1v1h-1V0h0ZM20,2h1v1h-1v-1h0ZM22,0h1v1h-1V0h0ZM22,2h1v1h-1v-1h0ZM24,2h1v1h-1v-1h0ZM26,2h1v1h-1v-1h0ZM26,4h1v1h-1v-1h0ZM28,2h1v1h-1v-1h0ZM30,2h1v1h-1v-1h0ZM32,2h1v1h-1v-1h0ZM34,2h1v1h-1v-1h0ZM36,2h1v1h-1v-1h0ZM45,2h1v1h-1v-1h0ZM47,2h1v1h-1v-1h0ZM28,4h1v1h-1v-1h0ZM30,4h1v1h-1v-1h0ZM32,4h1v1h-1v-1h0ZM34,4h1v1h-1v-1h0ZM28,6h1v1h-1v-1h0ZM30,6h1v1h-1v-1h0ZM28,8h1v1h-1v-1h0ZM30,8h1v1h-1v-1h0ZM30,10h1v1h-1v-1h0ZM32,6h1v1h-1v-1h0ZM34,6h1v1h-1v-1h0ZM36,4h1v1h-1v-1h0ZM39,14h1v1h-1v-1h0ZM39,22h1v1h-1v-1h0ZM39,24h1v1h-1v-1h0ZM39,26h1v1h-1v-1h0ZM41,22h1v1h-1v-1h0ZM41,24h1v1h-1v-1h0ZM41,26h1v1h-1v-1h0ZM43,22h1v1h-1v-1h0ZM43,24h1v1h-1v-1h0ZM43,26h1v1h-1v-1h0ZM45,22h1v1h-1v-1h0ZM41,20h1v1h-1v-1h0ZM43,20h1v1h-1v-1h0ZM43,16h1v1h-1v-1h0ZM43,14h1v1h-1v-1h0ZM45,20h1v1h-1v-1h0ZM45,24h1v1h-1v-1h0ZM45,26h1v1h-1v-1h0ZM45,30h1v1h-1v-1h0ZM45,28h1v1h-1v-1h0ZM45,32h1v1h-1v-1h0ZM47,22h1v1h-1v-1h0ZM47,20h1v1h-1v-1h0ZM47,24h1v1h-1v-1h0ZM47,26h1v1h-1v-1h0ZM47,30h1v1h-1v-1h0ZM47,28h1v1h-1v-1h0ZM47,32h1v1h-1v-1h0ZM49,22h1v1h-1v-1h0ZM49,24h1v1h-1v-1h0ZM49,26h1v1h-1v-1h0ZM49,30h1v1h-1v-1h0ZM49,28h1v1h-1v-1h0ZM51,26h1v1h-1v-1h0ZM53,26h1v1h-1v-1h0ZM51,30h1v1h-1v-1h0ZM51,28h1v1h-1v-1h0ZM49,32h1v1h-1v-1h0ZM53,34h1v1h-1v-1h0ZM53,36h1v1h-1v-1h0ZM47,34h1v1h-1v-1h0ZM47,36h1v1h-1v-1h0ZM45,8h1v1h-1v-1h0ZM45,10h1v1h-1v-1h0ZM45,14h1v1h-1v-1h0ZM45,12h1v1h-1v-1h0ZM45,16h1v1h-1v-1h0ZM47,8h1v1h-1v-1h0ZM47,10h1v1h-1v-1h0ZM47,14h1v1h-1v-1h0ZM47,12h1v1h-1v-1h0ZM49,8h1v1h-1v-1h0ZM49,10h1v1h-1v-1h0ZM49,14h1v1h-1v-1h0ZM49,12h1v1h-1v-1h0ZM51,8h1v1h-1v-1h0ZM51,10h1v1h-1v-1h0ZM51,14h1v1h-1v-1h0ZM53,16h1v1h-1v-1h0ZM51,12h1v1h-1v-1h0ZM53,8h1v1h-1v-1h0ZM53,10h1v1h-1v-1h0ZM53,14h1v1h-1v-1h0ZM53,12h1v1h-1v-1h0ZM55,8h1v1h-1v-1h0ZM55,10h1v1h-1v-1h0ZM55,14h1v1h-1v-1h0ZM55,12h1v1h-1v-1h0ZM57,8h1v1h-1v-1h0ZM57,10h1v1h-1v-1h0ZM57,14h1v1h-1v-1h0ZM57,12h1v1h-1v-1h0ZM59,8h1v1h-1v-1h0ZM59,10h1v1h-1v-1h0ZM59,14h1v1h-1v-1h0ZM59,12h1v1h-1v-1h0ZM61,8h1v1h-1v-1h0ZM61,10h1v1h-1v-1h0ZM61,14h1v1h-1v-1h0ZM61,12h1v1h-1v-1h0ZM63,8h1v1h-1v-1h0ZM63,10h1v1h-1v-1h0ZM63,14h1v1h-1v-1h0ZM63,12h1v1h-1v-1h0ZM65,8h1v1h-1v-1h0ZM65,10h1v1h-1v-1h0ZM65,14h1v1h-1v-1h0ZM65,12h1v1h-1v-1h0ZM67,8h1v1h-1v-1h0ZM67,10h1v1h-1v-1h0ZM67,14h1v1h-1v-1h0ZM67,12h1v1h-1v-1h0ZM69,8h1v1h-1v-1h0ZM69,10h1v1h-1v-1h0ZM69,14h1v1h-1v-1h0ZM51,20h1v1h-1v-1h0ZM53,20h1v1h-1v-1h0ZM55,20h1v1h-1v-1h0ZM57,20h1v1h-1v-1h0ZM59,20h1v1h-1v-1h0ZM61,20h1v1h-1v-1h0ZM63,20h1v1h-1v-1h0ZM65,20h1v1h-1v-1h0ZM67,20h1v1h-1v-1h0ZM69,20h1v1h-1v-1h0ZM53,22h1v1h-1v-1h0ZM55,22h1v1h-1v-1h0ZM57,22h1v1h-1v-1h0ZM59,22h1v1h-1v-1h0ZM61,22h1v1h-1v-1h0ZM61,24h1v1h-1v-1h0ZM61,26h1v1h-1v-1h0ZM63,22h1v1h-1v-1h0ZM65,22h1v1h-1v-1h0ZM67,22h1v1h-1v-1h0ZM65,24h1v1h-1v-1h0ZM67,24h1v1h-1v-1h0ZM67,26h1v1h-1v-1h0ZM67,28h1v1h-1v-1h0ZM69,28h1v1h-1v-1h0ZM71,28h1v1h-1v-1h0ZM69,30h1v1h-1v-1h0ZM71,30h1v1h-1v-1h0ZM76,30h1v1h-1v-1h0ZM78,30h1v1h-1v-1h0ZM69,22h1v1h-1v-1h0ZM69,12h1v1h-1v-1h0ZM71,8h1v1h-1v-1h0ZM71,10h1v1h-1v-1h0ZM71,14h1v1h-1v-1h0ZM71,12h1v1h-1v-1h0ZM73,8h1v1h-1v-1h0ZM73,10h1v1h-1v-1h0ZM73,14h1v1h-1v-1h0ZM57,16h1v1h-1v-1h0ZM59,16h1v1h-1v-1h0ZM61,16h1v1h-1v-1h0ZM63,16h1v1h-1v-1h0ZM65,16h1v1h-1v-1h0ZM67,16h1v1h-1v-1h0ZM69,16h1v1h-1v-1h0ZM71,16h1v1h-1v-1h0ZM73,16h1v1h-1v-1h0ZM69,34h1v1h-1v-1h0ZM71,34h1v1h-1v-1h0ZM73,34h1v1h-1v-1h0ZM75,34h1v1h-1v-1h0ZM69,36h1v1h-1v-1h0ZM71,36h1v1h-1v-1h0ZM73,36h1v1h-1v-1h0ZM75,36h1v1h-1v-1h0ZM77,34h1v1h-1v-1h0ZM77,36h1v1h-1v-1h0ZM73,38h1v1h-1v-1h0ZM75,38h1v1h-1v-1h0ZM77,38h1v1h-1v-1h0ZM79,38h1v1h-1v-1h0ZM83,38h1v1h-1v-1h0ZM83,40h1v1h-1v-1h0ZM57,18h1v1h-1v-1h0ZM59,18h1v1h-1v-1h0ZM61,18h1v1h-1v-1h0ZM63,18h1v1h-1v-1h0ZM65,18h1v1h-1v-1h0ZM67,18h1v1h-1v-1h0ZM69,18h1v1h-1v-1h0ZM71,18h1v1h-1v-1h0ZM73,12h1v1h-1v-1h0ZM75,8h1v1h-1v-1h0ZM75,10h1v1h-1v-1h0ZM75,14h1v1h-1v-1h0ZM75,12h1v1h-1v-1h0ZM77,8h1v1h-1v-1h0ZM55,6h1v1h-1v-1h0ZM57,6h1v1h-1v-1h0ZM55,4h1v1h-1v-1h0ZM57,4h1v1h-1v-1h0ZM59,6h1v1h-1v-1h0ZM61,6h1v1h-1v-1h0ZM63,6h1v1h-1v-1h0ZM65,6h1v1h-1v-1h0ZM67,6h1v1h-1v-1h0ZM63,4h1v1h-1v-1h0ZM65,4h1v1h-1v-1h0ZM65,2h1v1h-1v-1h0ZM67,4h1v1h-1v-1h0ZM69,6h1v1h-1v-1h0ZM71,6h1v1h-1v-1h0ZM73,6h1v1h-1v-1h0ZM75,6h1v1h-1v-1h0ZM77,6h1v1h-1v-1h0ZM77,4h1v1h-1v-1h0ZM77,10h1v1h-1v-1h0ZM79,8h1v1h-1v-1h0ZM79,10h1v1h-1v-1h0ZM81,8h1v1h-1v-1h0ZM81,10h1v1h-1v-1h0ZM83,8h1v1h-1v-1h0ZM85,8h1v1h-1v-1h0ZM87,8h1v1h-1v-1h0ZM83,10h1v1h-1v-1h0ZM81,12h1v1h-1v-1h0ZM47,16h1v1h-1v-1h0ZM49,18h1v1h-1v-1h0ZM51,18h1v1h-1v-1h0ZM41,16h1v1h-1v-1h0ZM41,12h1v1h-1v-1h0Z"
    />
    <rect
      className={clsx([globalStyles.darkColor, styles.dot])}
      x="24"
      y="14"
      width="1"
      height="1"
    />
  </svg>
);

export default WorldMap;
