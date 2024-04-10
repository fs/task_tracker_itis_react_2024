import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';

import { Wrapper, ButtonWrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const position = () => {
    setIsButtonVisible(window.scrollY > 100)
  }

  const scrollToTop = () => {
    window.scrollTo(0,0)
  };

  useEffect(() => {
    window.addEventListener('scroll', position);

    return () => {
      window.removeEventListener('scroll', position);
    };
  }, []);



  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper>
          <Button variant="info" onClick={scrollToTop}>↑</Button>
        </ButtonWrapper>
      )}

      <Footer />
    </>
  )
}

export default DefaultTemplate;
