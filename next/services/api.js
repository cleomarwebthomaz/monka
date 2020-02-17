import axios from 'axios';

import { url } from '../config';

axios.defaults.baseURL = url;

axios.interceptors.request.use(
    async config => {
    //   const token = await AsyncStorage.getItem('token');

    //   if (token) {
    //     config.headers["Authorization"] = "Bearer " + token;
    //   }

      return config;
    },
    error => {
      return Promise.reject(error)
    }
);

  
export default axios;
