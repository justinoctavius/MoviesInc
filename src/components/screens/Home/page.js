import { MoviesList } from '../../common';

const HomeScreenPage = ({ nowPlaying, favorites }) => {
  return (
    <div>
      <MoviesList
        movies={nowPlaying}
        title="Now playing"
        dataTest="MainMoviesList"
        main
      />
      <MoviesList movies={favorites} dataTest="MoviesList" title="Favorites" />
    </div>
  );
};

export default HomeScreenPage;
