import { Link } from 'react-router-dom';

import { HeaderWrapper, Nav } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      Header
      <Nav>
        <Link to="/">Home</Link>/
        <Link to="/projects">Project</Link>
        <Link to="/info">Info</Link>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
