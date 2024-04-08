import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: #3a74f7;
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
`;
