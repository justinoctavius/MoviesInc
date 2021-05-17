import { useRouter } from 'next/router';
import Card from '../Card';
import MainCard from '../MainCard';
import MoviesListPage from './page';

const MoviesList = ({ movies, title, main }) => {
  const router = useRouter();

  const onClickHandler = (id) => {
    router.push(`/details/${id}`);
  };

  return (
    <MoviesListPage
      movies={movies}
      title={title}
      onClick={onClickHandler}
      main={main}
      dataTest="moviesListPage"
    />
  );
};

export default MoviesList;
