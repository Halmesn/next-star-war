import styles from './Footer.module.scss';

import { GithubIcon, LinkedInIcon } from 'components/icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.flexContainer}>
        <div className={styles.social}>
          <span>Follow me:</span>
          <a href="https://www.linkedin.com/in/adrianli-dev/">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="https://github.com/Halmesn">
            <GithubIcon />
            GitHub
          </a>
        </div>
        <p className={styles.copyright}>
          Designed and developed by{' '}
          <a href="https://adrianli.vercel.app/">Adrian Li</a> @2021
        </p>
      </div>
      <p className={styles.disclaimer}>
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Related data were freely collected from{' '}
        <a href="https://swapi.dev/">SWAPI</a> and{' '}
        <a href="http://starwars.wikia.com/wiki/Main_Page">Wookiepedia</a>.
      </p>
    </footer>
  );
}
