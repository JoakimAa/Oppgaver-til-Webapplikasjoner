import http from './http';

const API_URL_REGISTER = '/register';
const API_URL_LOGIN = '/login';
const API_URL_GETCURRENTUSER = '/me';

export const create = async (data) => {
  try {
    return await http.post(`${API_URL_REGISTER}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const logIn = async (data) => {
  try {
    return await http.post(`${API_URL_LOGIN}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const getCurrentUser = async (data) => {
  try {
    return await http.post(`${API_URL_GETCURRENTUSER}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export default {
  create,
  logIn,
  getCurrentUser,
};
