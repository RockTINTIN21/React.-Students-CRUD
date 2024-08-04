import {Button, Form, Modal} from "react-bootstrap";
import FormAddStudent from './Forms/FormAddStudent';
import FormDelStudent from './Forms/FormDelStudent';
import FormUpdateStudent from './Forms/FormUpdateStudent';
import FormGetStudentsByGroup from './Forms/FormGetStudentsByGroup';
import {getApiData,validationSchema} from '../../ValidationForm.js';
import {Formik} from "formik";
import {useState} from "react";
import SuccessModal from "../SuccessModal/SuccessModal.jsx";
function ModalForm({show, handleClose, action, onSubmit}) {

    const actionToModal = {
        'addStudent': {title: 'Добавить', component: FormAddStudent,values:{name:"",lastName:"",age:"",group:""},successMessage:'Студент был успешно добавлен!',method:"POST"},
        'delStudent': {title: 'Удалить', component: FormDelStudent,values:{id:""},successMessage:'Студент был успешно удален!',method:"DELETE"},
        'updateStudent': {title: 'Обновить', component: FormUpdateStudent,values:{id:"",name:"",lastName:"",age:"",group:""},successMessage:'Студент был успешно изменен!',method:"PATCH"}
        // 'getStudentsByGroup': {title: 'Найти по группе', component: FormGetStudentsByGroup,values:{id:"",name:"",lastName:"",age:"",group:""}}
    },
    modalData = actionToModal[action],
    ModalContent = modalData ? modalData.component : 'Пусто',
    FormValues = modalData ? modalData.values : null,
    SuccessMessage = modalData?.successMessage,
    title = modalData?.title,
    method = modalData?.method;
    const [serverErrors, setServerErrors] = useState({});
    const closeModal = () => setShowSuccessModal(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const submitOnServer =  async (values) => {
        const response = await getApiData(values,action,method);
        if(response.status === 'error'){
            const nameField = response.errors.field
            setServerErrors({[nameField]:response.errors.message });
            setTimeout(() => {
                setServerErrors({[nameField]:false });
            }, 3000);
        }else{
            console.log('Успешно!');
            setShowSuccessModal(true);
            onSubmit();
        }
    }
    return (
        <>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title || 'Заголовок окна'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={FormValues}
                    validationSchema={validationSchema(action)}
                    onSubmit={
                        (values) => {
                            submitOnServer(values,action,method);
                        }
                    }
                >
                    {({handleSubmit, handleChange, values, touched, errors})=>(
                        <Form onSubmit={handleSubmit}>
                            <ModalContent handleChange={handleChange} values={values} touched={touched} errors={errors} serverErrors={serverErrors}>
                            </ModalContent>
                            <Button variant="success" type="submit" className="container-fluid">
                                {title || 'Кнопка'}
                            </Button>
                        </Form>

                    )}
                </Formik>
            </Modal.Body>
        </Modal>
            <SuccessModal title={title} message={SuccessMessage} showModal={showSuccessModal} closeModal={closeModal}></SuccessModal>
        </>
    );
}

export default ModalForm;
