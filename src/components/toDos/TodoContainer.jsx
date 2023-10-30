import React from "react";
import { useState, useEffect } from "react";

export default function TodoContainer({ title, status, dataTodo, setDatatodo }) {
    
    const [headerClass, setHeaderClass] = useState("todo-header");

    useEffect(() => {
        const classStatus = "status-" + status;
        setHeaderClass("todo-header " + classStatus);
    }, [status]);

    // Función para mostrar el menú de opciones de cada ToDo
    const handleMenu = (e) => {
        const menu = e.parentNode.parentNode.querySelector('.todo-options');
        const icon = e.parentNode.querySelector('.todo-icon svg path');

        if (menu.classList.contains("inactive")) {
            icon.setAttribute('fill', '#0CB97B') //verde
            icon.style.transform = 'rotate(180deg)';
            icon.style.transformOrigin = 'center';
            menu.classList.remove("inactive");
        } else {
            icon.style.transform = 'rotate(0deg)';
            icon.setAttribute('fill', '#A7ADAB') //gris
            menu.classList.add("inactive");
        }
    };

    // Función para cambiar el estado de cada ToDo
    const changeStatus = (newStatus) => {
        const newTodo = [...dataTodo];
        const todo = newTodo.findIndex((todo) => todo.title === title);
        newTodo[todo].status = newStatus;
        setDatatodo(newTodo);
    }

    const deleteTodo = () => {
        const newTodo = [...dataTodo];
        const todo = newTodo.findIndex((todo) => todo.title === title);
        newTodo.splice(todo, 1);
        setDatatodo(newTodo);
    }

    return (
        <li>
            <div className='todo-container'>
                {/* Aquí va el encabezado de la Todo */}
                <div className={headerClass}>
                    {/* Aquí va el titulo de la Todo */}
                    <h2>{title}</h2>
                    {/* Aquí va el icono de menú es una flecha*/}
                    <div className='todo-icon' onClick={(e) => (handleMenu(e.currentTarget))}>
                        <svg width="16" height="8" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5481 9.55581L7.99284 3.66363L2.43758 9.55581C1.8792 10.1481 0.977181 10.1481 0.418792 9.55581C-0.139597 8.96355 -0.139597 8.00683 0.418792 7.41458L6.9906 0.444191C7.54899 -0.148064 8.45101 -0.148064 9.0094 0.444191L15.5812 7.41458C16.1396 8.00683 16.1396 8.96355 15.5812 9.55581C15.0228 10.1329 14.1065 10.1481 13.5481 9.55581Z" fill="#A7ADAB" />
                        </svg>
                    </div>
                </div>
                {/* Aquí va el menú de opciones */}
                <div className='todo-options inactive'>
                    <button className='todo-options-enCurso' onClick={() => changeStatus('Encurso')}>
                        👷‍♂️ En curso
                    </button>
                    <button className='todo-options-completado' onClick={() => changeStatus('Completada')}>
                        ✨Completado
                    </button>
                    <button className='todo-options-pendiente' onClick={() => changeStatus('Pendiente')}>
                        🕗 Pendiente
                    </button>
                    <button className='todo-options-delete' onClick={() => deleteTodo()}>
                        🧻 Eliminar
                    </button>
                </div>
            </div>
        </li>
    );


}