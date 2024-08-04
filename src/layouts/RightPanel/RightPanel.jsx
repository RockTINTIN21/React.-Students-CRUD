import './RightPanel.css';
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {getApiData, getApiDataSearch, validationSchemaRightPanel} from "../../ValidationForm.js";
import { Formik } from "formik";

function RightPanel() {
    const [list, setList] = useState([]);
    const [serverErrors, setServerErrors] = useState('');
    const formSelectList = [
        { title: 'По группе', subTitle: 'Группа', validationType: 'getStudentByGroup', value: { group: "" } },
        { title: 'По отчеству', subTitle: 'Отчество', validationType: 'getStudentByLastName', value: { lastName: "" } },
        { title: 'По ID', subTitle: 'ID', validationType: 'getStudentByID', value: { id: "" } }
    ];
    const [action, setAction] = useState(formSelectList[0].validationType);
    const [formValue, setFormValue] = useState(formSelectList[0].value);
    const [formTitle, setFormTitle] = useState(formSelectList[0].subTitle);

    const formSelectedList = formSelectList.map((elem, index) => (
        <option key={index} value={elem.title}>{elem.title}</option>
    ));

    const handleChangeSelectMenu = (e, resetForm) => {
        const key = formSelectList.findIndex(elem => elem.title === e.target.value);
        setFormTitle(formSelectList[key].subTitle);
        setAction(formSelectList[key].validationType);
        setFormValue(formSelectList[key].value);
        resetForm({ values: formSelectList[key].value });
    };

    const submitOnServer = async (values) => {
        const response = await getApiDataSearch(values, action);
        if (response.status === 'error') {
            const nameField = response.errors.field,
                finalNameField = {[nameField]: response.errors.message }
            console.log(finalNameField)
            setServerErrors(finalNameField);
            console.log('Состояние:',serverErrors)
            // setTimeout(() => {
            //     setServerErrors({[nameField]:''});
            // }, 3000);
        } else {
            // console.log(response.repository);
            // const student =
            console.log(response.repository);
            setList(response.repository);
            console.log(list)
        }
    }

    return (
        <aside className="col-md-2 bg-white ms-3 mt-3 mb-3 ">
            <Formik
                initialValues={formValue}
                enableReinitialize={true}
                validationSchema={validationSchemaRightPanel(action)}
                onSubmit={(values) => {
                    submitOnServer(values);
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors, resetForm }) => (
                    <>
                        <Form noValidate className='mb-3' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label>Поиск по фильтру:</Form.Label>
                                <Form.Select defaultValue={formSelectList[0].title} onChange={(e) => handleChangeSelectMenu(e, resetForm)}>
                                    {formSelectedList || 'Пусто'}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group md="4" className='mb-3'>
                                <Form.Label>{formTitle + ':' || 'Заголовок поиска'}</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="findByLabel"
                                    placeholder={formTitle}
                                    name={Object.keys(formValue)[0]}
                                    value={values[Object.keys(formValue)[0]]}
                                    onChange={handleChange}
                                    isInvalid={touched[Object.keys(formValue)[0]] && (!!errors[Object.keys(formValue)[0]] || !!serverErrors[Object.keys(formValue)[0]])}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors[Object.keys(formValue)[0]] || serverErrors[Object.keys(formValue)[0]]}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="success" type="submit" className="container-fluid">Найти</Button>
                        </Form>
                    </>
                )}
            </Formik>
            <h5 className="text-center">Список</h5>
            <div className="list students">
                <div className="p-2">
                    {list.length > 0 ? (
                        list.map((student, index) => (
                            <ul className="" key={index}>
                                <li>ID: {student.id}</li>
                                <li>Имя: {student._name}</li>
                                <li>Фамилия: {student._lastName}</li>
                                <li>Возраст: {student._age} лет</li>
                                <li>Группа: {student._group}</li>
                            </ul>
                        ))
                    ) : (
                        <p>Здесь пока ничего нет.</p>
                    )}
                </div>
            </div>
        </aside>
    );
}

export default RightPanel;
