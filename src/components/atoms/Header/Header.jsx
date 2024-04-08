import { HeaderWrapper, Nav, HeaderTitle, NavLink } from "./styled";


const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Header</HeaderTitle>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/info">Info</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
