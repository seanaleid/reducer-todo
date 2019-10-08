import React, { useReducer } from 'react';
import './App.css';

//components
import TodoList from "./components/TodoList";


//reducer
import { initialState, reducer } from "./reducers/TodoReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(`This is the state from App.js`, state);

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

// newTodo={newTodo}