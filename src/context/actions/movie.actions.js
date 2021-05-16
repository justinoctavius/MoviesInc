import { movieApi } from '../../api';
import dispatchAction from './dispatch';

const movieActions = {};

movieActions.rate = (id, value) => async (dispatch) => {
  const query = async () => await movieApi.rate(id, value);
  await dispatchAction(query, dispatch);
};

export default movieActions;
