import { Alert } from "react-bootstrap";
import { Container } from "./styled";

const FetchError = () => {
  return (
    <Container>
      <Alert variant="danger" style={{ width: "42rem" }}> 
        <Alert.Heading> 
          Произошла ошибка при загрузке.
        </Alert.Heading> 
      </Alert> 
    </Container>
  )
}

export default FetchError;