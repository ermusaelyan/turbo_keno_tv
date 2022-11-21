import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  drawNums: [],
  history: [],
  currentDrawId: '',
  nextDrawId: '',
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
      state.drawNums = payload.data.data.lastRaces[0].r.split(',');
      state.history = payload.data.data.lastRaces.slice(1, 4);
      state.currentDrawId = payload.data.data.lastRaces[0].id;
      state.nextDrawId = payload.data.data.drawInfo.drawId;
    },
    [getHistory.rejected]: () => console.log('rejected'),
  },
});

export const { setHistory } = historySlice.actions;

export const selectDrawNums = state => state.history.drawNums;
export const selectHistory = state => state.history.history;
export const selectCurrentDrawId = state => state.history.currentDrawId;
export const selectNextDrawId = state => state.history.nextDrawId;

export default historySlice.reducer;
