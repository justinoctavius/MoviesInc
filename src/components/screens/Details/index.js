import { useEffect, useState } from 'react';
import DetailsScreenPage from './page';

const DetailsScreen = ({ data, credits }) => {
  const [actors, setActors] = useState([]);

  const getActors = async () => {
    const actorsArr = await credits?.cast?.map((credit) => {
      if (credit.known_for_department == 'Acting') {
        return credit;
      }
    });
    setActors(actorsArr);
    console.log(actors);
  };

  useEffect(() => {
    getActors();
  }, []);

  return (
    <DetailsScreenPage
      movie={data.payload}
      actors={actors}
      dataTest="DetailsScreenPage"
    />
  );
};

export default DetailsScreen;
