import { configureStore } from '@reduxjs/toolkit';
import { testRTKqueryApi } from './ourSlice'

export const store = configureStore({
  reducer: {
    [testRTKqueryApi.reducerPath]: testRTKqueryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testRTKqueryApi.middleware),
});
