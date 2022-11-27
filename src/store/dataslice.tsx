import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Store } from '../models/models';
import { RootState, store } from './store';

const BASE_URL = ' https://dummyjson.com/products';

interface iState {
   data: Store[];
}

const initialState: iState = {
   data: [{ limit: 0, products: [], skip: 0, total: 0 }],
};

export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      axiosFunction(state, action) {
         axios.get(`${BASE_URL}?limit=20&skip=${action.payload}`).then((data) => state.data.push(data.data));
      },
      //   getData(state) {},
   },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
