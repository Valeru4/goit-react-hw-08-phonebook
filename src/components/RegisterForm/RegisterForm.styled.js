import styled from 'styled-components';

export const FormContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #a9a9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: 20px;
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 30px;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin-bottom: 7px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
