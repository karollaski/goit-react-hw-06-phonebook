import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deletContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deletContact());

  return (
    <ul className={css.contactList}>
      {contacts &&
        contacts.map(contact => (
          <li className={css.contactList__item} key={contact.id}>
            {contact.name + ': ' + contact.number}
            <button
              className={css.contactList__btn}
              type="button"
              name="delete"
              onClick={handleDelete}
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
