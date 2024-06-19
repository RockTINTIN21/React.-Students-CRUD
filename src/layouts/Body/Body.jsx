import './Body.css';
function Body() {
    return (
        <main className="main-content mt-3">
            <div className="bg-white">
                <h3>Что хотите сделать сегодня?</h3>
                <div className="buttons">
                    <button type="button" className="btn btn-primary" id="addStudent" data-bs-toggle="modal"
                            data-bs-target="#addStudentModal">Добавить студента
                    </button>
                    <button type="button" className="btn btn-primary" id="delStudent" data-bs-toggle="modal"
                            data-bs-target="#removeStudentModal">Удалить студента
                    </button>
                    <button type="button" className="btn btn-primary" id="updateStudent" data-bs-toggle="modal"
                            data-bs-target="#updateStudentModal">Изменить студента
                    </button>
                    <button className="btn btn-primary" type="button" id="getStudentsByGroup" data-bs-toggle="modal"
                            data-bs-target="#getStudentByGroupModal">Вывести студентов по группе
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Body;
