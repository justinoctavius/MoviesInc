import { useEffect, useState } from 'react';
import { useMovie } from '../../hooks';
import RatePage from './page';

const Rate = ({ id, initialRate }) => {
  const [rateState, setRateState] = useState(initialRate);
  const { movieState, rate } = useMovie();

  const submitRateHandler = (r) => {
    setRateState(r);
    rate(id, r);
  };

  return (
    <RatePage
      rate={rateState}
      setRate={submitRateHandler}
      dataTest="RatePage"
    />
  );
};

export default Rate;
