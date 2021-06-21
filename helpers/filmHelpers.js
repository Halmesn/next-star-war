import axios from 'axios';

export const getCharactersData = async (characters) => {
  const getCharactersId = (str) => {
    const num = str.replace(/[^0-9]/g, '');
    return parseInt(num, 10);
  };

  let charactersData = [];
  await Promise.all(
    characters.map(async (char) => {
      try {
        const { data } = await axios.get(char);
        const charactersId = getCharactersId(char);
        charactersData.push({ name: data.name, charactersId });
      } catch (error) {
        console.log('error' + error);
      }
    })
  );

  return charactersData;
};

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
