import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const getTextOfFilter = state => state.filters;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [selectContacts, getTextOfFilter],
  (contacts, textFilter) => {
    
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

