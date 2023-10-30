import React from 'react'
import './todo.css'

export default function TodoList({children}) {
  return (
    <div className='todo-list'>
        <ul>
            {children}
        </ul>
    </div>
  )
}
