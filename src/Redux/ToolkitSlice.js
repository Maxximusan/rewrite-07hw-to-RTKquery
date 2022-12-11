import { createSlice } from '@reduxjs/toolkit';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
export const { filterChange } = FilterSlice.actions;

// export default ContactsSlice.reducer;
// export default FilterSlice.reducer

// SELECTORS
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;

console.log(ContactsSlice.actions);
console.log(FilterSlice.actions);
console.log(ContactsSlice.reducer);
console.log(FilterSlice.reducer);
console.log(getContacts);
console.log(getFilter);
