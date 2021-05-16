import { createContext, useMemo, useReducer } from 'react';

export const MovieContext = createContext({});

const MovieProviderWrapper = ({ children }) => {
  // const [movieState, movieDispatch] = useReducer(reducer, {});

  // const movieActions = useMemo(() => ({
  //   addFavorite: async (id) => await addFavoriteAction(id)(movieDispatch),
  //   deleteFavorite: async (id) => await deleteFavoriteAction(id)(movieDispatch),
  //   rateMovie: async () => await rateMovieAction()(movieDispatch),
  // }));

  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
};

export default MovieProviderWrapper;
