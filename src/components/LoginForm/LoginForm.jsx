import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/authSlice/operations';
import {
  Button,
  Form,
  FormContainer,
  Heading,
  Input,
  Label,
  Text,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const OnHandlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const userDataFinal = {
      email,
      password,
    };

    dispatch(loginUserThunk(userDataFinal));
  };

  return (
    <FormContainer>
      <Heading> Login into your account</Heading>
      <Form onSubmit={OnHandlerSubmit}>
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
