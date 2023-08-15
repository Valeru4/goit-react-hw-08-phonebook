import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { ContactSelector } from 'redux/ContactSlice/selectors';
import { addContacts } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(ContactSelector);

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
    dispatch(addContacts(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={event => event.preventDefault()}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />

        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={event => setNumber(event.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
        <Button onClick={() => handlerAddContacts()} type="submit">
          Add contact
        </Button>
      </Form>
    </>
  );
};
