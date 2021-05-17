import { useContext } from 'react';
import { SESSION_ID } from '../../../constants';
import { MovieContext } from '../../providers';

const useMovie = () => {
  const { movieState, favoritesState, movieActions } = useContext(MovieContext);

  const rate = async (id, value) => {
    const session_id = sessionStorage.getItem(SESSION_ID);
    await movieActions.rate(id, value, session_id);
  };

  const getFavorites = async () => {
    const session_id = sessionStorage.getItem(SESSION_ID);
    await movieActions.getFavorites(session_id);
  };

  const addFavorite = async (movie_id) => {
    const session_id = sessionStorage.getItem(SESSION_ID);
    await movieActions.addFavorite(movie_id, session_id);
  };

  return { movieState, favoritesState, rate, getFavorites, addFavorite };
};

export default useMovie;
