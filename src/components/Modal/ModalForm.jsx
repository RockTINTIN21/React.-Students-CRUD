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
    const [serverErrors, setServerErrors] = useState();
    const submitOnServer =  async (values,setErrors) => {
        // try{
            const response = await getApiData(values);
            console.log('test',response.errors)
            if (response.errors) {
                const errors = {};
                response.errors.forEach(error => {
                    errors[error.field] = error.message;
                });
                setErrors(errors);
                console.log('Существует')
                throw new Error('Validation Error');

            }else{
                setServerErrors(null)
            }

        // }catch (error){
        //     console.log('error:', error.errors.message)
        // }

    }
    useEffect(() => {
        console.log('Данные из запроса: ',serverErrors)
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
                        (values,{setErrors}) => {
                            submitOnServer(values,setErrors);

                        }
                    }
                >
                    {({handleSubmit, handleChange, values, touched, errors})=>(
                        <Form onSubmit={handleSubmit}>
                            <ModalContent handleChange={handleChange} values={values} touched={touched} errors={errors}>
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
