import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageName: '',
};

const nameOfPage__Slice = createSlice({
  name: 'nameOfPage__Slice',
  initialState,
  reducers: {
    setPage(state, action) {
      state.pageName = action.payload.pageName;
    },
  },
});

export const nameOfPage__Actions = nameOfPage__Slice.actions;

export default nameOfPage__Slice.reducer;
