import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice, FilterSlice } from './ToolkitSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
    filter: FilterSlice.reducer,
  },
});
