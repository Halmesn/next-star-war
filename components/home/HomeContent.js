import styles from './HomeContent.module.scss';

import FilmCard from 'components/film/FilmCard';

import { useState } from 'react';

export default function HomeContent({ films }) {
  const [favorites, setFavorites] = useState([]);

  const renderFilmLists = (filmList) =>
    filmList.map((film) => (
      <li key={film.title}>
        <FilmCard
          film={film}
          favorites={favorites}
          setFavorites={setFavorites}
        />
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
