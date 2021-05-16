import axios from 'axios';
import { envs } from '../../../config';

const userApi = {};

userApi.requestToken = async () => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${envs.API_KEY}`
    );
    const { request_token, success } = data.data;
    return { payload: request_token, success, msg: 'success' };
  } catch (error) {
    return { success: false, msg: error?.response?.data?.status_message };
  }
};

userApi.signIn = async (request_token) => {
  try {
    const data = await axios.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${envs.API_KEY}`,
      { request_token }
    );
    const { session_id, success } = data.data;
    return { payload: session_id, success, msg: 'success' };
  } catch (error) {
    return { success: false, msg: error?.response?.data?.status_message };
  }
};

export default userApi;
