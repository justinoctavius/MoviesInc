import { useMovie } from '../../hooks';
import Msg from '../Msg';
import DetailsFooterPage from './page';

const DetailsFooter = ({ movie, actors }) => {
  const { vote_average, id } = movie;
  const { favoritesState, addFavorite } = useMovie();

  const addFavoriteHandler = async () => {
    addFavorite(id);
  };

  return (
    <>
      {favoritesState?.error && <Msg text={favoritesState?.error} error />}
      {favoritesState?.success && <Msg text={'success'} success />}
      <DetailsFooterPage
        actors={actors}
        addFavorite={addFavoriteHandler}
        vote_average={vote_average}
        id={id}
      />
    </>
  );
};

export default DetailsFooter;
