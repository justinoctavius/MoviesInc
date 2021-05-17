import { FAIL_QUERY, REQUEST_QUERY, SUCCESS_QUERY } from '../../constants';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_QUERY:
      return { loading: true, payload: null, error: null };
    case SUCCESS_QUERY:
      return {
        loading: false,
        payload: action.payload,
        error: null,
        success: true,
      };
    case FAIL_QUERY:
      return {
        loading: false,
        payload: null,
        error: action.error,
        success: false,
      };
    default:
      return state;
  }
};

export default reducer;
