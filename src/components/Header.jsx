import React from 'react'

export default function Header({ dataTodo }, { filterBy }) {

    const pendingTodos = dataTodo.filter((todo) => todo.status === 'Pendiente');
    const inProgressTodos = dataTodo.filter((todo) => todo.status === 'En curso');
    const completedTodos = dataTodo.filter((todo) => todo.status === 'Completada');
    const countTodos = dataTodo.length;


    const toggleFilter = () => {
        const filterList = document.querySelector('.filter-list');
        const filterIcon = document.querySelector('.filter-icon svg path');

        if (filterList.classList.contains("inactive")) {
            filterIcon.setAttribute('fill', '#0CB97B')
            filterList.classList.remove("inactive");
        } else {
            filterIcon.setAttribute('fill', '#A7ADAB')
            filterList.classList.add("inactive");
        }
    }

    const FilterByPending = () => {
        const enCursoElement = document.querySelector('.en-curso'); // Agrega un punto (.) antes de la clase
        const completadaElement = document.querySelector('.completada'); // Agrega un punto (.) antes de la clase
        const todasElement = document.querySelector('.todas'); // Agrega un punto (.) antes de la clase

        if (enCursoElement) {
            enCursoElement.style.opacity = 0.5;
        }

        if (completadaElement) {
            completadaElement.style.opacity = 0.5;
        }

        if (todasElement) {
            todasElement.style.opacity = 0.5;
        }
    }

    const FilterByinProgress = () => {

    }

    const FilterByCompleted = () => {

    }

    const FilterByAll = () => {

    }

    return (
        <header>
            <div className='title'>
                <h1>My To<span className='Do'>Do</span><b>.</b><b>.</b><b>.</b></h1>
            </div>

            <div className='searchTodo'>
                <input
                    id='searchBar'
                    name='search'
                    className='search-input'
                    type='search'
                    placeholder='Buscar un ToDo...'
                />
                <div className='search-icon'>🔎</div>
            </div>

            <div className='filter'>

                <div className='filter-menu'>
                    <div>
                        <label>Filtro</label>
                    </div>

                    <div>
                        <div className='filter-icon' onClick={toggleFilter}>
                            <svg width="30" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.2164 21.9895H17.103V19.5462H12.2164V21.9895ZM3.66492 7.32983V9.77312H25.6544V7.32983H3.66492ZM7.32984 15.8813H21.9895V13.438H7.32984V15.8813Z" fill="#A7ADAB" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='filter-list inactive'>
                    <div className='filter-component pendiente' onClick={FilterByPending}>
                        <label>Pendientes</label>
                        <span>{pendingTodos.length}</span>
                    </div>

                    <div className='filter-component en-curso' onClick={FilterByinProgress}>
                        <label>En curso</label>
                        <span>{inProgressTodos.length}</span>
                    </div>

                    <div className='filter-component completada' onClick={FilterByCompleted}>
                        <label>Completadas</label>
                        <span>{completedTodos.length}</span>
                    </div>

                    <div className='filter-component todas' onClick={FilterByAll}>
                        <label>Todas</label>
                        <span>{countTodos}</span>
                    </div>
                </div>

            </div>
        </header>
    )
}
