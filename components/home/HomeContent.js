import styles from './HomeContent.module.scss';

import FilmCard from 'components/home/FilmCard';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomeContent({ films }) {
  const [favorites, setFavorites] = useState([]);

  // get local favorite list
  useEffect(
    () =>
      setFavorites(
        JSON.parse(window.localStorage.getItem('sw-favorites')) || []
      ),
    []
  );

  const renderFilmLists = (filmList) =>
    filmList.map((film) => (
      <li key={film.title}>
        <Link href={`/films/${film.episode_id}`}>
          <a>
            <FilmCard
              film={film}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </a>
        </Link>
      </li>
    ));

  return (
    <>
      {favorites.length !== 0 && (
        <>
          <h2 className={styles.title}>My favorites</h2>
          <ul className={styles.gridContainer}>{renderFilmLists(favorites)}</ul>
        </>
      )}
      <h1 className={styles.title}>Star Wars Film Collections</h1>
      <ul className={styles.gridContainer}>{renderFilmLists(films)}</ul>
    </>
  );
}
