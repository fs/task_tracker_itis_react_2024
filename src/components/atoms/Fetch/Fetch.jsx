import { ErrorContainer, ErrorMessage } from "./styled";

const Fetch = (message) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
}

export default Fetch;