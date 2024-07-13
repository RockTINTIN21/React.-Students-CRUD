import { Button } from "react-bootstrap";
import ModalForm from "./components/Modal/ModalForm.jsx";

export function validateFormData(formData, setErrorCallback) {
    // console.log('Данные из формы: ', formData);
    try {
        console.log('Данные для проверки: ',formData)
        if(formData.name.length < 5){
            setErrorCallback('Имя меньше 5 символов');
            // console.log(formData.name,'Имя меньше 5 символов');
        }else{
            setErrorCallback(null)
            // console.log('Ok!')
        }
    }catch{
        console.log('error');
    }

    // return (
    //     <ModalForm formLabels={}/>
    // );
}

export default validateFormData;