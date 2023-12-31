import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/authSlice/operations';
import {
  Button,
  Form,
  FormContainer,
  Heading,
  Input,
  Label,
  Text,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const OnHandlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userDataFinal = {
      name,
      email,
      password,
    };

    dispatch(registerUserThunk(userDataFinal));
  };

  return (
    <FormContainer>
      <Heading> Registration form</Heading>
      <Form onSubmit={OnHandlerSubmit}>
        <Label>
          <Text>Name</Text>
          <Input
            name="userName"
            type="text"
            required
            minLength={2}
            placeholder="Enter your name"
          />
        </Label>

        <Label>
          <Text>Email</Text>
          <Input
            name="userEmail"
            type="email"
            required
            minLength={2}
            placeholder="Enter your email"
          />
        </Label>

        <Label>
          <Text>Password</Text>
          <Input
            name="userPassword"
            type="password"
            required
            minLength={7}
            placeholder="Enter your password"
          />
        </Label>

        <Button type="submit">Sign Up</Button>
      </Form>
    </FormContainer>
  );
};
