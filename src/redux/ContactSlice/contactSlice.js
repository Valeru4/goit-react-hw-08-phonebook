import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContact,
  fetchContactsList,
} from 'redux/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,

  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    getFilteredName: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContactsList.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContactsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContactsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { getFilteredName } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
