import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from 'redux/authSlice/operations';

export const getContactThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const response = await $instance.get('/contacts');

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/post',
  async (contactsUSer, thunkApi) => {
    try {
      const response = await $instance.post('/contacts', contactsUSer);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const response = await $instance.delete(`/contacts/${contactId}`);
      console.log(contactId);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
