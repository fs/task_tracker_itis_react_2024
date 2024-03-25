import Header from '../../atoms/Header';
import { Wrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />

      {children}

    </Wrapper>
  )
}

export default DefaultTemplate;
