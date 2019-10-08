import React, { useState, useReducer } from "react";

import { initialState, reducer } from "../reducers/TodoReducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div className="container-card">
            <h1>Hello world!!</h1>
            <div className="todo-card">
                <h1>{state.item}</h1>
            </div>
        </div>
    )

}

export default TodoList;

