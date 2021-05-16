import { createContext, useMemo, useReducer } from 'react';
import { movieActions } from '../../context/actions';
import reducer from '../../context/reducers';

export const MovieContext = createContext({});

const MovieProviderWrapper = ({ children }) => {
  const [movieState, movieDispatch] = useReducer(reducer, {});

  const movieActionsHandler = useMemo(() => ({
    // addFavorite: async (id) => await addFavoriteAction(id)(movieDispatch),
    // deleteFavorite: async (id) => await deleteFavoriteAction(id)(movieDispatch),
    rate: async (id, value) =>
      await movieActions.rate(id, value)(movieDispatch),
  }));

  return (
    <MovieContext.Provider
      value={{ movieActions: movieActionsHandler, movieState }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProviderWrapper;
