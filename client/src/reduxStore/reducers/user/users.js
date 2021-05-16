import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__USER: [],
  one__USER: {},
  loading__USER: true,
};

const USER__Slice = createSlice({
  name: 'USER__Slice',
  initialState,
  reducers: {
    add_one__USER(state, action) {
      state.array__USER = state.array__USER.push(action.payload);
      state.loading__USER = false;
    },
    update_one_USER(state, action) {
      state.array__USER = state.array__USER.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__USER = false;
    },
    get_all__USER(state, action) {
      state.array__USER = action.payload;
      state.loading__USER = false;
    },
    get_one__USER(state, action) {
      state.one__USER = action.payload;
      state.loading__USER = false;
    },
    delete_one__USER(state, action) {
      state.array__USER = state.array__USER.filter(
        (item) => item._id !== action.payload
      );
      state.loading__USER = false;
    },
  },
});

export const USER__Actions = USER__Slice.actions;

export default USER__Slice.reducer;
