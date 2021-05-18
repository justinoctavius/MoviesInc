import { useEffect, useState } from 'react';
import { getActors } from '../../../helpers';
import DetailsScreenPage from './page';

const DetailsScreen = ({ data, credits, similar }) => {
  const [actors, setActors] = useState([]);

  const getActorsHandler = async () => {
    setActors(await getActors(credits));
  };

  useEffect(() => {
    getActorsHandler();
  }, []);

  return (
    <>
      <DetailsScreenPage
        movie={data.payload}
        actors={actors}
        similar={similar?.results}
        dataTest="DetailsScreenPage"
      />
    </>
  );
};

export default DetailsScreen;
