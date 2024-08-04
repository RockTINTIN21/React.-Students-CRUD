import {Form} from "react-bootstrap";

function FormForModal({id,inputName,nameLabel,handleChange,value,errors,touched,serverErrors}) {
    return (
        <>
            <div className="mb-3">
                <Form.Label htmlFor={id}>{nameLabel + ':'}</Form.Label>
                <Form.Control type="text" id={id} name={inputName} value={value} onChange={handleChange} isInvalid={(touched && !!errors) || (touched && !!serverErrors)}/>
                <Form.Control.Feedback type="invalid">{errors || serverErrors}</Form.Control.Feedback>
            </div>
        </>
    );
}

export default FormForModal;

