import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Label,
  Input,
  Button,
  FormContainer,
  Heading,
  Text,
} from './ContactForm.styled';
import { useState } from 'react';

import { userContactSelector } from 'redux/contactSlice.js/selectors';
import { addContactThunk } from 'redux/contactSlice.js/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(userContactSelector);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlerAddContacts = () => {
    if (name === '' || number === '') {
      alert('Enter data');
      return;
    }
    const contact = {
      name: name,
      number: number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    if (contacts.some(contact => contact.phone === number)) {
      return alert(`${number} is already in contacts`);
    }

    // console.log(contact);
    dispatch(addContactThunk(contact));
    console.log(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Heading> Enter new contact</Heading>
      <Form onSubmit={event => event.preventDefault()}>
        <Label>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={event => setName(event.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Label>
          <Text>Number</Text>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={event => setNumber(event.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            placeholder="Enter your number"
          />
        </Label>

        <Button type="submit" onClick={() => handlerAddContacts()}>
          Add contact
        </Button>
      </Form>
    </>
  );
};
