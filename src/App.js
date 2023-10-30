import { useState, useEffect } from 'react';
import Footer from './components/footer/Footer';
import TodoList from './components/toDos/ToDoList';
import TodoContainer from './components/toDos/TodoContainer';
import SearchBar from './components/header/SearchBar';
import Filter from './components/header/Filter';
import Header from './components/header/Header';
import './styles/App.css';
import NewToDo from './components/footer/newTodo/NewToDo';

function App() {

  // DECLARACIÓN DE ESTADOS
  const [dataTodo, setDatatodo] = useState(() => {
    const todosFromStorage = window.localStorage.getItem('TODOS_V1')
    if (todosFromStorage) return JSON.parse(todosFromStorage)
    return []
  });
  const [filterBy, setFilterBy] = useState('all');
  const [searchTodo, setSearchTodo] = useState('');

  // GUARDAR DATOS EN LOCALSTORAGE
  useEffect(() => {
    window.localStorage.setItem('TODOS_V1', JSON.stringify(dataTodo))
  }, [dataTodo]);

  // FILTRADO DE DATOS
  const searchedTodo = dataTodo.filter((todo) => {
    // Aplica la búsqueda
    const titleIncludesSearch = todo.title.toLowerCase().includes(searchTodo.toLowerCase());

    // Aplica el filtro de estado
    if (filterBy === 'all') {
      return titleIncludesSearch;
    } else {
      return todo.status.toLowerCase() === filterBy.toLowerCase() && titleIncludesSearch;
    }
  });

  return (
    <div className="App">
      {/* DEFINIMOS EL HEADER */}
      <Header>
        <SearchBar setSearchTodo={setSearchTodo} />
        <Filter dataTodo={dataTodo} filterBy={filterBy} setFilterBy={setFilterBy} />
      </Header>
      <hr />
      {/* DEFINIMOS EL TODO LIST */}
      <TodoList>
        {searchedTodo.map((todo) => (
          <TodoContainer
            key={todo.title}
            title={todo.title}
            status={todo.status}
            dataTodo={dataTodo}
            setDatatodo={setDatatodo}
          />
        ))}
      </TodoList>
      {/* DEFINIMOS EL FOOTER alias Nueva ToDo */}
      <Footer>
        <NewToDo dataTodo={dataTodo} setDatatodo={setDatatodo} />
      </Footer>
    </div>
  );
}

export default App;
