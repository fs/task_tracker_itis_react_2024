import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: rgba(116, 66, 200, 0.7);
  color: #ffffff;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  margin-left: 10px;
  padding: 5px 10px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transition: color 0.5s ease, background-color 0.5s ease;
  text-decoration:none;

  &:hover {
    color: #808080;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;