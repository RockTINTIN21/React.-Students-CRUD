import express from 'express';
import Repository from '../repository/Repository.js';

const app = express.Router();
const Repo = new Repository();
app.use(express.json());

export function addToRepo() {

    const students = [
        { name: "Иван", lastName: "Иванов", age: 20, group: "ИСИП-206" },
        { name: "Сергей", lastName: "Сергеев", age: 21, group: "ИСИП-208" },
        { name: "Сергейа", lastName: "Сергеев", age: 21, group: "ИСИП-208" }
    ];
    students.forEach(student => {
        Repo.addStudent(student.name, student.lastName, student.age, student.group);
    });
}

app.get('/getStudentsByGroup', (req, res) => {
    try {
        const group = decodeURIComponent(req.query.group);
        const repository = Repo.filterStudentsByGroup(group);
        res.status(200).send({
            status: 'success',
            repository: repository
        });
    } catch (error) {
        console.log('GET запрос: ', error);
        res.status(400).send({
            status: 'error',
            errors: {
                field: error.name,
                message: error.message
            }
        });
    }
});

app.post('/addStudent', (req, res) => {
    try {
        const { name, lastName, age, group } = req.body;
        const student = Repo.addStudent(name, lastName, age, group);
        res.status(201).send({
            status: 'success',
            student: student
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            errors: {
                field: error.name,
                message: error.message
            }
        });
    }
});

app.delete('/delStudent', (req, res) => {
    try {
        const { id } = req.body;
        const student = Repo.deleteStudent(id);
        res.status(201).send({
            status: 'success',
            student: student
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            errors: {
                field: error.name,
                message: error.message
            }
        });
    }
});

app.patch('/updateStudent', (req, res) => {
    try {
        const { id, name, lastName, age, group } = req.body;
        const student = Repo.updateStudent(id, name, lastName, age, group);
        res.status(201).send({
            status: 'success',
            student: student
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            errors: {
                field: error.name,
                message: error.message
            }
        });
    }
});

export default { app, addToRepo };