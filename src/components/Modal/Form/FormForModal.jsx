import {Form} from "react-bootstrap";
import {Field, ErrorMessage as Error, ErrorMessage} from "formik";

function FormForModal({id,inputName,nameLabel,handleChange,value,errors,touched}) {
    return (
        <>
            <div className="mb-3">
                <Form.Label htmlFor={id}>{nameLabel + ':'}</Form.Label>
                <Form.Control type="text" id={id} name={inputName} value={value} onChange={handleChange} isInvalid={touched && !!errors}/>
                <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
            </div>
            {/*<div className="mb-3">*/}
            {/*    <Form.Label htmlFor={id}>{nameLabel + ':'}</Form.Label>*/}
            {/*    <Form.Control type="text" id={id} name={inputName}/>*/}
            {/*    <Form.Control.Feedback type="invalid">{(error) => <span>{error}</span>}</Form.Control.Feedback>*/}
            {/*</div>*/}
        </>
    );
}

export default FormForModal;

