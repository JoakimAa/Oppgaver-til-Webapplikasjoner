import http from './http';

const API_URL = '/users';

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (err) {
    console.log('err');
    console.log(err);
    console.log('err.repsons.data');
    console.log(err.response.data);
    return err.response.data;
  }
};

export default {
  create,
};
