import styles from './ModalForm.module.css';
import {Button, Modal} from "react-bootstrap";
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
        'addStudent': {title: 'Добавить', component: FormAddStudent},
        'delStudent': {title: 'Удалить', component: FormDelStudent},
        'updateStudent': {title: 'Обновить', component: FormUpdateStudent},
        'getStudentsByGroup': {title: 'Найти по группе', component: FormGetStudentsByGroup}
    },
    modalData = actionToModal[action],
    ModalContent = modalData ? modalData.component : 'Пусто',
    title = modalData?.title;

    const [formData, setFormData] = useState({});
    const [textError, setTextError] = useState('')
    const [validated, setValidated] = useState(false);

    const onChange  = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const onSubmit = (e)=>{
        e.preventDefault();

        const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.stopPropagation();
        // }
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

                        <ModalContent handleFormSubmit={onSubmit} handleChange={onChange} validated={validated}>
                            <Button variant="success" type="submit" className="container-fluid">
                                {title || 'Кнопка'}
                            </Button>
                        </ModalContent>


                </Modal.Body>
            </Modal>
        </Context.Provider>

    );
}

export default ModalForm;
