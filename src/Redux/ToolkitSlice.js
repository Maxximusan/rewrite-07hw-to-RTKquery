import { createSlice } from '@reduxjs/toolkit';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
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

console.log(ContactsSlice.actions);
console.log(FilterSlice.actions);
console.log(ContactsSlice.reducer);
console.log(FilterSlice.reducer);
