import styles from './FilmCard.module.scss';

import { EmptyStar, FulfilledStar } from 'components/icons';

import { romanize } from 'helpers/romanize';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FilmCard({ film, favorites, setFavorites }) {
  const [isStared, setIsStared] = useState(false);

  // if the film is in favorite list, star it.
  useEffect(() => {
    const isFavorite = favorites.some(
      ({ episode_id }) => film.episode_id === episode_id
    );
    setIsStared(isFavorite);
  }, [favorites, film.episode_id]);

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
      <Link href={`/films/${film.episode_id}`}>
        <a>
          <Image
            src={`/images/posters/${film.episode_id}.jpg`}
            alt={film.title}
            width={280}
            height={380}
          />
          <div className={styles.title}>
            <p>
              Episode {romanize(film.episode_id)}: {film.title}
            </p>
          </div>{' '}
        </a>
      </Link>
      <div onClick={toggleStar}>
        {isStared ? <FulfilledStar /> : <EmptyStar />}
      </div>
    </div>
  );
}
