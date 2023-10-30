import React, { useState, useRef } from 'react';
import { useTodoContext } from '../../context';

export default function NewToDo() {
    const { dataTodo, setDataTodo } = useTodoContext();
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const textAreaRef = useRef(null);

    const handleNewTodo = (e) => {
        e.preventDefault(); // Prevenir el envío del formulario por defecto

        if (newTodoTitle.trim() === '') {
            return; // Evitar agregar tareas vacías
        }

        setDataTodo([
            ...dataTodo,
            {
                title: newTodoTitle,
                status: 'pendiente',
            },
        ]);

        setNewTodoTitle(''); // Limpiar el estado después de guardar la tarea
        textAreaRef.current.value = ''; // Limpiar el textarea
        openForm(); // Opcional: cerrar el formulario después de guardar
    };

    const handleChange = (e) => {
        setNewTodoTitle(e.target.value);
    };

    const openForm = () => {
        document.querySelector('footer').classList.toggle('hidden');
    };

    return (
        <>
            <button className='btn-new' onClick={openForm}>
                <b>+</b> Nueva ToDo
            </button>
            <div className='todo-new'> {/* Agrega la clase 'hidden' por defecto */}
                <form onSubmit={handleNewTodo}>
                    <textarea
                        type='text'
                        placeholder='Escribe tu nueva ToDo aquí...'
                        ref={textAreaRef}
                        onChange={handleChange}
                    />

                    <div className='todo-new-buttons'>
                        <button type='button' className='todo-new-buttons cancel' onClick={openForm}>
                            Cancelar
                        </button>
                        <button type='submit' className='todo-new-buttons save'>
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
