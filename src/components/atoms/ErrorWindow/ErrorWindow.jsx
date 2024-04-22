// eslint-disable-next-line import/named
import {ErrorWindowDesc, ErrorWindowTitle, StyledErrorWindow} from './styled';

const ErrorWindow = ({ title, desc }) => {

  return (
    <StyledErrorWindow>
      <ErrorWindowTitle> {title}</ErrorWindowTitle>
      <ErrorWindowDesc>{desc}</ErrorWindowDesc>
    </StyledErrorWindow>
  )
}

export default ErrorWindow;
