import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  hotNums: [],
  coldNums: [],
};

export const getFrequency = createAsyncThunk(
  'frequency/getFrequency',
  async () => {
    const res = await axios.get(
      `http://oliver.energaming.systems:20035/api/v1/get-generic-info`,
      {
        params: {
          token: 'test-frontend-token',
          duration: 3,
          page: 0,
        },
      },
    );
    return res;
  },
);

export const frequencySlice = createSlice({
  name: 'frequency',
  initialState,
  extraReducers: {
    [getFrequency.pending]: () => console.log('Markets Pending'),
    [getFrequency.fulfilled]: (state, { payload }) => {
      console.log('>>>', payload.data.data.ballFrequency);
      state.hotNums = payload.data.data.ballFrequency['100'].hotBalls.map(
        el => {
          return el[0];
        },
      );
      state.coldNums = payload.data.data.ballFrequency['100'].coldBalls.map(
        el => {
          return el[0];
        },
      );
    },
    [getFrequency.rejected]: () => console.log('Markets Rejected'),
  },
});

export const { setFrequency } = frequencySlice.actions;

export const selectHotNums = state => state.frequency.hotNums;
export const selectColdNums = state => state.frequency.coldNums;

export default frequencySlice.reducer;
