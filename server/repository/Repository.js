import Student from '../models/Student.js';

class Repository {
    constructor() {
        this.repository = [];
        this.reg_group = ['ИСИП-208', 'ИСИП-206', 'ПСО-204'];
    }

    filterStudentsByGroup(group) {
        const filtered = this.repository.filter(student => student.group.toLowerCase() === group.toLowerCase());
        console.log(group);
        if (filtered.length === 0) {
            console.log('Ошибка: ', filtered);
            const error = new Error("Такой группы не существует");
            error.name = "group";
            throw error;
        } else {
            console.log('Успешно: ', filtered);
            return filtered;
        }
    }

    addStudent(name, lastName, age, group) {
        const student = new Student(name, lastName, Number(age), group),
        res_group = this.reg_group.filter(elem => elem.toLowerCase() === group.toLowerCase()),
        res_nameLastNameAge = this.repository.filter(elem =>
            elem.name.toLowerCase() === name.toLowerCase() &&
            elem.lastName.toLowerCase() === lastName.toLowerCase() &&
            elem.age === Number(age)
        );
        console.log('Результат:',res_nameLastNameAge)
        console.log(age)
        if(res_group.length === 0){
            const error = new Error("Такой группы не существует, сначала добавьте ее");
            error.name = "group";
            throw error;
        }else if(res_nameLastNameAge.length > 0){
            const error = new Error("Студент с таким именем, группой и возрастом уже существует");
            error.name = "name";
            throw error;
        }else{
            this.repository.push(student);
        }
        console.log(this.repository)
    }

    deleteStudent(id) {
        const indexStudent = this.repository.findIndex(student => student.id === id);
        if (indexStudent !== -1) {
            this.repository.splice(indexStudent, 1);
        } else {
            const error = new Error("Такого студента не существует");
            error.name = "id";
            throw error;
        }
    }

    updateStudent(id, name, lastName, age, group) {
        const indexStudent = this.repository.findIndex(student => student.id === id);
        if (indexStudent === -1) {
            const error = new Error("Такого студента не существует");
            error.name = "id";
            throw error;
        } else {
            const currentStudent = this.repository[indexStudent];
            currentStudent.name = name;
            currentStudent.lastName = lastName;
            currentStudent.age = age;
            currentStudent.group = group;
        }
    }
}

export default Repository;
