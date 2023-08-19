import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactThunk,
} from './operations';

const initialState = {
  contacts: null,
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: builder =>
    builder
      .addCase(getContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ================AddContact================

      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ===========DeleteContact=================

      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        //  const indexDeletedContact = state.contacts.findIndex(
        //   contact => contact.id === action.payload.id
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactReducer = contactSlice.reducer;
