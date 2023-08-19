import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Heading = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const HomeLink = styled(Link)`
  margin-right: 15px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-size: 22px;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
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
