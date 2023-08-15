import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from 'redux/ContactSlice/contactSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});
