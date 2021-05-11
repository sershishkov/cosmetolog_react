import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  arrayAllerts: [],
};

const alert__Slice = createSlice({
  name: 'alert__Slice',
  initialState,
  reducers: {
    setAlert(state, action) {
      state.arrayAllerts = [...state.arrayAllerts, action.payload];
    },
    removeAlert(state, action) {
      state.arrayAllerts = state.arrayAllerts.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const alert__Actions = alert__Slice.actions;

export default alert__Slice.reducer;
