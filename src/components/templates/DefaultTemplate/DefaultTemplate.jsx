import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';

import { Wrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      <Footer />
    </>
  )
}

export default DefaultTemplate;
