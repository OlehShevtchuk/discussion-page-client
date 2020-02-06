import Axios from 'axios';

const apiUrl = 'http://localhost:3030';

const axios = Axios.create({
  baseURL: apiUrl,
});

export default axios;
