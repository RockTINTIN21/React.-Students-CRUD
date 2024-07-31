import { v4 as uuidv4 } from 'uuid';
import Person from './Person.js';

class Student extends Person {
    constructor(name, lastName, age, group) {
        super(name, lastName, age);
        this.id = uuidv4();
        this.group = group;
    }

    get group() {
        return this._group;
    }

    set group(newGroup) {
        if (!/^[А-Яа-яA-Za-z]{4}-\d{3}$/.test(newGroup) || newGroup.length > 15 || newGroup.length < 3) {
            const error = new Error("Группа должна состоять из кириллицы и цифр, иметь не больше 15 символов и не меньше 3.");
            error.name = "group";
            throw error;
        }
        this._group = newGroup;
    }
}

export default Student;
