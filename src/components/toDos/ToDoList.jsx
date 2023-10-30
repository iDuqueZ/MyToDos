import React from 'react'
import './todo.css'
import TodoContainer from './TodoContainer';
import { useTodoContext } from '../context';

export default function TodoList() {

  const {searchedTodo} = useTodoContext();

  return (
    <div className='todo-list'>
        <ul>
          {searchedTodo.map((todo) => (
            <TodoContainer
              key={todo.title}
              title={todo.title}
              status={todo.status}
            />
          ))}
        </ul>
    </div>
  )
}
