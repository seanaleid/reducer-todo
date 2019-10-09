import React, { useState, useReducer } from "react";

//reducer
import { initialState, reducer } from "../reducers/TodoReducer";

//components
import TodoCardMap from "./TodoCard";
import TodoForm from "./Form";

const TodoList = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div className="container-card">
            <TodoForm dispatch={dispatch}/>
            <h1>Hello world!!</h1>
            {state.map(task => (
                <TodoCardMap 
                    key={task.id} 
                    task={task} 
                    dispatch={dispatch}
                />
            ))}
        </div>
    )

}

export default TodoList;

