import { useState } from 'react';
import { useMovie } from '../../hooks';
import RatePage from './page';
import Msg from './../Msg';

const Rate = ({ id, initialRate }) => {
  const [rateState, setRateState] = useState(initialRate);
  const { movieState, rate } = useMovie();

  const submitRateHandler = (r) => {
    setRateState(r);
    rate(id, r);
  };

  return (
    <>
      {movieState?.error && <Msg text={movieState?.error} error />}
      {movieState?.success && <Msg text={'success'} success />}
      <RatePage
        rate={rateState}
        setRate={submitRateHandler}
        dataTest="RatePage"
      />
    </>
  );
};

export default Rate;
