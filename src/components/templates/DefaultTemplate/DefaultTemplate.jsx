import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';

import { Wrapper, ButtonWrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonvisible] = useState(false);

  const scrollToTop = () => {
  };

  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper>
          <Button variant="info" onClick={scrollToTop}>Наверх</Button>
        </ButtonWrapper>
      )}

      <Footer />
    </>
  )
}

export default DefaultTemplate;
