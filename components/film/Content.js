import styles from './Content.module.scss';

import { romanize } from 'helpers/romanize';
import { FilmContext } from 'pages/films/[filmId]';

import { useContext } from 'react';
import Image from 'next/image';

export default function Content() {
  const { film, charactersData } = useContext(FilmContext);

  const renderCharacters = charactersData.map(({ name, charactersId }) => (
    <li key={charactersId}>
      <Image
        src={`/images/characters/${charactersId}.jpg`}
        alt={name}
        width={50}
        height={50}
      />
      <p>{name}</p>
    </li>
  ));

  return (
    <>
      <div className={styles.flexContainer}>
        <Image
          src={`/images/posters/${film.episode_id}.jpg`}
          alt={film.title}
          width={700}
          height={380}
        />

        <div className={styles.description}>
          <h3>
            Episode {romanize(film.episode_id)}: {film.title}
          </h3>
          <p>Release Date: {film.release_date}</p>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Opening Crawl:</p>
          <p>{film.opening_crawl}</p>
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <h4>Related Characters</h4>
          <ul>{renderCharacters}</ul>
        </div>
        <div className={styles.gridItem}>
          <h4>Related Planets</h4>
        </div>
        <div className={styles.gridItem}>
          <h4>Related Vehicles</h4>
        </div>
        <div className={styles.gridItem}>
          <h4>Related Starships</h4>
        </div>
        <div className={styles.gridItem}>
          <h4>Related Species</h4>
        </div>
      </div>
    </>
  );
}
