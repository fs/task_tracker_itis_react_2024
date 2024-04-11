import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Header from "../../atoms/Header";
import Footer from "../../atoms/Footer";

import { Wrapper, ButtonWrapper } from "./styled";

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper>
          <Button variant="info" onClick={scrollToTop}>
            Наверх
          </Button>
        </ButtonWrapper>
      )}

      <Footer />
    </>
  );
};

export default DefaultTemplate;
