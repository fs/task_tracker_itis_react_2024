import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import { CenteredModalTitle } from "./styled";

const DeleteModalWindow = ({show, onHide, onConfirm, id}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <CenteredModalTitle>Удаление проекта {id}</CenteredModalTitle>
      </Modal.Header>
      <Modal.Body>
        <p>Вы уверены, что хотите удалить проект?</p>
          Данное действие необратимо.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Delete</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default DeleteModalWindow;