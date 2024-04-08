import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalButton = ({ title, text, onClick, onCancel, show}) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{text}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onClick}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalButton;