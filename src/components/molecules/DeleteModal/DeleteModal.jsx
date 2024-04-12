import { useContext } from "react";
import { Modal, Button } from 'react-bootstrap';


const DeleteModal = ({ isOpen, projectName, onCancel, onDelete }) => {
  const handleDeleteProject = () => {
    onDelete();
  };

  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Delete project</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        The project <strong>Project</strong> will be permanently deleted. Are you sure?
      </Modal.Body>

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
