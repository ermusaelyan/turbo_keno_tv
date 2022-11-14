import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  history: [],
};

export const getHistory = createAsyncThunk('history/getHistory', async () => {
  const res = await axios.get(
    `http://oliver.energaming.systems:20034/api/v1/get-draw-results`,
    {
      params: {
        token: 'test-frontend-token',
        duration: 3,
        page: 0,
      },
    },
  );
  return res;
});

export const historySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: {
    [getHistory.pending]: () => console.log('pending'),
    [getHistory.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.history = payload;
    },
    [getHistory.rejected]: () => console.log('rejected'),
  },
});

export const { setHistory } = historySlice.actions;

export default historySlice.reducer;