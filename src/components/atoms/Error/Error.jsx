import { ErrorImg, ErrorMessage, ErrorTitle, ErrorWrapper } from "./styled";

const Error = ({status, message}) => {
  return (
    <ErrorWrapper>
        <ErrorImg src="error.jpg" alt="Error" />
        <ErrorTitle>Произошел прикол</ErrorTitle>
        <ErrorMessage><b>{status}</b> {message}</ErrorMessage>
    </ErrorWrapper>
  )

}

export default Error;