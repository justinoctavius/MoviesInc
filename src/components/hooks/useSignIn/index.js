import { useState } from 'react';
import { userApi } from '../../../api';
import { REQUEST_TOKEN, SESSION_ID } from '../../../constants';

const useSignIn = () => {
  const [state, setState] = useState({});

  const validatePermissions = async () => {
    const data = await userApi.requestToken();
    const { payload: request_token, success } = data;
    if (!success) {
      setState(data);
      return;
    }

    sessionStorage.setItem(REQUEST_TOKEN, request_token);
    window.location.replace(
      `https://www.themoviedb.org/authenticate/${request_token}?redirect_to=${window.location}/signin`
    );
  };

  const signIn = async () => {
    const request_token = sessionStorage.getItem(REQUEST_TOKEN);
    const data = await userApi.signIn(request_token);
    const { success, payload: session_id } = data;
    if (success) {
      sessionStorage.setItem(SESSION_ID, session_id);
    }
    setState(data);
  };

  return { state, validatePermissions, signIn };
};

export default useSignIn;
