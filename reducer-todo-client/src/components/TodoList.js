import React, { useReducer } from "react";

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
        <div >
            <TodoForm dispatch={dispatch}/>
            <div className="container-card">
                {state.map(task => (
                    <TodoCardMap 
                        key={task.id} 
                        task={task} 
                        dispatch={dispatch}
                        
                    />
                ))}
            </div>
        </div>
    )

}

export default TodoList;

