import axios from 'axios';
import React from 'react';

const instance = axios.create({
   baseURL: 'https://dummyjson.com/products',
   method: 'GET',
});

export default instance;
