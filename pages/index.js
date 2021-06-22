import HomeContent from 'components/home/HomeContent';

import swapi from '/axios';

export default function HomePage({ sortedResults }) {
  return <HomeContent films={sortedResults} />;
}

// I use getStaticProps because the data here(films) doesn't change'
export async function getStaticProps() {
  const { data } = await swapi.get('/films/');
  const { results } = data;

  // sort films by their episode
  const sortedResults = results.sort((a, b) => a.episode_id - b.episode_id);

  return { props: { sortedResults } };
}
