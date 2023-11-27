import './estilos.css';
import { ToDoList } from './ToDoList';

const NuevaTarea = ({ isOpen, onClose }) => {
    return (
        <div className="nueva" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="nueva-conteiner">
                <div className='mini-nav'>
                    <h3>New</h3>
                    <button className="btn-close" onClick={onClose}></button>
                </div>
                <ToDoList />
            </div>

        </div>
    )
}
/* const PropTypes = {
    boolean(props, propName, componentName) {
        if(typeof props[propName] !== 'boolean') {
            return new Error(
                `El componente ${componentName} necesita que la propiedad ${propName} sea tipo booleano pero has pasado un ${typeof props[propName]}`
            )
        }
    }
}
NuevaTarea.PropTypes = {
    isOpen: PropTypes.boolean,
    onClose: PropTypes.boolean,
} */
export default NuevaTarea