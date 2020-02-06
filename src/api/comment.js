import axios from './';

export function getComments(params) {
  return axios.get('/comments', { params });
}
