import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';


function App() {

  const [dataTodo, setDatatodo] = useState([
  {
    title: 'Aprender a crear una ToDo',
    status: 'Pendiente'
  },
  {
    title: 'Usando la app de My Todo',
    status: 'En curso'
  },
  {
    title: 'Abrir la app My ToDo',
    status: 'Completada'
  }
]); 

  const [filterBy, setFilterBy] = useState('all');

  return (
    <div className="App">
      <Header dataTodo={dataTodo} filterBy = {filterBy}/>
      <hr />
      <TodoList dataTodo={dataTodo}/>
      <Footer dataTodo={dataTodo}/>
    </div>
  );
}

export default App;
