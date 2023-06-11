import { createSlice } from '@reduxjs/toolkit';
import getPostsList from "../asyncThunks/lystThunk.ts";

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getPostsList.fulfilled,
      (state, action: any) => {
        state.list = action.payload.data
      }
    )
  },
});

export default listSlice.reducer;
