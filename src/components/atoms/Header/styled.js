import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: rgba(116, 66, 200, 0.7);
  color: white;
  font-size: 20px;

  position: sticky;
  height: 62px;
  top: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  color: white;

  font-size: 1rem;

  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  transition: color 0.5s ease, background-color 0.5s ease;

  &:hover {
    color: #808080;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
