import { Button, Modal } from 'react-bootstrap';

import { WarningText } from './styled';

const WarningModal = ({ message, onConfirm, onCancel, show}) => {
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Unrevertable Action!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <WarningText>{message}</WarningText>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={onCancel}>Close</Button>
                <Button variant="danger" onClick={onConfirm}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default WarningModal;