import { useState, useEffect } from 'react';

export default function useLocalStorage() {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== 'undefined')
      JSON.parse(window.localStorage.getItem('sw-favorites')) || [];
    return [];
  });

  useEffect(
    () =>
      window.localStorage.setItem('sw-favorites', JSON.stringify(favorites)),
    [favorites]
  );

  return [favorites, setFavorites];
}
