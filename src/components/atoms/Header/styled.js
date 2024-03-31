import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: #EEE0CB;
  padding: 3rem 0 .5rem 3rem;
  margin-bottom: 9rem;
`;

export const Nav = styled.nav`
  display: flex;
  margin-right: 51.6rem;
  gap: 1rem;
`;

export const Logo = styled(Link)`
  display: flex;
  color: #280003; 
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  ${'' /* justify-self: flex-start; */}
  margin-right: auto;
  transition: color 0.3s;
  
  &:hover {
    transition-duration: .75s;
    color: #BAA898;
  }
`;

export const StyledLink = styled(Link)`
  color: #280003;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 15px;
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: #BAA898;
  }
`;