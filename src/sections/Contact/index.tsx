// Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import Map from '../Map';
import { SocialLinkedIn, SocialGithub } from '../../components/Social';

// Styles
import styles from './Contact.module.scss';

const Contact = () => {
  const { t } = useTranslation();
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: SocialLinkedIn,
      url: 'https://www.linkedin.com/in/adrienlepoutre',
    },
    {
      name: 'Github',
      icon: SocialGithub,
      url: 'https://github.com/Adzouz',
    },
  ];
  return (
    <section id="contact" className={styles.section}>
      <AppearOnScroll>
        <h2>{t('sections.contact.title')}</h2>
        <ul className={styles.list}>
          {socialLinks.map((link) => (
            <li key={`social_${link.name}`}>
              <a href={link.url} target="_blank">
                {React.createElement(link.icon)}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </AppearOnScroll>
      <Map />
    </section>
  );
};

export default Contact;
