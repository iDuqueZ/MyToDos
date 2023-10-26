import React from 'react'

export default function TodoList() {
  return (
    <div className='todo-list'>

        <div className='todo-container'>

          <div className='todo-header'>
            <h2>Titulo task</h2>

            <div className='todo-icon'>
              <svg width="16" height="8" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5481 9.55581L7.99284 3.66363L2.43758 9.55581C1.8792 10.1481 0.977181 10.1481 0.418792 9.55581C-0.139597 8.96355 -0.139597 8.00683 0.418792 7.41458L6.9906 0.444191C7.54899 -0.148064 8.45101 -0.148064 9.0094 0.444191L15.5812 7.41458C16.1396 8.00683 16.1396 8.96355 15.5812 9.55581C15.0228 10.1329 14.1065 10.1481 13.5481 9.55581Z" fill="#A7ADAB" />
              </svg>
            </div>
          </div>

          <div className='todo-options inactive'>
            <button className='todo-options-enCurso'>
              En curso
            </button>
            <button className='todo-options-completado'>
              Completado
            </button>
            <button className='todo-options-pendiente'>
              Pendiente
            </button>
          </div>


        </div>


      </div>
  )
}
