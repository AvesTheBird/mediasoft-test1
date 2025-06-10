import { configureStore } from '@reduxjs/toolkit';
import { artApi } from '../api/api';

export const store = configureStore({
  reducer: {
    [artApi.reducerPath]: artApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artApi.middleware),
});
