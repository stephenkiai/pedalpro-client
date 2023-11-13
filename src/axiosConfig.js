import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pedalpro-backend-7e4e20870534.herokuapp.com/',
});

export default axiosInstance;
