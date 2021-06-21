import styles from './Detail.module.scss';

import { romanize } from 'helpers/romanize';
import { FilmContext } from 'pages/films/[filmId]';

import swapi from '/axios';
import axios from 'axios';

import { useContext, useState } from 'react';
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

  const [hoverCharacter, setHoverCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onCharacterHover = async (id, category) => {
    if (category !== 'characters') return;
    setIsLoading(true);

    const { data: peopleData } = await swapi.get(`/people/${id}`);
    const { homeworld } = peopleData;

    const { data: homeWorldData } = await axios.get(homeworld);
    const characterData = { ...peopleData, home_world: homeWorldData.name };

    setHoverCharacter(characterData);
    setIsLoading(false);
  };

  const renderDataItem = filmData.map(({ category, data }) => {
    const formatInnerHTML = (string) =>
      string[0].toUpperCase() + string.slice(1);
    const renderTooltip = () => (
      <span>
        Name: {hoverCharacter.name}
        <br />
        Birth Year: {hoverCharacter.birth_year}
        <br />
        Height: {hoverCharacter.height}cm
        <br />
        Mass: {hoverCharacter.mass}kg
        <br />
        Gender: {hoverCharacter.gender}
        <br />
        Hair Color: {hoverCharacter.hair_color}
        <br />
        Skin Color: {hoverCharacter.skin_color}
        <br />
        Eye Color: {hoverCharacter.eye_color}
        <br />
        Home World: {hoverCharacter.home_world}
      </span>
    );

    const renderList = data.map(({ name, id }) => (
      <li key={id} onMouseEnter={() => onCharacterHover(id, category)}>
        <Image
          src={`/images/${category}/${id}.jpg`}
          alt={name}
          width={50}
          height={50}
        />
        <p>{name}</p>
        {category === 'characters' && (
          <span className={styles.tooltip}>
            {!isLoading ? renderTooltip() : 'Loading...'}
          </span>
        )}
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
