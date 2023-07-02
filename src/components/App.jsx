// import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import css from './App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p>Your phonebook i empty. Please add your first contact.</p>
      )}
      {contacts.length > 0 ? <ContactList /> : null}
    </div>
  );
};

export default App;
