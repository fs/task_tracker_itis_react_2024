import { HeaderWrapper, Nav , Logo, StyledLink } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to="/">
        Task Tracker
      </Logo>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/info">Info</StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
