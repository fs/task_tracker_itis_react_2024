import React from "react";
import Header from "../../atoms/Header";
import Footer from "../../atoms/Footer";
import { Wrapper, HeaderWrapper, Content } from "./styled";

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default DefaultTemplate;
