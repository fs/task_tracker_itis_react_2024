import { HeaderWrapper, Nav, StyledLink } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      Отслеживание задач

      <Nav>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/projects">Проекты</StyledLink>
        <StyledLink to="/info">О нас</StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
