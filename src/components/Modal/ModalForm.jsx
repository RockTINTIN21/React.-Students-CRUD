import styles from './ModalForm.module.css';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {Context} from './context.js';
import FormAddStudent from './Forms/FormAddStudent';
import FormDelStudent from './Forms/FormDelStudent';
import FormUpdateStudent from './Forms/FormUpdateStudent';
import FormGetStudentsByGroup from './Forms/FormGetStudentsByGroup';
import { validateFormData } from '../../ValidationForm.jsx';
import {Formik} from "formik";
function ModalForm({show, handleClose, action}) {

    const actionToModal = {
        'addStudent': {title: 'Добавить', component: FormAddStudent,values:{name:"",lastName:"",age:"",group:""}},
        'delStudent': {title: 'Удалить', component: FormDelStudent,values:{name:"",lastName:"",age:"",group:""}},
        'updateStudent': {title: 'Обновить', component: FormUpdateStudent,values:{name:"",lastName:"",age:"",group:""}},
        'getStudentsByGroup': {title: 'Найти по группе', component: FormGetStudentsByGroup,values:{id:"",name:"",lastName:"",age:"",group:""}}
    },
    modalData = actionToModal[action],
    ModalContent = modalData ? modalData.component : 'Пусто',
    FormValues = modalData ? modalData.values : null,
    title = modalData?.title;
    const [formData, setFormData] = useState(FormValues);
    const [textError, setTextError] = useState('')
    const [validated, setValidated] = useState(false);
    const onChange  = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const onSubmit = (e)=>{
        e.preventDefault();

        const form = e.currentTarget;
        console.log(formData)
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        validateFormData(formData,setTextError);
        console.log('Текст ошибки:', textError)
        if(textError === null){
            setValidated(true);
        }else{
            setValidated(false);
            console.log('Опа')
        }
        setValidated(true);
    };

    return (
        <Context.Provider value={{textError,setTextError}}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title || 'Заголовок окна'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik initialValues={FormValues} onSubmit={()=>console.log('Успешно!')}>
                        <ModalContent handleFormSubmit={onSubmit} handleChange={onChange} validated={validated}>
                            <Button variant="success" type="submit" className="container-fluid">
                                {title || 'Кнопка'}
                            </Button>
                        </ModalContent>
                    </Formik>


                </Modal.Body>
            </Modal>
        </Context.Provider>

    );
}

export default ModalForm;
