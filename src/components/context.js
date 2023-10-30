import React, { useState, useEffect, useContext } from 'react';

const TodoContext = React.createContext();

export function useTodoContext() {
    return useContext(TodoContext);
};

const TodoContextProvider = ({ children }) => {
    // DECLARACIÓN DE ESTADOS
    const [dataTodo, setDataTodo] = useState(() => {
        const todosFromStorage = window.localStorage.getItem('TODOS_V1');
        if (todosFromStorage) return JSON.parse(todosFromStorage);
        return [{title: "Jugar Valo con LGC 😗", status: "pendiente"}, {title: "Enviar un audio con arcadas🤮", status: "encurso"}];
    });
    const [filterBy, setFilterBy] = useState('all');
    const [searchTodo, setSearchTodo] = useState('');

    // GUARDAR DATOS EN LOCALSTORAGE
    useEffect(() => {
        window.localStorage.setItem('TODOS_V1', JSON.stringify(dataTodo));
    }, [dataTodo]);

    // FILTRADO DE DATOS
    const lowerCaseSearch = searchTodo.toLowerCase();
    const searchedTodo = dataTodo.filter(todo => {
        // Aplica la búsqueda y el filtro de estado
        const titleIncludesSearch = todo.title.toLowerCase().includes(lowerCaseSearch);
        if (filterBy === 'all') {
            return titleIncludesSearch;
        } else {
            return todo.status.toLowerCase() === filterBy.toLowerCase() && titleIncludesSearch;
        }
    });

    const [filterOpacity, setFilterOpacity] = useState({
        pendiente: 0.5,
        encurso: 0.5,
        completada: 0.5,
        todas: 0.5,
    });

    const handleFilter = (filter) => {
        // Restablecer la opacidad de todos los elementos
        const newFilterOpacity = {
            pendiente: 0.5,
            encurso: 0.5,
            completada: 0.5,
            todas: 0.5,
        };

        if (filter === 'all') {
            for (const key in newFilterOpacity) {
                newFilterOpacity[key] = 1;
            }
        } else {
            // Establecer la opacidad a 1 solo para el elemento seleccionado
            newFilterOpacity[filter.toLowerCase()] = 1;
        }

        setFilterBy(filter);
        setFilterOpacity(newFilterOpacity);
    };

    const toggleFilter = () => {
        const filterList = document.querySelector('.filter-list');
        const filterIcon = document.querySelector('.filter-icon svg path');

        if (filterList.classList.contains("inactive")) {
            filterIcon.setAttribute('fill', '#0CB97B') //verde
            filterList.classList.remove("inactive");
        } else {
            if (filterBy === 'all') {
                filterIcon.setAttribute('fill', '#A7ADAB') //gris
            }
            filterList.classList.add("inactive");
        }
    }

    // Función para mostrar el menú de opciones de cada ToDo
    const handleMenu = (e) => {
        const menu = e.parentNode.parentNode.querySelector('.todo-options');
        const icon = e.parentNode.querySelector('.todo-icon svg path');

        console.log(menu);

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

    // ... (resto de tu lógica)

    const todoContextData = {
        dataTodo,
        setDataTodo,
        filterBy,
        setFilterBy,
        searchTodo,
        setSearchTodo,
        searchedTodo,
        countTodos: dataTodo.length,
        filterOpacity,
        handleFilter,
        toggleFilter,
        handleMenu,
        // Agrega aquí las demás funciones y estados que quieras utilizar en tu contexto
    };

    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
