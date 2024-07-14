import {Form} from "react-bootstrap";
import FormForModal from "../Form/FormForModal.jsx";
function FormUpdateStudent({children,handleFormSubmit,handleChange}) {
    const formId = "formUpdateStudent";
    return (
        <Form id={formId} onSubmit={handleFormSubmit}>
            <FormForModal formId={formId} inputId="Id" inputName="id" nameLabel="ID" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="name" inputName="name" nameLabel="Имя" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="lastName" inputName="lastName" nameLabel="Отчество" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="age" inputName="age" nameLabel="Возраст" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="group" inputName="group" nameLabel="Группа"onChange={handleChange}/>
            {children}
        </Form>
    );
}

export default FormUpdateStudent;
