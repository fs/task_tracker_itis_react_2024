import { PacmanLoader } from 'react-spinners';
import { Container } from './styled';

const Loader = () => {

  return (
    <Container>
         <PacmanLoader color='rgba(116, 66, 200, 1)' />
    </Container>
  );

}

export default Loader;