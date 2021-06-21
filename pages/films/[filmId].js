import FilmNav from 'components/film/FilmNav';
import Content from 'components/film/Content';

import swapi from '/data/swapi';

import { createContext } from 'react';

export const FilmContext = createContext();

import { getCharactersData } from 'helpers/filmHelpers';

export default function FilmDetails({ film, charactersData }) {
  const providerValue = {
    film,
    charactersData,
  };

  return (
    <div style={{ width: '80%', margin: ' auto' }}>
      <FilmContext.Provider value={providerValue}>
        <FilmNav />
        <Content />
      </FilmContext.Provider>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const filmId = +params.filmId;
  // swapi give wrong sort on this, so I have to convert it to the correct one
  const { data: film } = await swapi.get(
    `/films/${filmId < 3 ? filmId + 3 : filmId - 3}/`
  );

  const { characters, planets, vehicles, starships, species } = film;

  const charactersData = await getCharactersData(characters);

  if (!film) {
    return { notFound: true };
  }

  return {
    props: { film, charactersData },
  };
}

export async function getStaticPaths() {
  const { data } = await swapi.get('/films/');
  const { results } = data;

  const paths = results.map(({ episode_id }) => ({
    params: { filmId: episode_id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}
