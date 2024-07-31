import styles from './ModalForm.module.css';
import {Button, Form, Modal} from "react-bootstrap";
import FormAddStudent from './Forms/FormAddStudent';
import FormDelStudent from './Forms/FormDelStudent';
import FormUpdateStudent from './Forms/FormUpdateStudent';
import FormGetStudentsByGroup from './Forms/FormGetStudentsByGroup';
import {getApiData,validationSchema} from '../../ValidationForm.js';
import {Formik} from "formik";
import {useEffect, useState} from "react";
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

    const defaultValue = [];
    const [serverErrors, setServerErrors] = useState({});
    const submitOnServer =  async (values) => {
        const response = await getApiData(values);
        if(response.status === 'error'){
            const nameField = response.errors.field
            console.log('error')
            console.log({[nameField]:response.errors.message })
            setServerErrors({[nameField]:response.errors.message })
        }else{
            console.log('test')
            setServerErrors(response)
        }

    }
    useEffect(() => {
        console.log('Ошибка: ',serverErrors)
    }, [serverErrors]);
    return (
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
                            submitOnServer(values);

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

    );
}

export default ModalForm;
