import Header from "../../atoms/Header";
import { Content, Wrapper } from "./styled";
import Footer from "../../atoms/Footer";

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer/>
    </Wrapper>
  );
};

export default DefaultTemplate;
