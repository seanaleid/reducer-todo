import React, {useState} from "react";

const TodoCardMap = ({ task, dispatch}) => {
    console.log(task);

    const toggleCompleted = () => {
        dispatch ({
            type: "TOGGLE_EDIT",
            payload: task.id
        });
    };

    const clearCompletedTodo = () => {
        dispatch ({
            type: "REMOVE_TODO",
            payload: task.id
        });
    }

    return (
        <div className="todo-card">
            <div 
                className={`task${task.completed ? ' completed' : ''}`}
                onClick={toggleCompleted}
            >
                <h1>{task.item}</h1>
            </div>
                <button onClick={clearCompletedTodo}>Clear Completed</button>
        </div>
    )
}

export default TodoCardMap;