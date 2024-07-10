import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/auth';
import getAndEditProfile from './reducers/editProfil'

const store = configureStore({
  reducer: {
    auth: authSlice,
    getinfo: getAndEditProfile,
  },
});

export default store;