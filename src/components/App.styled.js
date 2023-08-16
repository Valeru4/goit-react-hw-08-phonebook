import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Heading = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  margin-right: 15px;
  margin-top: 8px;
  padding: 10px 15px;
  background-color: beige;
  color: #000;
  text-decoration: none;
  border-radius: 5px;

  &.active {
    background-color: burlywood;
    color: #fff;
  }
`;
