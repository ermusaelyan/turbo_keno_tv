import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  time: null,
};

export const getTimer = createAsyncThunk('timer/getTime', async () => {
  return await axios.get(
    'http://oliver.energaming.systems:20035/api/v1/get-seconds-till-draw',
    {
      params: {
        token: 'test-frontend-token',
        duration: 3,
        page: 0,
      },
    },
  );
});

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  extraReducers: {
    [getTimer.pending]: () => console.log('timer Pending'),
    [getTimer.fulfilled]: (state, { payload }) => {
      state.time = payload.data.data.secondsTillDraw;
    },
    [getTimer.rejected]: () => console.log('Markets Rejected'),
  },
});

export const selectTimer = state => state.timer.time;

const { reducer } = timerSlice;

export default reducer;
