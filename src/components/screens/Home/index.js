import HomeScreenPage from './page';

const HomeScreen = ({ nowPlaying, favorites }) => {
  return <HomeScreenPage nowPlaying={nowPlaying} favorites={favorites} />;
};

export default HomeScreen;
