import Axios from 'axios';

const apiUrl = ' https://discussion-page-server.herokuapp.com/';

const axios = Axios.create({
  baseURL: apiUrl,
});

export default axios;
