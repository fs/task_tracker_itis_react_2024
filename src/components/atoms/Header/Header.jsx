import { HeaderWrapper, Nav, NavLink } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/info">Info</NavLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;