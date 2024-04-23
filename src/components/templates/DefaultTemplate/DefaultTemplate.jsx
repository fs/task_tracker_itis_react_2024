import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';

import { Wrapper, ButtonWrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper>
          <Button variant="info" onClick={scrollToTop}>Go up</Button>
        </ButtonWrapper>
      )}

      <Footer />
    </>
  );
};

export default DefaultTemplate;
