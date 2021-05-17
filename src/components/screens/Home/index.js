import { useEffect } from 'react';
import { useMovie } from '../../hooks';
import HomeScreenPage from './page';

const HomeScreen = ({ nowPlaying }) => {
  const { favoritesState, getFavorites } = useMovie();
  useEffect(() => {
    getFavorites();
  }, []);
  return (
    <HomeScreenPage
      nowPlaying={nowPlaying}
      favorites={favoritesState.payload?.results}
    />
  );
};

export default HomeScreen;
