import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Product, Store } from '../models/models';
import instance from '../service/instance';

interface iState {
   data: Store;
   cartProduct: Product[];
   storageProducts: Store;
   categories: any;
}

const fetchMarketProducts = createAsyncThunk('market products', async (num: number) => {
   const response = await instance({
      url: `?limit=20&skip=${num}`,
   });
   return response.data;
});

const fetchStorageProducts = createAsyncThunk('storage products', async (search: string) => {
   const response = await instance({
      url: `/search?q=${search}&limit=100`,
   });
   return response.data;
});

const fetchProductCategories = createAsyncThunk('categories', async () => {
   const response = await instance({
      url: `/categories`,
   });
   return response.data;
});

const fetchCategoryProducts = createAsyncThunk('products from categories', async (categorie: any) => {
   const response = await instance({
      url: `/category/${categorie}`,
   });
   return response.data;
});

const initialState: iState = {
   data: { limit: 0, products: [], skip: 0, total: 0 },
   cartProduct: [],
   storageProducts: { limit: 0, products: [], skip: 0, total: 0 },
   categories: [],
};

export const dataSlice = createSlice({
   name: 'data',
   initialState,
   reducers: {
      clearData(state) {
         state.data = {
            limit: 0,
            products: [],
            skip: 0,
            total: 0,
         };
      },
      addProduct(state, action) {
         state.cartProduct.push(action.payload);
      },
      removeProduct(state, action) {
         state.cartProduct = state.cartProduct.filter((product) => product.id !== action.payload.id);
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchMarketProducts.fulfilled, (state, action) => {
         state.data = action.payload;
      });
      builder.addCase(fetchStorageProducts.fulfilled, (state, action) => {
         state.storageProducts = action.payload;
      });
      builder.addCase(fetchProductCategories.fulfilled, (state, action) => {
         state.categories = action.payload;
      });
      builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
         state.storageProducts = action.payload;
      });
   },
});

export { fetchCategoryProducts, fetchMarketProducts, fetchProductCategories, fetchStorageProducts };
export const dataAction = dataSlice.actions;
export default dataSlice;
