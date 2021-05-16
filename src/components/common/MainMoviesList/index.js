import MainMoviesListPage from './page';

const MainMoviesList = ({ movies }) => {
  return <MainMoviesListPage movies={movies} dataTest="mainMoviesListPage" />;
};

export default MainMoviesList;
