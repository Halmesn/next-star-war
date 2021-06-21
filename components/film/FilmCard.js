import styles from './FilmCard.module.scss';

import { EmptyStar } from 'components/icons/EmptyStar';
import { FulfilledStar } from 'components/icons/FulfilledStar';

import { romanize } from 'helpers/romanize';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FilmCard({ film, favorites, setFavorites }) {
  const [isStared, setIsStared] = useState(false);

  useEffect(() => {
    const isFavorite = favorites.some(
      ({ episode_id }) => film.episode_id === episode_id
    );
    setIsStared(isFavorite);
  }, [favorites]);

  const toggleStar = () => {
    const newFavorites = [...favorites];

    if (!isStared) {
      newFavorites.push(film);
      setFavorites(newFavorites);
    } else {
      const spliceIndex = newFavorites.indexOf(film);
      newFavorites.splice(spliceIndex, 1);
      setFavorites(newFavorites);
    }

    setIsStared(!isStared);
  };

  return (
    <div className={styles.card}>
      <Image
        src={`/images/posters/${film.episode_id}.jpg`}
        alt={film.title}
        width={275}
        height={380}
      />
      <div className={styles.title}>
        <p>
          Episode {romanize(film.episode_id)}: {film.title}
        </p>
      </div>
      <div onClick={toggleStar}>
        {isStared ? <FulfilledStar /> : <EmptyStar />}
      </div>
    </div>
  );
}
