import FormForModal from "../Form/FormForModal.jsx";
function FormDelStudent({handleChange,values, touched, errors, serverErrors}) {

    return (
        <>
            <FormForModal formId={"formDelStudent"} id="id" inputName="id" nameLabel="ID" handleChange={handleChange} value={values.id} touched={touched.id} errors={errors.id} serverErrors={serverErrors.id}/>
        </>
    );
}

export default FormDelStudent;
