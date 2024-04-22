import { Button } from 'react-bootstrap';
import { ErrorContainer, ErrorImage, ErrorMessage } from './styled';
import Image from './fetchingErrorImg.png';

const ProjectFetchingError = ({ errorMessage }) => {

    const handleRefresh = () => {
        window.location.reload();
    };

  return (
    <ErrorContainer>
      <ErrorImage src={Image} alt="Error" />
      <ErrorMessage>{errorMessage}</ErrorMessage>

      <Button variant='btn btn-outline-info' onClick={handleRefresh}>Refresh</Button>
    </ErrorContainer>
  );
};

export default ProjectFetchingError;
