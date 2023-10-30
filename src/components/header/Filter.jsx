import React from 'react';
import './filter.css';
import { useTodoContext } from '../context';

export default function Filter() {

    const { countTodos, toggleFilter, handleFilter, filterOpacity, dataTodo } = useTodoContext();




    // const countTodos = dataTodo.length;

    // const [filterOpacity, setFilterOpacity] = useState({
    //     pendiente: 0.5,
    //     encurso: 0.5,
    //     completada: 0.5,
    //     todas: 0.5,
    // });

    // const handleFilter = (filter) => {

    //     // Restablecer la opacidad de todos los elementos
    //     const newFilterOpacity = {
    //         pendiente: 0.5,
    //         encurso: 0.5,
    //         completada: 0.5,
    //         todas: 0.5,
    //     };

    //     if (filter === 'all') {
    //         for (const key in newFilterOpacity) {
    //             newFilterOpacity[key] = 1;
    //         }
    //     } else {
    //         // Establecer la opacidad a 1 solo para el elemento seleccionado
    //         newFilterOpacity[filter.toLowerCase()] = 1;
    //     }

    //     setFilterBy(filter);
    //     setFilterOpacity(newFilterOpacity);
    // };

    // const toggleFilter = () => {
    //     const filterList = document.querySelector('.filter-list');
    //     const filterIcon = document.querySelector('.filter-icon svg path');

    //     if (filterList.classList.contains("inactive")) {
    //         filterIcon.setAttribute('fill', '#0CB97B') //verde
    //         filterList.classList.remove("inactive");
    //     } else {
    //         if (filterBy === 'all') {
    //             filterIcon.setAttribute('fill', '#A7ADAB') //gris
    //         }
    //         filterList.classList.add("inactive");
    //     }

    // }

    return (
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
                <div className='filter-component pendiente' onClick={() => handleFilter('Pendiente')} style={{ opacity: filterOpacity.pendiente }}>
                    <label>Pendientes</label>
                    <span>{dataTodo.filter((todo) => todo.status === 'Pendiente').length}</span>
                </div>

                <div className='filter-component en-curso' onClick={() => handleFilter('enCurso')} style={{ opacity: filterOpacity.encurso }}>
                    <label>En curso</label>
                    <span>{dataTodo.filter((todo) => todo.status === 'Encurso').length}</span>
                </div>

                <div className='filter-component completada' onClick={() => handleFilter('Completada')} style={{ opacity: filterOpacity.completada }}>
                    <label>Completadas</label>
                    <span>{dataTodo.filter((todo) => todo.status === 'Completada').length}</span>
                </div>

                <div className='filter-component todas' onClick={() => handleFilter('all')} style={{ opacity: filterOpacity.todas }}>
                    <label>Todas</label>
                    <span>{countTodos}</span>
                </div>
            </div>
        </div>
    )
}
