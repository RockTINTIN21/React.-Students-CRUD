
import styles from './Body.module.css';
import ButtonModal from "../../components/Button/ButtonModal.jsx";
import { useState } from "react";
import ModalForm from "../../components/Modal/ModalForm.jsx";
function Body() {
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState(null);
    const saveFormType = (formType) => {
        setFormType(formType);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <main className="main-content mt-3">
            <div className="bg-white">
                <h3>Что хотите сделать сегодня?</h3>
                <div>
                    <ButtonModal text='Добавить студента' onClick={()=> saveFormType('addStudent')} />
                    <ButtonModal text='Удалить студента' onClick={()=> saveFormType('delStudent')} />
                    <ButtonModal text='Изменить студента' onClick={()=> saveFormType('updateStudent')} />
                    <ButtonModal text='Вывести студентов по группе' onClick={()=> saveFormType('getStudentsByGroup')} />

                </div>
            </div>
            <ModalForm show={showModal} handleClose={closeModal} action={formType} />
        </main>

    );
}

export default Body;