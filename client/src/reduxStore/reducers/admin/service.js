import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__SERVICE: [],
  one__SERVICE: {},
  loading__SERVICE: true,
};

const SERVICE__Slice = createSlice({
  name: 'SERVICE__Slice',
  initialState,
  reducers: {
    add_one__SERVICE(state, action) {
      state.array__SERVICE = state.array__SERVICE.push(action.payload);
      state.loading__SERVICE = false;
    },
    update_one_SERVICE(state, action) {
      state.array__SERVICE = state.array__SERVICE.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__SERVICE = false;
    },
    get_all__SERVICE(state, action) {
      state.array__SERVICE = action.payload;
      state.loading__SERVICE = false;
    },
    get_one__SERVICE(state, action) {
      state.one__SERVICE = action.payload;
      state.loading__SERVICE = false;
    },
    delete_one__SERVICE(state, action) {
      state.array__SERVICE = state.array__SERVICE.filter(
        (item) => item._id !== action.payload
      );
      state.loading__SERVICE = false;
    },
  },
});

export const SERVICE__Actions = SERVICE__Slice.actions;

export default SERVICE__Slice.reducer;
