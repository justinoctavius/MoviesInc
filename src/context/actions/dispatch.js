import { FAIL_QUERY, REQUEST_QUERY, SUCCESS_QUERY } from '../../constants';

const dispatchAction = async (query, dispatch) => {
  try {
    dispatch({ type: REQUEST_QUERY });
    const data = await query();
    if (data.success) {
      dispatch({ type: SUCCESS_QUERY, payload: data.payload });
    } else {
      dispatch({ type: FAIL_QUERY, error: data.msg });
    }
  } catch (error) {
    dispatch({ type: FAIL_QUERY, error: 'Ups an error has occurred' });
  }
};

export default dispatchAction;
