import { Item, List, Text, Button } from './ContactlList.styled';

import { userContactSelector } from 'redux/contactSlice.js/selectors';
import { deleteContactThunk } from 'redux/contactSlice.js/operations';

const { useSelector, useDispatch } = require('react-redux');

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(userContactSelector);

  // console.log(contacts);

  return (
    <List>
      {contacts?.map(contact => (
        <Item key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <Button
            type="button"
            onClick={() => dispatch(deleteContactThunk(contact.id))}
          >
            &times;
          </Button>
        </Item>
      ))}
    </List>
  );
};
