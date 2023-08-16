import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  authentificated: false,
};

export const authSlice = createSlice(
  {
    name: 'auth',
    initialState: initialState,
  }

  //   extraReducers: builder =>
  //     builder
  //       .addCase(fetchContactsList.pending, state => {
  //         state.isLoading = true;
  //         state.error = null;
  //       })
  //       .addCase(fetchContactsList.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.items = action.payload;
  //       })
  //       .addCase(fetchContactsList.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       })

  //       .addCase(addContacts.pending, state => {
  //         state.isLoading = true;
  //         state.error = null;
  //       })
  //       .addCase(addContacts.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.items.push(action.payload);
  //       })
  //       .addCase(addContacts.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       })

  //       .addCase(deleteContact.pending, state => {
  //         state.isLoading = true;
  //         state.error = null;
  //       })
  //       .addCase(deleteContact.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.items = state.items.filter(
  //           contact => contact.id !== action.payload
  //         );
  //       })
  //       .addCase(deleteContact.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       }),
);

// export const { getFilteredName } = contactSlice.actions;
export const authReducer = authSlice.reducer;
