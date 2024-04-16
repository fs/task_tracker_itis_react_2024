import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import {CenteredModalTitle} from "./styled";

const DeleteModalPopUpWIndow = ({isVisible, onHide, onDelete, projectId}) => {
  return (
    <Modal show={isVisible} onHide={onHide}>
      <Modal.Header closeButton>
        <CenteredModalTitle>Удаление проекта {projectId}</CenteredModalTitle>
      </Modal.Header>
      <Modal.Body>
        <p>Вы точно хотите удалить проект?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>Нет</Button>
        <Button variant="danger" onClick={onDelete}>Да</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModalPopUpWIndow;