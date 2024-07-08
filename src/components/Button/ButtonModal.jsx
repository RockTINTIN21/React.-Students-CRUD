import './ButtonModal.css';
import { Button } from "react-bootstrap";

function ButtonModal({ text, onClick }) {
    return (
        <Button type="button" variant="primary" className="ms-1 me-1" onClick={onClick}>
            {text}
        </Button>
    );
}

export default ButtonModal;