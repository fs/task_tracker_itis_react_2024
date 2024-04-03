import { useState, useEffect } from 'react';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import Button from '../../atoms/Button';

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
          <Button label="Наверх" color="#fe45ae" onClick={scrollToTop} />
        </ButtonWrapper>
      )}

      <Footer />
    </>
  )
}

export default DefaultTemplate;
