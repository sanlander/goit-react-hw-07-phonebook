import { createSlice, nanoid } from '@reduxjs/toolkit';
import { firstLetterToUppercase } from 'components';

const initialDada = [
  { id: 1, name: 'firstLetterToUppercase(name)', phone: '0674552288' },
  { id: 2, name: 'firstLetterToUppercase', phone: '0674552288' },
  { id: 3, name: 'firstLetter', phone: '0674552288' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialDada,
  reducers: {
    addContacts(state, action) {
      const { name, phone } = action.payload;

      const newContact = {
        id: nanoid(5),
        name: firstLetterToUppercase(name),
        phone,
      };

      state.push(newContact);
    },

    deleteContacts(state, action) {
      return state.filter(i => i.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsdReducer = contactsSlice.reducer;
