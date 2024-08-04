import FormForModal from "../Form/FormForModal.jsx";
function FormUpdateStudent({handleChange,values, touched, errors, serverErrors}) {
    const formId = "formUpdateStudent";
    return (
        <>
            <FormForModal formId={formId} id="id" inputName="id" nameLabel="ID (Существующий)" handleChange={handleChange} value={values.id} touched={touched.id} errors={errors.id} serverErrors={serverErrors.id}/>
            <FormForModal formId={formId} id="name" inputName="name" nameLabel="Имя" handleChange={handleChange} value={values.name} touched={touched.name} errors={errors.name} serverErrors={serverErrors.name}/>
            <FormForModal formId={formId} id="lastName" inputName="lastName" nameLabel="Отчество" handleChange={handleChange} value={values.lastName} touched={touched.lastName} errors={errors.lastName} serverErrors={serverErrors.lastName}/>
            <FormForModal formId={formId} id="age" inputName="age" nameLabel="Возраст" handleChange={handleChange} value={values.age} touched={touched.age} errors={errors.age} serverErrors={serverErrors.age}/>
            <FormForModal formId={formId} id="group" inputName="group" nameLabel="Группа" handleChange={handleChange} value={values.group} touched={touched.group} errors={errors.group} serverErrors={serverErrors.group}/>
        </>
    );
}

export default FormUpdateStudent;
