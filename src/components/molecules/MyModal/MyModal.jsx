import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const MyModal = ({stateShow, handleClose, textHeader, textBody, textCloseButton, textConfirmButton}) => {
  return (
    <Modal show={stateShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{textHeader}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{textBody}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          {textCloseButton}
        </Button>
        <Button variant="outline-danger">
          {textConfirmButton}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal;