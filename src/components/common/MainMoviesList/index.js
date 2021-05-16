import MainMoviesListPage from './page';

const MainMoviesList = ({ movies, title }) => {
  return (
    <MainMoviesListPage
      movies={movies}
      title={title}
      dataTest="mainMoviesListPage"
    />
  );
};

export default MainMoviesList;
