import { configureStore } from '@reduxjs/toolkit';
import historySlice from '../reducers/historySlice';

export const store = configureStore({
  reducer: {
    history: historySlice,
  },
});
