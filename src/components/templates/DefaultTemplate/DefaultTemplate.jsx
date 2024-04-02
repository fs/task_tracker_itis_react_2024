import Header from '../../atoms/Header';
import Footer from '../../atoms/Header/Footer';

import { Wrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />

    </Wrapper>
  )
}

export default DefaultTemplate;