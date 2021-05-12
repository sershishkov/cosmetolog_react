import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__ARTICLE: [],
  one__ARTICLE: {},
  loading__ARTICLE: true,
};

const ARTICLE__Slice = createSlice({
  name: 'ARTICLE__Slice',
  initialState,
  reducers: {
    add_one__ARTICLE(state, action) {
      state.array__ARTICLE = state.array__ARTICLE.push(action.payload);
      state.loading__ARTICLE = false;
    },
    update_one_ARTICLE(state, action) {
      state.array__ARTICLE = state.array__ARTICLE.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__ARTICLE = false;
    },
    get_all__ARTICLE(state, action) {
      state.array__ARTICLE = action.payload;
      state.loading__ARTICLE = false;
    },
    get_one__ARTICLE(state, action) {
      state.one__ARTICLE = action.payload;
      state.loading__ARTICLE = false;
    },
    delete_one__ARTICLE(state, action) {
      state.array__ARTICLE = state.array__ARTICLE.filter(
        (item) => item._id !== action.payload
      );
      state.loading__ARTICLE = false;
    },
  },
});

export const ARTICLE__Actions = ARTICLE__Slice.actions;

export default ARTICLE__Slice.reducer;
