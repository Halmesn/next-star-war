import axios from 'axios';

export const getFilmData = async (endpoints) => {
  const getId = (str) => {
    const num = str.replace(/[^0-9]/g, '');
    return parseInt(num, 10);
  };

  let filmData = [];
  await Promise.all(
    endpoints.map(async (endpoint) => {
      try {
        const { data } = await axios.get(endpoint);
        const id = getId(endpoint);
        filmData.push({ name: data.name, id });
      } catch (error) {
        console.log('error' + error);
      }
    })
  );

  return filmData;
};
