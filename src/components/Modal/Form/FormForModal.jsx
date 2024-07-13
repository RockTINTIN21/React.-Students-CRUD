import {Form} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../context.js";
function FormForModal({inputId,inputName,nameLabel,onChange}) {
    const contextValue = useContext(Context)
    return (
        <>
            <div className="mb-3">
                <Form.Label>{nameLabel + ':'}</Form.Label>
                <Form.Control type="text" id={inputId} name={inputName} required onChange={onChange}/>
                <Form.Control.Feedback type="invalid">{contextValue.textError}</Form.Control.Feedback>
            </div>
        </>
    );
}

export default FormForModal;
