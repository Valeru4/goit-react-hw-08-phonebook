import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const Button = styled.button`
  padding: 5px 8px;
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
