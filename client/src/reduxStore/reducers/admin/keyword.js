import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__KEYWORD: [],
  one__KEYWORD: {},
  loading__KEYWORD: true,
};

const KEYWORD__Slice = createSlice({
  name: 'KEYWORD__Slice',
  initialState,
  reducers: {
    add_one__KEYWORD(state, action) {
      state.array__KEYWORD = state.array__KEYWORD.push(action.payload);
      state.loading__KEYWORD = false;
    },
    update_one_KEYWORD(state, action) {
      state.array__KEYWORD = state.array__KEYWORD.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__KEYWORD = false;
    },
    get_all__KEYWORD(state, action) {
      state.array__KEYWORD = action.payload;
      state.loading__KEYWORD = false;
    },
    get_one__KEYWORD(state, action) {
      state.one__KEYWORD = action.payload;
      state.loading__KEYWORD = false;
    },
    delete_one__KEYWORD(state, action) {
      state.array__KEYWORD = state.array__KEYWORD.filter(
        (item) => item._id !== action.payload
      );
      state.loading__KEYWORD = false;
    },
  },
});

export const KEYWORD__Actions = KEYWORD__Slice.actions;

export default KEYWORD__Slice.reducer;
