import React from 'react'
import './searchBar.css'

export default function SearchBar({setSearchTodo}) {
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
