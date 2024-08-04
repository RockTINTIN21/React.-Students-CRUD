import {Button, Modal} from "react-bootstrap";
import successIcon from '../../assets/img/icons/mark.png';

function SuccessModal({title,message,showModal,closeModal}) {


    return (
        <>
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{title || 'Заголовок окна'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h4>{message || 'Текст окна'}</h4>
                        <img src={successIcon} alt="successIcon"/>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={closeModal}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SuccessModal;
