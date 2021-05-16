import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__DRUG: [],
  one__DRUG: {},
  loading__DRUG: true,
};

const DRUG__Slice = createSlice({
  name: 'DRUG__Slice',
  initialState,
  reducers: {
    add_one__DRUG(state, action) {
      state.array__DRUG = state.array__DRUG.push(action.payload);
      state.loading__DRUG = false;
    },
    update_one_DRUG(state, action) {
      state.array__DRUG = state.array__DRUG.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__DRUG = false;
    },
    get_all__DRUG(state, action) {
      state.array__DRUG = action.payload;
      state.loading__DRUG = false;
    },
    get_one__DRUG(state, action) {
      state.one__DRUG = action.payload;
      state.loading__DRUG = false;
    },
    delete_one__DRUG(state, action) {
      state.array__DRUG = state.array__DRUG.filter(
        (item) => item._id !== action.payload
      );
      state.loading__DRUG = false;
    },
  },
});

export const DRUG__Actions = DRUG__Slice.actions;

export default DRUG__Slice.reducer;
