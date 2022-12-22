// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as MockAPI from '../Api/mockapiBackend';
// axios.defaults.baseURL = 'https://63a2db089704d18da07e574d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = MockAPI.fetchContacts();
      console.log(contacts);
      return contacts;
      //   const { data } = await axios.get('/contacts');
      //   return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const add = MockAPI.addContact(contact);
      return add;
      //   const { data } = await axios.post('/contacts', contact);
      //   return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const deleted = MockAPI.deleteContact(contactId);
      return deleted;
      //   const { data } = await axios.delete(`/contacts/${contactId}`);
      //   return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// закоммиченое - это второй вариант, без использования отдельного файла API
