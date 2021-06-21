import styles from './HomeContent.module.scss';

import FilmCard from 'components/film/FilmCard';

export default function HomeContent({ films }) {
  console.log(films);

  const renderFilmLists = films.map((film) => (
    <li key={film.title}>
      <FilmCard film={film} />
    </li>
  ));

  return (
    <>
      <h1 className={styles.title}>Star Wars Film Collections</h1>
      <ul className={styles.gridContainer}>{renderFilmLists}</ul>
    </>
  );
}
