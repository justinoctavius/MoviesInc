import MoviesListPage from './page';

const MoviesList = ({ movies }) => {
  return <MoviesListPage movies={movies} dataTest="moviesListPage" />;
};

export default MoviesList;
