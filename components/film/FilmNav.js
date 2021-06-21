import styles from './FilmNav.module.scss';

import { romanize } from 'helpers/romanize';
import { FilmContext } from 'pages/films/[filmId]';

import { useContext } from 'react';
import Link from 'next/link';

export default function FilmNav() {
  const { film } = useContext(FilmContext);

  return (
    <div className={styles.filmNav}>
      <Link href="/">Home&nbsp;</Link>
      <span>/&nbsp;Films&nbsp;/</span>
      <span>
        &nbsp;Episode {romanize(film.episode_id)}: {film.title}
      </span>
    </div>
  );
}
