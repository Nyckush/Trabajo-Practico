import React from 'react';

const TaskForm = () => {
    return(
        <form method="post" className='formulario'>
            <div className="top-form">
            <h2>Nueva tarea</h2><span className='icon' id="salir">X</span>
            </div>
            <input type="text" className='campo' id="titulo" name="titulo" placeholder='Nombre'></input>
            
            <input type="text" className='campo' id="etiqueta" name="etiqueta" placeholder='Etiqueta'></input>

            <input type="button" className='btn-save' value="Save" />
        </form>
    )
}

export { TaskForm }