import { useState, useEffect } from 'react';

export default function useLocalStorage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(
    () =>
      setFavorites(
        JSON.parse(window.localStorage.getItem('sw-favorites')) || []
      ),
    []
  );

  useEffect(
    () =>
      window.localStorage.setItem('sw-favorites', JSON.stringify(favorites)),
    [favorites]
  );

  return [favorites, setFavorites];
}
