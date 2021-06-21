import styles from './Detail.module.scss';

import { romanize } from 'helpers/romanize';
import { FilmContext } from 'pages/films/[filmId]';

import { useContext } from 'react';
import Image from 'next/image';

export default function Detail() {
  const {
    film,
    charactersData,
    planetsData,
    vehiclesData,
    starShipsData,
    speciesData,
  } = useContext(FilmContext);

  const filmData = [
    { category: 'characters', data: charactersData },
    { category: 'planets', data: planetsData },
    { category: 'vehicles', data: vehiclesData },
    { category: 'starships', data: starShipsData },
    { category: 'species', data: speciesData },
  ];

  const renderDataItem = filmData.map(({ category, data }) => {
    const formatInnerHTML = (string) =>
      string[0].toUpperCase() + string.slice(1);

    const renderList = data.map(({ name, id }) => (
      <li key={id}>
        <Image
          src={`/images/${category}/${id}.jpg`}
          alt={name}
          width={50}
          height={50}
        />
        <p>{name}</p>
      </li>
    ));

    return (
      <div className={styles.gridItem} key={category}>
        <h4>Related {formatInnerHTML(category)}</h4>
        <ul>{renderList}</ul>
      </div>
    );
  });

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
          <p>
            <span>Release Date:</span> {film.release_date}
          </p>
          <p>
            <span>Director:</span> {film.director}
          </p>
          <p>
            <span>Producer:</span> {film.producer}
          </p>
          <p>
            <span>Opening Crawl:</span>
          </p>
          <p>{film.opening_crawl}</p>
        </div>
      </div>
      <div className={styles.gridContainer}>{renderDataItem} </div>
    </>
  );
}
