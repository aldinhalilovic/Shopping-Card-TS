import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://dummyjson.com/products',
   method: 'GET',
});

export default instance;
