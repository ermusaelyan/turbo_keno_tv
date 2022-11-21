import { configureStore } from '@reduxjs/toolkit';
import historySlice from '../reducers/historySlice';
import marketSlice from '../reducers/marketSlice';
import limitsSlice from '../reducers/limitsSlice';
import frequencySlice from '../reducers/frequencySlice';

export const store = configureStore({
  reducer: {
    history: historySlice,
    markets: marketSlice,
    limits: limitsSlice,
    frequency: frequencySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
