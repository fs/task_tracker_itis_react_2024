import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import Notifier from "../../atoms/Notifier";

import { Wrapper, ButtonWrapper } from './styled';

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleToggleVisibility = () => {
    if(window.scrollY > 200) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleToggleVisibility);

    return () => document.removeEventListener('scroll', handleToggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'});
  };

  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper>
          <Button variant="dark" onClick={scrollToTop}>Наверх</Button>
        </ButtonWrapper>
      )}

      <Footer />

      <Notifier />
    </>
  )
}

export default DefaultTemplate;
