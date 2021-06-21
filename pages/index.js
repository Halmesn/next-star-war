import HomeContent from 'components/home/HomeContent';

import swapi from '/data/swapi';

export default function HomePage({ sortedResults }) {
  return <HomeContent filmList={sortedResults} />;
}

// getStaticProps are better for this api, because it doesn't change very often'
export async function getStaticProps() {
  const { data } = await swapi.get('/films/');
  const { results } = data;
  // sort films by their episode
  const sortedResults = results.sort((a, b) => a.episode_id - b.episode_id);

  // add revalidate in case there is new film coming out
  return { props: { sortedResults }, revalidate: 86400 };
}
