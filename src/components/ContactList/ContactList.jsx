import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactList}>
      {visibleContacts &&
        visibleContacts.map(contact => (
          <li className={css.contactList__item} key={contact.id}>
            {contact.name + ': ' + contact.number}
            <button
              className={css.contactList__btn}
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
// };

export default ContactList;
