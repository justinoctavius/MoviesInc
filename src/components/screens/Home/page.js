import { MainMoviesList, MoviesList } from '../../common';

const HomeScreenPage = ({ nowPlaying, favorites }) => {
  return (
    <div>
      <MainMoviesList
        movies={nowPlaying}
        title="Now playing"
        dataTest="MainMoviesList"
      />
      <MoviesList movies={favorites} dataTest="MoviesList" />
    </div>
  );
};

export default HomeScreenPage;
