import { movieApi } from '../../api';
import dispatchAction from './dispatch';

const movieActions = {};

movieActions.rate = (id, value, session_id) => async (dispatch) => {
  const query = async () => await movieApi.rate(id, value, session_id);
  await dispatchAction(query, dispatch);
};

movieActions.getFavorites = (session_id) => async (dispatch) => {
  const query = async () => await movieApi.getFavorites(session_id);
  await dispatchAction(query, dispatch);
};

movieActions.addFavorite = (movie_id, session_id) => async (dispatch) => {
  const query = async () => await movieApi.addFavorite(movie_id, session_id);
  await dispatchAction(query, dispatch);
};

export default movieActions;
