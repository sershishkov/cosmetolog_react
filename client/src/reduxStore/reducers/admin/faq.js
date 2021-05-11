import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__FAQ: [],
  one__FAQ: {},
  loading__FAQ: true,
};

const FAQ__Slice = createSlice({
  name: 'FAQ__Slice',
  initialState,
  reducers: {
    add_one__FAQ(state, action) {
      state.array__FAQ = state.array__FAQ.push(action.payload);
      state.loading__FAQ = false;
    },
    update_one_FAQ(state, action) {
      state.array__FAQ = state.array__FAQ.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__FAQ = false;
    },
    get_all__FAQ(state, action) {
      state.array__FAQ = action.payload;
      state.loading__FAQ = false;
    },
    get_one__FAQ(state, action) {
      state.one__FAQ = action.payload;
      state.loading__FAQ = false;
    },
    delete_one__FAQ(state, action) {
      state.array__FAQ = state.array__FAQ.filter(
        (item) => item._id !== action.payload
      );
      state.loading__FAQ = false;
    },
  },
});

export const FAQ__Actions = FAQ__Slice.actions;

export default FAQ__Slice.reducer;
