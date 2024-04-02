import { Link } from 'react-router-dom';

import { HeaderWrapper, Nav } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      Header
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/projects">Projects</Link>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;