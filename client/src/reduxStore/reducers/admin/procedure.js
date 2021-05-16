import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  array__PROCEDURE: [],
  one__PROCEDURE: {},
  loading__PROCEDURE: true,
};

const PROCEDURE__Slice = createSlice({
  name: 'PROCEDURE__Slice',
  initialState,
  reducers: {
    add_one__PROCEDURE(state, action) {
      state.array__PROCEDURE = state.array__PROCEDURE.push(action.payload);
      state.loading__PROCEDURE = false;
    },
    update_one_PROCEDURE(state, action) {
      state.array__PROCEDURE = state.array__PROCEDURE.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.loading__PROCEDURE = false;
    },
    get_all__PROCEDURE(state, action) {
      state.array__PROCEDURE = action.payload;
      state.loading__PROCEDURE = false;
    },
    get_one__PROCEDURE(state, action) {
      state.one__PROCEDURE = action.payload;
      state.loading__PROCEDURE = false;
    },
    delete_one__PROCEDURE(state, action) {
      state.array__PROCEDURE = state.array__PROCEDURE.filter(
        (item) => item._id !== action.payload
      );
      state.loading__PROCEDURE = false;
    },
  },
});

export const PROCEDURE__Actions = PROCEDURE__Slice.actions;

export default PROCEDURE__Slice.reducer;
