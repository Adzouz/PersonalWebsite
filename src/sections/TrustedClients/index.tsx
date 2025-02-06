// Libraries
import { useTranslation } from 'react-i18next';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import {
  AdeoLogo,
  BotaBotaLogo,
  DecathlonLogo,
  DesjardinsLogo,
  DevimcoLogo,
  FashionCubeLogo,
  FondsFTQLogo,
  HobbynoteLogo,
  M6Logo,
  PublicisLogo,
  ResistoLogo,
  TheBookEditionLogo,
  UbisoftLogo,
  ViaRailLogo,
} from '../../components/Logos';

// Styles
import styles from './TrustedClients.module.scss';

const TrustedClients = () => {
  const { t } = useTranslation();
  const trustedClients = [
    {
      name: 'Adeo',
      logo: <AdeoLogo />,
    },
    {
      name: 'Bota Bota',
      logo: <BotaBotaLogo />,
    },
    {
      name: 'Decathlon',
      logo: <DecathlonLogo />,
    },
    {
      name: 'Desjardins',
      logo: <DesjardinsLogo />,
    },
    {
      name: 'Devimco',
      logo: <DevimcoLogo />,
    },
    {
      name: 'Fashion Cube',
      logo: <FashionCubeLogo />,
    },
    {
      name: 'Fonds FTQ',
      logo: <FondsFTQLogo />,
    },
    {
      name: 'Hobbynote',
      logo: <HobbynoteLogo />,
    },
    {
      name: 'M6',
      logo: <M6Logo />,
    },
    {
      name: 'Publicis Groupe',
      logo: <PublicisLogo />,
    },
    {
      name: 'Resisto',
      logo: <ResistoLogo />,
    },
    {
      name: 'TheBookEdition',
      logo: <TheBookEditionLogo />,
    },
    {
      name: 'Ubisoft',
      logo: <UbisoftLogo />,
    },
    {
      name: 'VIA Rail',
      logo: <ViaRailLogo />,
    },
  ];
  return (
    <AppearOnScroll>
      <section id="clients" className={styles.section}>
        <h2>{t('sections.trustedClients.title')}</h2>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            {trustedClients.map((client) => (
              <li key={`client_${client.name}`}>
                <button>
                  {client.logo}
                  <span className={styles.info}>{client.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.andMore}>
          {t('sections.trustedClients.andMore')}
        </div>
      </section>
    </AppearOnScroll>
  );
};

export default TrustedClients;
