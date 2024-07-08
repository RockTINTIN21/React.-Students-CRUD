import {Form} from "react-bootstrap";
function FormForModal({inputId,inputName,nameLabel,invalidId,onChange}) {

    return (
        <>
            <div className="mb-3">
                <Form.Label className="form-label">{nameLabel + ':'}</Form.Label>
                <Form.Control type="text" className="form-control" id={inputId} name={inputName} required onChange={onChange}/>
                <div id={invalidId} className="invalid-feedback"></div>
            </div>
        </>
    );
}

export default FormForModal;
