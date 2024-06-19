import './RightPanel.css';
function RightPanel() {
    return (
        <aside className="col-md-2 bg-white ms-3 mt-3 mb-3 ">
            <h5 className="text-center">Список</h5>
            <div className="list students">
                <div className="nothing p-5">
                    <p>Здесь пока ничего нет.</p>
                </div>
            </div>
        </aside>
    );
}

export default RightPanel;
