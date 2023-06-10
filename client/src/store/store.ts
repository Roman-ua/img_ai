import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice.ts';
import listReducer from "./slices/listSlice.ts";

export const store = configureStore({
  reducer: {
    modeReducer: modeReducer,
    listReducer: listReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
