import React from "react";
import './estilos.css';

const NuevaTarea = ({isOpen, onClose})=>{
    return (
        <div className="nueva" style={{display: isOpen ? 'grid': 'none'}}>
            <div className="nueva-conteiner">
                <button className="close">X</button>
            </div>

        </div>
    )
}

export {NuevaTarea}