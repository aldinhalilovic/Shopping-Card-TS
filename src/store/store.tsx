import { configureStore } from '@reduxjs/toolkit';
import { dataSlice } from './dataslice';

export const store = configureStore({
   reducer: {
      products: dataSlice.reducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
