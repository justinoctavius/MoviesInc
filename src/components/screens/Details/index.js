import { useEffect, useState } from 'react';
import { useMovie } from '../../hooks';
import DetailsScreenPage from './page';

const DetailsScreen = ({ data, credits, similar }) => {
  const [actors, setActors] = useState([]);
  const { favoritesState, addFavorite } = useMovie();

  const getActors = async () => {
    const actorsArr = await credits?.cast?.map((credit) => {
      if (credit.known_for_department == 'Acting') {
        return credit;
      }
    });
    setActors(actorsArr);
  };

  const addFavoriteHandler = async () => {
    addFavorite(data?.payload?.id);
  };

  useEffect(() => {
    getActors();
  }, []);

  return (
    <DetailsScreenPage
      movie={data.payload}
      actors={actors}
      similar={similar?.results}
      dataTest="DetailsScreenPage"
      addFavoriteHandler={addFavoriteHandler}
    />
  );
};

export default DetailsScreen;
