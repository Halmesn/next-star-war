import styles from './Footer.module.scss';

import { GithubIcon } from 'components/icons/GithubIcon';
import { LinkedInIcon } from 'components/icons/LinkedInIcon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexContainer}>
        <div className={styles.social}>
          <span>Follow me:</span>
          <a href="https://www.linkedin.com/in/adrianli-dev/" target="_blank">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="https://github.com/Halmesn" target="_blank">
            <GithubIcon />
            GitHub
          </a>
        </div>
        <p className={styles.copyright}>
          Design and developed by{' '}
          <a href="https://adrianli.vercel.app/" target="_blank">
            Adrian Li
          </a>{' '}
          @2021
        </p>
      </div>
      <p className={styles.disclaimer}>
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Related data were freely collected from{' '}
        <a href="https://swapi.dev/" target="_blank">
          SWAPI
        </a>{' '}
        and{' '}
        <a href="http://starwars.wikia.com/wiki/Main_Page" target="_blank">
          Wookiepedia
        </a>
        .
      </p>
    </footer>
  );
}
