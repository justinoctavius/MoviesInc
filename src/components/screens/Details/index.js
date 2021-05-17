import { useEffect, useState } from 'react';
import { getActors } from '../../../helpers';
import { Msg } from '../../common';
import { useMovie } from '../../hooks';
import DetailsScreenPage from './page';

const DetailsScreen = ({ data, credits, similar }) => {
  const [actors, setActors] = useState([]);
  const { favoritesState, addFavorite } = useMovie();

  const addFavoriteHandler = async () => {
    addFavorite(data?.payload?.id);
  };

  const getActorsHandler = async () => {
    setActors(await getActors(credits));
  };

  useEffect(() => {
    getActorsHandler();
  }, []);

  return (
    <>
      {favoritesState?.error && <Msg text={favoritesState?.error} error />}
      {favoritesState?.success && <Msg text={'success'} success />}
      <DetailsScreenPage
        movie={data.payload}
        actors={actors}
        similar={similar?.results}
        dataTest="DetailsScreenPage"
        addFavoriteHandler={addFavoriteHandler}
      />
    </>
  );
};

export default DetailsScreen;
