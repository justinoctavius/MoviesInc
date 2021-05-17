import { createContext, useMemo, useReducer } from 'react';
import { movieActions } from '../../context/actions';
import reducer from '../../context/reducers';

export const MovieContext = createContext({});

const MovieProviderWrapper = ({ children }) => {
  const [movieState, movieDispatch] = useReducer(reducer, {});
  const [favoritesState, favoritesDispatch] = useReducer(reducer, {});

  const movieActionsHandler = useMemo(() => ({
    addFavorite: async (movie_id, session_id) =>
      await movieActions.addFavorite(movie_id, session_id)(favoritesDispatch),
    getFavorites: async (session_id) =>
      await movieActions.getFavorites(session_id)(favoritesDispatch),
    rate: async (id, value, session_id) =>
      await movieActions.rate(id, value, session_id)(movieDispatch),
  }));

  return (
    <MovieContext.Provider
      value={{ movieActions: movieActionsHandler, movieState, favoritesState }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProviderWrapper;
