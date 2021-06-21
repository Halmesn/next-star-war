import FilmNav from 'components/film/FilmNav';
import Detail from 'components/film/Detail';

import swapi from '/axios';

import { createContext } from 'react';

export const FilmContext = createContext();

import { getFilmData } from 'helpers/filmHelpers';

export default function FilmDetails(props) {
  const providerValue = {
    ...props,
  };

  return (
    <div style={{ width: '80%', margin: ' auto' }}>
      <FilmContext.Provider value={providerValue}>
        <FilmNav />
        <Detail />
      </FilmContext.Provider>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const filmId = +params.filmId;
  // swapi give wrong sort on this, so I have to convert it to the correct one
  const { data: film } = await swapi.get(
    `/films/${filmId <= 3 ? filmId + 3 : filmId - 3}/`
  );

  const { characters, planets, vehicles, starships, species } = film;

  const charactersData = await getFilmData(characters);
  const planetsData = await getFilmData(planets);
  const vehiclesData = await getFilmData(vehicles);
  const starShipsData = await getFilmData(starships);
  const speciesData = await getFilmData(species);

  if (!film) {
    return { notFound: true };
  }

  return {
    props: {
      film,
      charactersData,
      planetsData,
      vehiclesData,
      starShipsData,
      speciesData,
    },
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
