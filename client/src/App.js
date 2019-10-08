import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import TodoList from "./components/TodoList";
import TodoForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
