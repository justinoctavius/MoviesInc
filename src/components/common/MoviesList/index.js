import { useRouter } from 'next/router';
import MoviesListPage from './page';

const MoviesList = ({ movies, title }) => {
  const router = useRouter();

  const onClickHandler = (id) => {
    router.push(`/${id}`);
  };

  return (
    <MoviesListPage
      movies={movies}
      onClick={onClickHandler}
      title={title}
      dataTest="moviesListPage"
    />
  );
};

export default MoviesList;
