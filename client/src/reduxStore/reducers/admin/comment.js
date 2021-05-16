import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__COMMENT: [],
  one__COMMENT: {},
  loading__COMMENT: true,
};

const COMMENT__Slice = createSlice({
  name: 'COMMENT__Slice',
  initialState,
  reducers: {
    add_one__COMMENT(state, action) {
      state.array__COMMENT = state.array__COMMENT.push(action.payload);
      state.loading__COMMENT = false;
    },
    update_one_COMMENT(state, action) {
      state.array__COMMENT = state.array__COMMENT.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__COMMENT = false;
    },
    get_all__COMMENT(state, action) {
      state.array__COMMENT = action.payload;
      state.loading__COMMENT = false;
    },
    get_one__COMMENT(state, action) {
      state.one__COMMENT = action.payload;
      state.loading__COMMENT = false;
    },
    delete_one__COMMENT(state, action) {
      state.array__COMMENT = state.array__COMMENT.filter(
        (item) => item._id !== action.payload
      );
      state.loading__COMMENT = false;
    },
  },
});

export const COMMENT__Actions = COMMENT__Slice.actions;

export default COMMENT__Slice.reducer;
