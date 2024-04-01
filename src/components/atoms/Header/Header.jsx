import { Link } from 'react-router-dom';

import { HeaderWrapper, Nav } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/info">Info</Link>

      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
