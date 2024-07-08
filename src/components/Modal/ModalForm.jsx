import styles from './ModalForm.module.css';
import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import FormAddStudent from './Forms/FormAddStudent';
import FormDelStudent from './Forms/FormDelStudent';
import FormUpdateStudent from './Forms/FormUpdateStudent';
import FormGetStudentsByGroup from './Forms/FormGetStudentsByGroup';
function ModalForm({show, handleClose, action}) {

    let actionToModal = {
        'addStudent': {title: 'Добавить', component: FormAddStudent},
        'delStudent': {title: 'Удалить', component: FormDelStudent},
        'updateStudent': {title: 'Обновить', component: FormUpdateStudent},
        'getStudentsByGroup': {title: 'Найти по группе', component: FormGetStudentsByGroup}
    };
    const modalData = actionToModal[action],
        ModalContent = modalData ? modalData.component : 'Пусто',
        title = modalData?.title;

    const handleFormSubmit = (formData)=>{
        console.log('Данные из формы: ', formData);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title || 'Заголовок окна'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalContent onSubmit={handleFormSubmit}>
                    <Button variant="secondary" type="submit" className="container-fluid">
                        {title || 'Кнопка'}
                    </Button>
                </ModalContent>
            </Modal.Body>
        </Modal>
    );
}

export default ModalForm;
