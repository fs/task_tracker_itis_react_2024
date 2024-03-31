import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import { Leaf1, Leaf2, Wrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      
      <Leaf1 src='/img/leaf-1.png' alt='leaf image' />
      <Leaf2 src='/img/leaf-2.png' alt='leaf image' />
      <center>
        {children}
      </center>

      <Footer />
    </Wrapper>
  )
}

export default DefaultTemplate;
