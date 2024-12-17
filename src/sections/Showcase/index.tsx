// Libraries
import { useTranslation } from 'react-i18next';
import { IProject, ProjectType } from '../../types';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import ProjectCard from '../../components/ProjectCard';
import {
  AngularJSIcon,
  BootstrapIcon,
  CSharpIcon,
  DrupalIcon,
  EZPublishIcon,
  GulpIcon,
  JavascriptIcon,
  JQueryIcon,
  MooToolsIcon,
  NodeJSIcon,
  ObjectiveCIcon,
  PHPIcon,
  PrestashopIcon,
  PugIcon,
  ReactIcon,
  SassIcon,
  SFCCIcon,
  StrapiIcon,
  StyledComponentsIcon,
  SwiftIcon,
  SymfonyIcon,
  TurborepoIcon,
  TypescriptIcon,
  ViteIcon,
  VueJSIcon,
  WordpressIcon,
} from '../../components/Icons';

// Styles
import styles from './Showcase.module.scss';

interface IProjectCategory {
  category: string;
  items: IProject[];
}

const Showcase = () => {
  const { t } = useTranslation();
  const projects: IProjectCategory[] = [
    {
      category: t('sections.showcase.activeProProjects'),
      items: [
        {
          name: 'Store.Ubisoft.com',
          image: 'store-ubisoft.jpg',
          url: 'https://store.ubisoft.com',
          active: true,
          year: 2019,
          projectType: ProjectType.Website,
          techList: [
            <ReactIcon />,
            <TypescriptIcon />,
            <TurborepoIcon />,
            <SassIcon />,
            <ViteIcon />,
            <SFCCIcon />,
          ],
        },
        {
          name: 'Resisto.ca',
          image: 'resisto.jpg',
          url: 'https://resisto.ca',
          active: true,
          year: 2019,
          projectType: ProjectType.Website,
          techList: [
            <DrupalIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'ViaRail.ca',
          image: 'viarail.jpg',
          url: 'https://viarail.ca',
          active: true,
          year: 2018,
          projectType: ProjectType.Website,
          techList: [
            <DrupalIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'BotaBota.ca',
          image: 'botabota.jpg',
          url: 'https://botabota.ca',
          active: true,
          year: 2018,
          projectType: ProjectType.Website,
          techList: [
            <WordpressIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'Volckaert-peinture.fr',
          image: 'volckaert-mullie.jpg',
          url: 'https://volckaert-peinture.fr',
          active: true,
          year: 2017,
          projectType: ProjectType.Website,
          techList: [
            <WordpressIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'TheBookEdition.com',
          image: 'thebookedition.jpg',
          url: 'https://thebookedition.com',
          active: true,
          year: 2015,
          projectType: ProjectType.Website,
          techList: [
            <PrestashopIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'Superlav.com',
          image: 'superlav.jpg',
          url: 'https://superlav.com/',
          active: true,
          year: 2015,
          projectType: ProjectType.Website,
          techList: [
            <WordpressIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
      ],
    },
    {
      category: t('sections.showcase.inactiveProProjects'),
      items: [
        {
          name: "Fonds FTQ - L'Écoportrait",
          image: 'ecoportrait-fondsftq.jpg',
          url: 'https://www.tink.ca/realisations/ecoportrait-fonds-solidarite-ftq',
          active: false,
          year: 2018,
          projectType: ProjectType.Webapp,
          techList: [
            <VueJSIcon />,
            <JavascriptIcon />,
            <SassIcon />,
            <PugIcon />,
          ],
        },
        {
          name: 'Inesis.fr',
          image: 'inesis.jpg',
          active: false,
          year: 2016,
          projectType: ProjectType.Website,
          techList: [
            <DrupalIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
            <GulpIcon />,
          ],
        },
        {
          name: 'BulleBleue.fr',
          image: 'bullebleue.jpg',
          active: false,
          year: 2016,
          projectType: ProjectType.Website,
          techList: [
            <AngularJSIcon />,
            <NodeJSIcon />,
            <JavascriptIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'iBrode.com',
          image: 'ibrode.jpg',
          active: false,
          year: 2016,
          projectType: ProjectType.Website,
          techList: [
            <PrestashopIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
          ],
        },
        {
          name: 'INEAT-Conseil.fr',
          image: 'ineat-conseil.jpg',
          active: false,
          year: 2015,
          projectType: ProjectType.Website,
          techList: [<PHPIcon />, <JavascriptIcon />, <SassIcon />],
        },
        {
          name: 'DanoneEtVous.com',
          image: 'danone-et-vous.jpg',
          active: false,
          year: 2013,
          projectType: ProjectType.Website,
          techList: [<CSharpIcon />, <JavascriptIcon />, <JQueryIcon />],
        },
        {
          name: "Levi's (Store finder)",
          image: 'levi-store-finder.jpg',
          active: false,
          year: 2013,
          projectType: ProjectType.Website,
          techList: [<CSharpIcon />, <JavascriptIcon />, <JQueryIcon />],
        },
        {
          name: 'Pacesium.com',
          image: 'pacesium.jpg',
          active: false,
          year: 2013,
          projectType: ProjectType.Website,
          techList: [<PHPIcon />, <JavascriptIcon />, <JQueryIcon />],
        },
        {
          name: "Jinnove - RDV d'affaires",
          image: 'rdv-affaires-jinnove.jpg',
          active: false,
          year: 2013,
          projectType: ProjectType.Website,
          techList: [
            <SymfonyIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
          ],
        },
        {
          name: 'Jinnove.com',
          image: 'jinnove.jpg',
          active: false,
          year: 2012,
          projectType: ProjectType.Website,
          techList: [
            <EZPublishIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
          ],
        },
        {
          name: 'Radins.com',
          image: 'radins.jpg',
          active: false,
          year: 2011,
          projectType: ProjectType.Website,
          techList: [<PHPIcon />, <JavascriptIcon />, <MooToolsIcon />],
        },
      ],
    },
    {
      category: t('sections.showcase.activePersoProjects'),
      items: [
        {
          name: 'AidenClarkMusic.com',
          image: 'aidenclarkmusic.jpg',
          url: 'https://aidenclarkmusic.com',
          active: true,
          year: 2022,
          projectType: ProjectType.Website,
          techList: [<ReactIcon />, <TypescriptIcon />, <SassIcon />],
        },
        {
          name: 'Pokedex GO',
          image: 'pokedex.jpg',
          url: 'https://pokedex.alaqasar.com/',
          active: true,
          year: 2021,
          projectType: ProjectType.Webapp,
          techList: [
            <ReactIcon />,
            <TypescriptIcon />,
            <StyledComponentsIcon />,
          ],
        },
        {
          name: 'Streetex',
          image: 'streetex.jpg',
          url: 'https://streetex.alaqasar.com/',
          active: true,
          year: 2019,
          projectType: ProjectType.Webapp,
          techList: [
            <StrapiIcon />,
            <NodeJSIcon />,
            <ReactIcon />,
            <JavascriptIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'Kikadica',
          image: 'kikadica.jpg',
          url: 'https://kikadica.alaqasar.com/',
          active: true,
          year: 2016,
          projectType: ProjectType.Website,
          techList: [<NodeJSIcon />, <JavascriptIcon />, <SassIcon />],
        },
      ],
    },
    {
      category: t('sections.showcase.inactivePersoProjects'),
      items: [
        {
          name: 'Jahneration.fr',
          image: 'jahneration.jpg',
          active: false,
          year: 2016,
          projectType: ProjectType.Website,
          techList: [
            <WordpressIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'Shop.Jahneration.fr',
          image: 'jahneration-shop.jpg',
          active: false,
          year: 2016,
          projectType: ProjectType.Website,
          techList: [
            <WordpressIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'Drop²',
          image: 'drop2.jpg',
          active: false,
          year: 2016,
          projectType: ProjectType.Mobile,
          techList: [<SwiftIcon />],
        },
        {
          name: 'BoatTrip',
          image: 'boattrip.jpg',
          active: false,
          year: 2015,
          projectType: ProjectType.Mobile,
          techList: [<SwiftIcon />],
        },
        {
          name: 'Pilulier.co',
          image: 'pilulier.jpg',
          active: false,
          year: 2015,
          projectType: ProjectType.Website,
          techList: [
            <SymfonyIcon />,
            <PHPIcon />,
            <JavascriptIcon />,
            <JQueryIcon />,
            <BootstrapIcon />,
            <SassIcon />,
          ],
        },
        {
          name: 'La Soundbox des Tutos',
          image: 'soundbox-tutos.jpg',
          active: false,
          year: 2014,
          projectType: ProjectType.Mobile,
          techList: [<ObjectiveCIcon />],
        },
      ],
    },
  ];

  return (
    <AppearOnScroll>
      <span id="showcase" />
      <section id={styles.showcase}>
        <h2>{t('sections.showcase.title')}</h2>
        {projects.map((project) => (
          <AppearOnScroll key={`project_category_${project.category}`}>
            <h3>{project.category}</h3>
            <div className={styles.projectsContainer}>
              <ul className={styles.projects}>
                {project.items.map((projectItem) => (
                  <li key={`${project.category}_${projectItem.name}`}>
                    <ProjectCard
                      project={projectItem}
                      category={project.category}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </AppearOnScroll>
        ))}
      </section>
    </AppearOnScroll>
  );
};

export default Showcase;
