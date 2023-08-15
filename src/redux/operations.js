import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContacts,
  fetchContacts,
  postContacts,
} from 'components/service/api';

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContacts();

      //   console.log(contacts);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const contacts = await postContacts(contact);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      await deleteContacts(contactId);
      return contactId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
