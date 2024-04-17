import { Button, Modal } from 'react-bootstrap';

import { ModalMassage } from './styled';

const ModalWindow = ({ message, onConfirm, onCancel, show}) => {
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Body>
                <ModalMassage>{message}</ModalMassage>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onCancel}>Отмена</Button>
                <Button variant="danger" onClick={onConfirm}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalWindow;