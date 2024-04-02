import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 400px;
  background: rgba(0, 0, 0, 0);
  margin-top: 100px;
`;

export const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: lightgray;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
