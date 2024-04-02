import React from "react";
import { HeaderWrapper, Logo, Nav, NavLink } from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Itis React</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/info">Info</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
