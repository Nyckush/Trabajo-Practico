import './estilos.css';
import { ToDoList } from './ToDoList';

const NuevaTarea = ({isOpen, onClose })=>{
    return (
        <div className="nueva" style={{display: isOpen ? 'grid': 'none'}}>
            <div className="nueva-conteiner">
                <div>
                <h5>New</h5>
                <button className="close" onClick={onClose}>X</button>
                <ToDoList/>
                </div>
            </div>

        </div>
    )
}

export default NuevaTarea