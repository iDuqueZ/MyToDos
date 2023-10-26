import React from 'react'

export default function Footer() {
    return (
        <footer className='hidden'>
            <button className='btn-new'>
                <b>+</b> Nueva ToDo
            </button>

            <div className='todo-new'>
                <textarea
                    type='text'
                    placeholder='Escribe tu nueva ToDo aquí...'
                />

                <div className='todo-new-buttons'>
                    <button className='todo-new-buttons cancel'>Cancelar</button>
                    <button className='todo-new-buttons save'>Guardar</button>
                </div>

            </div>

        </footer>
    )
}
