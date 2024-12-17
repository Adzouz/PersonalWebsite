// Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import AppearOnScroll from '../../components/AppearOnScroll';
import SocialGithub from '../../components/Social/Github';
import SocialLinkedIn from '../../components/Social/LinkedIn';
import SocialX from '../../components/Social/X';

// Styles
import styles from './Contact.module.scss';

const Contact = () => {
  const { t } = useTranslation();
  const socialLinks = [
    {
      name: 'Github',
      icon: SocialGithub,
      url: 'https://www.linkedin.com/in/adrienlepoutre',
    },
    {
      name: 'LinkedIn',
      icon: SocialLinkedIn,
      url: 'https://www.linkedin.com/in/adrienlepoutre',
    },
    {
      name: 'X',
      icon: SocialX,
      url: 'https://x.com/TheWebsDoor',
    },
  ];
  return (
    <AppearOnScroll>
      <section id="contact">
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
      </section>
    </AppearOnScroll>
  );
};

export default Contact;
