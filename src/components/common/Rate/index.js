import { useContext, useState } from 'react';
import RatePage from './page';

const Rate = ({ initialRate }) => {
  const [rate, setRate] = useState(initialRate);
  // const {rateState, rateAction} = useContext()
  const submitRateHandler = (r) => {
    setRate(rate);
  };
  return <RatePage rate={rate} setRate={submitRateHandler} />;
};

export default Rate;
