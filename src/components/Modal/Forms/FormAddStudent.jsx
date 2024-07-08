import {Form} from "react-bootstrap";
import FormForModal from '../../Form/FormForModal.jsx';
import {useState} from "react";
function FormAddStudent({children,onSubmit}) {
    const formId = "formAddStudent";
    const [formData, setFormData] = useState({name:'',lastName: '',age:'',group:''});

    const handleChange  = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(e)
        onSubmit(formData);
    };

    return (
        <Form id={formId} onSubmit={handleFormSubmit}>
            <FormForModal formId={formId} inputId="name" inputName="name" nameLabel="Имя" invalidId="validationFormAddStudentName" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="lastName" inputName="lastName" nameLabel="Отчество" invalidId="validationFormAddStudentLastName" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="age" inputName="age" nameLabel="Возраст" invalidId="validationFormAddStudentAge" onChange={handleChange}/>
            <FormForModal formId={formId} inputId="group" inputName="group" nameLabel="Группа" invalidId="validationFormAddGroup" onChange={handleChange}/>
            {children}
        </Form>
    );
}

export default FormAddStudent;
