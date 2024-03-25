import { Link } from 'react-router-dom';

import { HeaderWrapper, Nav } from './styled';

const Header = () => {
  return (
    <HeaderWrapper>
      Header
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header;
