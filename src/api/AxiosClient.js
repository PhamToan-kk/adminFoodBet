import axios from 'axios';
import queryString from 'query-string';
import { AsyncStorageService } from '../services/asyncStorageService'
import Config from 'react-native-config';

// const baseURL = "http://localhost:3000"

// const BASE_URL=http://192.168.3.102:3000

// const baseURL = "http:10.30.40.84:3000"
const baseURL = "http:172.20.10.2:3000"


const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});



axiosClient.interceptors.request.use(
  async (config) => {
  // Handle token here ...
  const accessToken = await AsyncStorageService.getAccessToken()
       if (accessToken) {
        //  console.log('accessTokem',accessToken)
           config.headers['Authorization'] = 'Bearer ' + accessToken;
       }
       config.headers['Content-Type'] = 'application/json';
       return config;
  },
  error =>{
    console.log('erro11',err)
    Promise.reject(error)
  }

);
axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
    }
    return response;
}, async (err) => {
  const originalRequest = err.config;
  console.log('originalRequest',originalRequest)
  console.log('status ',err.response.status)
  console.log('err-data ',err.response.data)
  alert(err.response.data.error.message)


  if(err.response.status === 401 && originalRequest.url==="/authen/login" ){
    return Promise.reject(err.response.data);
  }
  if(err.response.status === 401 && originalRequest.url!=="/authen/refeshToken" ){
    const refreshToken = await AsyncStorageService.getRefreshToken()

    console.log('resfreshToken-',refreshToken)
    return axios.post(baseURL + '/authen/refreshToken',
           {
               "refreshToken": refreshToken
           })
           .then(res => {
            //  console.log('res.status',res.status)
            //  console.log('res.status',res)
               if (res.status === 200) {
                   AsyncStorageService.setTokens(res.data);
                   axiosClient.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
                   return axiosClient(originalRequest);
               }
           })
  }
  // console.log(err)
  throw err;
});

export default axiosClient;