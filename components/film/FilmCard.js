import styles from './FilmCard.module.scss';

import Image from 'next/image';

export default function FilmCard({ film }) {
  function romanize(num) {
    let lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      },
      roman = '',
      i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

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
    </div>
  );
}
