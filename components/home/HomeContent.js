import styles from './HomeContent.module.scss';

import FilmCard from 'components/home/FilmCard';
import { SearchIcon } from 'components/icons';

import swapi from '/axios';
import useLocalStorage from 'hooks/useLocalStorage';
import useDebounceInput from 'hooks/useDebounceInput';

import { useState, useEffect } from 'react';

export default function HomeContent({ films }) {
  const [favorites, setFavorites] = useLocalStorage();

  const [searchResults, setSearchResults] = useState(null);
  const [searchInput, setSearchInput, debounceInput] = useDebounceInput();

  useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await swapi.get(`/films/?search=${debounceInput}`);
      const { results } = data;
      setSearchResults(results);
    };

    if (debounceInput) getSearchResults();
    else setSearchResults(null);
  }, [debounceInput]);

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
      <div className={styles.inputContainer}>
        <label>
          <SearchIcon />
        </label>
        <input
          className={styles.input}
          placeholder="film names"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {searchResults ? (
        <>
          <h2 className={styles.title}>Search Results</h2>
          <ul className={styles.gridContainer}>
            {renderFilmLists(searchResults)}
          </ul>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Star Wars Film Collections</h1>
          <ul className={styles.gridContainer}>{renderFilmLists(films)}</ul>
        </>
      )}
    </>
  );
}
