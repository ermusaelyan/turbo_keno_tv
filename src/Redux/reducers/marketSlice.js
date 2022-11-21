import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  markets: [],
};

export const getMarkets = createAsyncThunk('markets/getMarkets', async () => {
  const res = await axios.get(
    `http://oliver.energaming.systems:20035/api/v1/markets/get`,
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

export const marketSlice = createSlice({
  name: 'markets',
  initialState,
  extraReducers: {
    [getMarkets.pending]: () => console.log('Markets Pending'),
    [getMarkets.fulfilled]: (state, { payload }) => {
      state.markets = payload.data.data;
    },
    [getMarkets.rejected]: () => console.log('Markets Rejected'),
  },
});

export const { setMarkets } = marketSlice.actions;

export default marketSlice.reducer;
