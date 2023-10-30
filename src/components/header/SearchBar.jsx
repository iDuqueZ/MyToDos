import React from 'react'
import './searchBar.css';
import { useTodoContext } from '../context';

export default function SearchBar() {

    const {setSearchTodo} = useTodoContext();

    return (
        <div className='searchTodo'>
            <input
                id='searchBar'
                name='search'
                className='search-input'
                type='search'
                placeholder='Buscar un ToDo...'
                onChange={(e) => setSearchTodo(e.target.value)}
            />
            <div className='search-icon'>🔎</div>
        </div>
    )
}
