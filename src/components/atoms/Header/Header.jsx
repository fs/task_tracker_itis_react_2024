import { HeaderWrapper, Nav, StyledLink } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      Трекер Задач

      <Nav>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/projects">Проекты</StyledLink>
        <StyledLink to="/info">Инфо</StyledLink>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
