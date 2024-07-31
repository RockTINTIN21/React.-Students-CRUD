import * as yup from "yup";

const regx = {
    name: /^[а-яА-Я]{2,20}$/,
    age: /^(1[0-1][0-9]|120|[2-9][0-9])$/,
    group: /^[А-Яа-я]{4}-\d{3}$/,
    id: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
}
export const validationSchema = (action)=>{
    switch (action){
        case 'addStudent':
            return yup.object().shape({
                // name: yup.string().required('Обязательно').matches(regx.name, 'Кириллица, латиница от 2 до 20 символов'),
                name: yup.string().required('Обязательно').matches(regx.name, 'Кириллица, латиница от 2 до 20 символов'),
                lastName: yup.string().required('Обязательно').matches(regx.name, 'Кириллица, латиница от 2 до 20 символов'),
                age: yup.number().required('Обязательно').min(10, 'Минимум 10').max(120, 'Максимум 120').typeError('Возраст должен быть числом'),
                group: yup.string()
                    .required('Обязательно')
                    .matches(regx.group, 'Формат группы: ИСИП-208')
            });
        case 'delStudent':
            return yup.object().shape({
                id: yup.string().required('Обязательно').matches(regx.name, 'Формат: 550e8400-e29b-41d4-a716-446655440000')
            });
    }
}
// export const getApiData = async ()=>{
//     return await fetch(
//         "http://localhost:3000/getStudentsByGroup?group=ПСО204"
//     ).then((response) => response.json());
// }

export const getApiData = async (values)=>{
    console.log('Данные:',values,'получены')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    return await fetch("http://localhost:3000/addStudent", requestOptions)
        .then((response) => {
            return response.json()
                .then((data) => {
                    return (data);
                })
        })
        // .catch (error => {
        //     throw error;
        // })


}

