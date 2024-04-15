import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const DeleteModal = ({ text, onCancel, onDelete, show }) => {


  return (
  <Modal show={show} onHide={onCancel}>
    <Modal.Header closeButton>
      <Modal.Title>Delete project</Modal.Title>
    </Modal.Header>
    <Modal.Body>{text}</Modal.Body>
    <Modal.Footer>
      <Button variant="light" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="danger" onClick={onDelete}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal;