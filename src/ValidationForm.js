import * as yup from "yup";

const regx = {
    name: {regx: /^[а-яА-Я]{2,20}$/, errorText:'Кириллица, латиница от 2 до 20 символов'},
    group: {regx: /^[А-Яа-я]{4}-\d{3}$/,errorText: 'Формат: "ИСИП-208"'},
    id: {regx: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, errorText:'Формат: "f10e4578-467f-4d57-af65-969c52e0996b"'}
}
export const validationSchema = (action)=>{
    const { name, group, id } = regx;
    switch (action){
        case 'addStudent':
            return yup.object().shape({
                name: yup.string().required('Обязательно').matches(name.regx,name.errorText),
                lastName: yup.string().required('Обязательно').matches(name.regx,name.errorText),
                age: yup.number().required('Обязательно').min(15, 'Минимум 15').max(120, 'Максимум 120').typeError('Возраст должен быть числом'),
                group: yup.string().required('Обязательно').matches(group.regx, group.errorText)
            });
        case 'delStudent':
            return yup.object().shape({
                id: yup.string().required('Обязательно').matches(id.regx,id.errorText)
            });
        case 'updateStudent':
            return yup.object().shape({
                id: yup.string().required('Обязательно').matches(id.regx,id.errorText),
                name: yup.string().required('Обязательно').matches(name.regx,name.errorText),
                lastName: yup.string().required('Обязательно').matches(name.regx,name.errorText),
                age: yup.number().required('Обязательно').min(15, 'Минимум 15').max(120, 'Максимум 120').typeError('Возраст должен быть числом'),
                group: yup.string().required('Обязательно').matches(group.regx, group.errorText)
            });
    }
}
export const validationSchemaRightPanel = (action)=>{
    const { name, group, id } = regx;
    switch (action){
        case 'getStudentByGroup':
            return yup.object().shape({
                group: yup.string().required('Обязательно').matches(group.regx, group.errorText)
            })
    }
}

export const getApiData = async (values,action,method)=>{
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    switch (action){
        case 'addStudent':
            return await fetch("http://localhost:3000/addStudent",requestOptions)
                .then((response) => {
                    return response.json()
                        .then((data) => {
                            return (data);
                        })
                })
        case 'delStudent':
            return await fetch("http://localhost:3000/delStudent",requestOptions)
                .then((response) => {
                    return response.json()
                        .then((data) => {
                            return (data);
                        })
                })
        case 'updateStudent':
            return await fetch("http://localhost:3000/updateStudent",requestOptions)
                .then((response) => {
                    return response.json()
                        .then((data) => {
                            return (data);
                        })
                })
    }
}
export const getApiDataSearch = async (values,action)=>{
    const requestOptions = {
        method: 'GET'
    };
    const queryParams = new URLSearchParams(values).toString();
    switch (action){
        case 'getStudentByGroup':
            return await fetch(`http://localhost:3000/getStudentsByGroup?${queryParams}`,requestOptions)
                .then((response) => {
                    return response.json()
                        .then((data) => {
                            return (data);
                        })
                })
    }
}


