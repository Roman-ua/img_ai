import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice.ts';

export default configureStore({
  reducer: {
    modeReducer: modeReducer,
  },
});
