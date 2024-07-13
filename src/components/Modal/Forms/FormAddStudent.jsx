import {Form} from "react-bootstrap";
import FormForModal from '../Form/FormForModal.jsx';
function FormAddStudent({children,handleFormSubmit,handleChange,validated}) {
    const formId = "formAddStudent";
    return (
        <Form id={formId} onSubmit={handleFormSubmit} validated={validated} noValidate>
            <FormForModal formId={formId} inputId="name" inputName="name" nameLabel="Имя" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="lastName" inputName="lastName" nameLabel="Отчество" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="age" inputName="age" nameLabel="Возраст" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="group" inputName="group" nameLabel="Группа" onChange={handleChange}/>
            {children}
        </Form>
    );
}

export default FormAddStudent;
