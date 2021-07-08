import { useState, useEffect } from 'react';

export default function useLocalStorage() {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('sw-favorites')) || []
  );

  useEffect(
    () => localStorage.setItem('sw-favorites', JSON.stringify(favorites)),
    [favorites]
  );

  return [favorites, setFavorites];
}
