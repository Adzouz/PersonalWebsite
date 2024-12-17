// Libraries
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IProject, ProjectType } from '../../types';

// Styles
import styles from './ProjectCard.module.scss';

interface IProjectCard {
  project: IProject;
  category: string;
}

const ProjectCard = ({ project, category }: IProjectCard) => {
  const { t } = useTranslation();
  const getCardContent = (project: IProject, type: string) => (
    <>
      <span className={styles.info}>
        <span
          className={styles.image}
          style={{
            backgroundImage: `url(${`/projects/${project.image}`})`,
          }}
        />
        <span className={styles.detailsHover}>
          <span className={styles.name}>{project.name}</span>
          <span className={styles.year}>{project.year}</span>
        </span>
      </span>
      <span className={styles.details}>
        <span className={styles.type}>
          {project.projectType === ProjectType.Website
            ? t('sections.showcase.tags.website')
            : project.projectType === ProjectType.Webapp
              ? t('sections.showcase.tags.webApp')
              : t('sections.showcase.tags.mobileApp')}
        </span>
        <ul className={styles.techStack}>
          {project.techList.map((tech, index) => (
            <li key={`${type}_${project.name}_tech_${index}`}>{tech}</li>
          ))}
        </ul>
      </span>
    </>
  );

  return project.url ? (
    <a
      href={project.url}
      className={clsx([
        styles.cardContainer,
        !project.active && styles.grayScale,
      ])}
      target="_blank"
    >
      {getCardContent(project, category)}
    </a>
  ) : (
    <span
      tabIndex={0}
      className={clsx([
        styles.cardContainer,
        !project.active && styles.grayScale,
      ])}
    >
      {getCardContent(project, category)}
    </span>
  );
};

export default ProjectCard;
