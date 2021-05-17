import { useRouter } from 'next/router';
import MoviesListPage from './page';

const MoviesList = ({ movies, title, main }) => {
  const router = useRouter();

  const onClickHandler = (id) => {
    router.push(`/details/${id}`);
  };

  return (
    <MoviesListPage
      main={main}
      movies={movies}
      onClick={onClickHandler}
      title={title}
      dataTest="moviesListPage"
    />
  );
};

export default MoviesList;
