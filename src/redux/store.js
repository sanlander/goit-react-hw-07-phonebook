import { configureStore } from '@reduxjs/toolkit';
import { contactsdReducer } from './contactsReducer';
import { filtersReducer } from './filtersReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsdReducer,
    filters: filtersReducer,
  },
});
