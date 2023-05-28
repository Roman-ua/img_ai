import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'dark'
  },
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    }
  }
  });

// this is for dispatch
export const { setMode } = modeSlice.actions;

// this is for configureStore
export default modeSlice.reducer;
