import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authentificatedSelector } from 'redux/authSlice/selectors';
import { getContactThunk } from 'redux/contactSlice.js/operations';
import {
  contactErrorSelector,
  contactIsLoadingSelector,
  userContactSelector,
} from 'redux/contactSlice.js/selectors';
import { ListContacts, Section } from './ContactsPage.styled';

const ContactsPage = () => {
  const authentificated = useSelector(authentificatedSelector);
  const contacts = useSelector(userContactSelector);
  const isLoading = useSelector(contactIsLoadingSelector);
  const error = useSelector(contactErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(getContactThunk());
  }, [authentificated, dispatch]);

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <Section>
      <ContactForm />

      {isLoading && <Loader />}
      {error && <p> Something goes wrong. {error}</p>}

      <ListContacts>{showContacts && <ContactList />}</ListContacts>
    </Section>
  );
};
export default ContactsPage;
