import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__REVIEW: [],
  one__REVIEW: {},
  loading__REVIEW: true,
};

const REVIEW__Slice = createSlice({
  name: 'REVIEW__Slice',
  initialState,
  reducers: {
    add_one__REVIEW(state, action) {
      state.array__REVIEW = state.array__REVIEW.push(action.payload);
      state.loading__REVIEW = false;
    },
    update_one_REVIEW(state, action) {
      state.array__REVIEW = state.array__REVIEW.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__REVIEW = false;
    },
    get_all__REVIEW(state, action) {
      state.array__REVIEW = action.payload;
      state.loading__REVIEW = false;
    },
    get_one__REVIEW(state, action) {
      state.one__REVIEW = action.payload;
      state.loading__REVIEW = false;
    },
    delete_one__REVIEW(state, action) {
      state.array__REVIEW = state.array__REVIEW.filter(
        (item) => item._id !== action.payload
      );
      state.loading__REVIEW = false;
    },
  },
});

export const REVIEW__Actions = REVIEW__Slice.actions;

export default REVIEW__Slice.reducer;
