import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import {Modal, Button} from 'react-bootstrap';
import NotifierContext from 'src/context/NotifierContext';

const DeleteModal = ({ isOpen, projectName, onCancel, onDelete }) => {
  const { setMessage } = useContext(NotifierContext);

  const handleDeleteProject = () => {
    onDelete();
    setMessage(`Проект ${projectName} удален`)
  };

  return (
  <Modal show={isOpen} onHide={onCancel}>
    <Modal.Header closeButton>
      <Modal.Title>Delete project</Modal.Title>
    </Modal.Header>
    <Modal.Body>The project <strong>{projectName}</strong> will be permanently deleted. Are you sure?</Modal.Body>    
    <Modal.Footer>
      <Button variant="light" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDeleteProject}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default DeleteModal;
