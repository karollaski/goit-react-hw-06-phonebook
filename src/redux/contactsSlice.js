import { createSlice, nanoid } from '@reduxjs/toolkit';
import { save, load } from 'components/service/storage';

const contacts = load('contacts') !== undefined ? load('contacts') : [];

const contactsInitialState = {
  items: contacts,
};
// const contactsInitialState = contacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);

        save('contacts', state.items);
      },
      prepare(newContact) {
        return {
          payload: { id: nanoid(), ...newContact },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );

      state.items.splice(index, 1);
      save('contacts', state.items);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
