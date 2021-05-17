import axios from 'axios';
import { envs } from '../../../config';

const movieApi = {};

movieApi.getNowPlaying = async (lang = 'en-US') => {
  try {
    const data = await axios.get(
      `${envs.API}/movie/now_playing?api_key=${envs.API_KEY}&language=${lang}`
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
      `${envs.API}/movie/${id}?api_key=${envs.API_KEY}&language=${lang}`
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

movieApi.rate = async (id, value, session_id) => {
  try {
    const data = await axios.post(
      `${envs.API}/movie/${id}/rating?api_key=${envs.API_KEY}&session_id=${session_id}`,
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
      `${envs.API}/movie/${id}/similar?api_key=${envs.API_KEY}&language=${lang}`
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
      `${envs.API}/movie/${id}/credits?api_key=${envs.API_KEY}&language=${lang}`
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

movieApi.addFavorite = async (movie_id, session_id) => {
  try {
    const data = await axios.post(
      `${envs.API}/account/_/favorite?api_key=${envs.API_KEY}&session_id=${session_id}`,
      { media_type: 'movie', media_id: movie_id, favorite: true }
    );
    return { success: true, msg: data.data?.status_message };
  } catch (error) {
    return {
      success: false,
      msg: error?.response?.data?.status_message,
    };
  }
};

movieApi.getFavorites = async (session_id, lang, page = 1) => {
  try {
    const data = await axios.get(
      `${envs.API}/account/_/favorite/movies?api_key=${envs.API_KEY}&session_id=${session_id}&language=${lang}&page=${page}`
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
