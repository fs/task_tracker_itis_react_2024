import { HeaderWrapper, Nav, StyledLink } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      Task Trakser

      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/info">Info</StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
