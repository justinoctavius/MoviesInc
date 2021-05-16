import axios from 'axios';
import { envs } from '../../../config';

const movieApi = {};

movieApi.getNowPlaying = async (lang = 'en-US') => {
  try {
    const data = await axios.get(
      `${envs.API}/now_playing?api_key=${envs.API_KEY}&language=${lang}`
    );
    return { payload: data.data, success: true, msg: 'success' };
  } catch (error) {
    return {
      payload: null,
      success: false,
      msg: error?.response?.data?.status_message,
    };
  }
};

movieApi.getDetails = async (id, lang = 'en-US') => {
  try {
    const data = await axios.get(
      `${envs.API}/${id}?api_key=${envs.API_KEY}&language=${lang}`
    );
    return { payload: data.data, success: true, msg: 'success' };
  } catch (error) {
    return {
      payload: null,
      success: false,
      msg: error?.response?.data?.status_message,
    };
  }
};

movieApi.rate = async (id, value) => {
  try {
    const data = await axios.post(
      `${envs.API}/${id}/rating?api_key=${envs.API_KEY}`,
      { value }
    );
    return { success: true, msg: 'success' };
  } catch (error) {
    return {
      success: false,
      msg: error?.response?.data?.status_message,
    };
  }
};

movieApi.getSimilar = async (id, lang = 'en-US') => {
  try {
    const data = await axios.get(
      `${envs.API}/${id}/similar?api_key=${envs.API_KEY}&language=${lang}`
    );
    return { payload: data.data, success: true, msg: 'success' };
  } catch (error) {
    return {
      payload: null,
      success: false,
      msg: error?.response?.data?.status_message,
    };
  }
};

movieApi.getCredits = async (id, lang) => {
  try {
    const data = await axios.get(
      `${envs.API}/${id}/credits?api_key=${envs.API_KEY}&language=${lang}`
    );
    return { payload: data.data, success: true, msg: 'success' };
  } catch (error) {
    return {
      payload: null,
      success: false,
      msg: error?.response?.data?.status_message,
    };
  }
};

export default movieApi;
