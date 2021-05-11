import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading__User: true,
  user: null,
};

const USER_AUTH__Slice = createSlice({
  name: 'USER_AUTH__Slice',
  initialState,
  reducers: {
    getMe(state, action) {
      state.isAuthenticated = true;
      state.loading__User = false;
      state.user = action.payload;
    },
    login(state, action) {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading__User = false;
    },
    logout(state) {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading__User = false;
    },
  },
});

export const USER_AUTH__Actions = USER_AUTH__Slice.actions;

export default USER_AUTH__Slice.reducer;
