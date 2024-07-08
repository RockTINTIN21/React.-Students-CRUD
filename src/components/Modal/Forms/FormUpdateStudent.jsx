import {Form} from "react-bootstrap";
import {useState} from "react";
import FormForModal from "../../Form/FormForModal.jsx";
function FormUpdateStudent({children,onSubmit}) {

    const formId = "formUpdateStudent";
    const [formData, setFormData] = useState({id:'',name:'',lastName: '',age:'',group:''});

    const handleChange  = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Form id={formId} onSubmit={handleFormSubmit}>
            <FormForModal formId={formId} inputId="Id" inputName="id" nameLabel="ID" invalidId="validationFormUpdateStudenId" onChange={handleChange}></FormForModal>
            <FormForModal formId={formId} inputId="name" inputName="name" nameLabel="Имя" invalidId="validationFormUpdateStudentName" onChange={handleChange}></FormForModal>
            <FormForModal formId={formId} inputId="lastName" inputName="lastName" nameLabel="Отчество" invalidId="validationFormUpdateStudentLastName" onChange={handleChange}></FormForModal>
            <FormForModal formId={formId} inputId="age" inputName="age" nameLabel="Возраст" invalidId="validationFormUpdateStudentAge" onChange={handleChange}></FormForModal>
            <FormForModal formId={formId} inputId="group" inputName="group" nameLabel="Группа" invalidId="validationFormUpdateStudentGroup" onChange={handleChange}></FormForModal>
            {children}
        </Form>
    );
}

export default FormUpdateStudent;
