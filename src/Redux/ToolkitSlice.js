import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// используем immer - 1й вариант
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.error = null;
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
  },
});

// // без IMMER! - 2й вариант
// export const ContactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       return {
//         ...state,
//         isLoading: true,
//       };
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         contacts: action.payload,
//         isLoading: false,
//       };
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     },

//     [addContact.pending]: state => {
//       return {
//         ...state,
//         isLoading: true,
//       };
//     },
//     [addContact.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//         isLoading: false,
//       };
//     },
//     [addContact.rejected]: (state, action) => {
//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     },

//     [deleteContact.pending]: state => {
//       return {
//         ...state,
//         isLoading: true,
//       };
//     },
//     [deleteContact.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         isLoading: false,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload.id
//         ),
//       };
//     },
//     [deleteContact.rejected]: state => {
//       return {
//         ...state,
//         isLoading: false,
//       };
//     },
//   },
// });

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});
export const { filterChange } = FilterSlice.actions;

// SELECTORS
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
