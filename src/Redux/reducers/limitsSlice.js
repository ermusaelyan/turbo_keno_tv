import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  maxBet: '',
  minBet: '',
  maxWin: '',
  currency: '',
};

export const getLimits = createAsyncThunk('limits/getLimits', async () => {
  const res = await axios.get(
    `http://oliver.energaming.systems:20035/api/v1/get-game-versions`,
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

export const limitsSlice = createSlice({
  name: 'limits',
  initialState,
  extraReducers: {
    [getLimits.pending]: () => console.log('Limits Pending'),
    [getLimits.fulfilled]: (state, { payload }) => {
      state.maxBet = payload.data.data.maximalBet;
      state.minBet = payload.data.data.minimalBet;
      state.maxWin = payload.data.data.maxWin;
      state.currency = payload.data.data.currency;
    },
    [getLimits.rejected]: () => console.log('Limits Rejected'),
  },
});

export const { setLimits } = limitsSlice.actions;

export default limitsSlice.reducer;
