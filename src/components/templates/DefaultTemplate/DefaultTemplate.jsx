import { useState, useEffect } from "react";
import Header from '../../atoms/Header';
import { ButtonWrapper, Wrapper } from "./styled";
import Footer from "../../atoms/Footer";
import PrettyButton from "../../atoms/PrettyButton";

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  const handleToggleVisibility = () => {
    if(window.scrollY > 150) {
      setIsButtonVisible(true)
    }
    else {
      setIsButtonVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  useEffect(() => {
    document.addEventListener("scroll", handleToggleVisibility);
    return () => document.removeEventListener("scroll", handleToggleVisibility)
  }, []);

  return (
    <div>
      <Wrapper>
        <Header/>
        {children}
        <Footer/>
      </Wrapper>
      <ButtonWrapper>{isButtonVisible && <PrettyButton color="gray" label="Наверх" onClick={scrollToTop}/>}</ButtonWrapper>

    </div>
  )
}

export default DefaultTemplate;
