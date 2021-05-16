import { useContext } from 'react';
import { MovieContext } from '../../providers';

const useMovie = () => {
  const { movieState, movieActions } = useContext(MovieContext);

  const rate = async (id, value) => {
    console.log(movieState);
    await movieActions.rate(id, value);
  };

  return { movieState, rate };
};

export default useMovie;
