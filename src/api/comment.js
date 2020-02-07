import axios from './';

export function getComments(params) {
  return axios.get('/comments', { params });
}
export function addComment(params) {
  return axios.post('/comments', { params });
}
