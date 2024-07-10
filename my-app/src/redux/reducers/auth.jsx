// login and logout
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },

  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;