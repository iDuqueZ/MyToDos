import React from 'react';
import Footer from './components/footer/Footer';
import TodoList from './components/toDos/ToDoList';
import SearchBar from './components/header/SearchBar';
import Filter from './components/header/Filter';
import Header from './components/header/Header';
import './styles/App.css';
import NewToDo from './components/footer/newTodo/NewToDo';
import TodoContextProvider from './components/context';


function App() {

  return (
    <div className="App">
      <TodoContextProvider>
        {/* DEFINIMOS EL HEADER */}
        <Header>
          <SearchBar />
          <Filter />
        </Header>
        <hr />
        {/* DEFINIMOS EL TODO LIST */}
        <TodoList>
        </TodoList>
        {/* DEFINIMOS EL FOOTER alias Nueva ToDo */}
        <Footer>
          <NewToDo />
        </Footer>
      </TodoContextProvider>
    </div>
  );
}

export default App;
