import Footer from 'src/components/atoms/Footer';
import Header from '../../atoms/Header';
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
