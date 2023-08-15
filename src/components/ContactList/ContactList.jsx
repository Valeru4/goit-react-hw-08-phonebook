import { Item, List, Text, Button, Paragraph } from './Contact.styled';
import { ContactSelector, FilterSelector } from 'redux/ContactSlice/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContactsList } from 'redux/operations';

const { useSelector, useDispatch } = require('react-redux');

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(ContactSelector);
  const filter = useSelector(FilterSelector);

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [dispatch]);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContact.length === 0)
    return <Paragraph>There is no contact added</Paragraph>;

  return (
    <List>
      {filteredContact?.map(contact => (
        <Item key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            &times;
          </Button>
        </Item>
      ))}
    </List>
  );
};
