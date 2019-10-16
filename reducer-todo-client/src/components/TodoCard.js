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
            <div className="card-top">
                <div 
                    className={`task${task.completed ? ' completed' : ''}`}
                    onClick={toggleCompleted}
                >
                    <h1>{task.item}</h1>
                </div>
            </div>
            <div className="card-bottom">
                <button className="button-card" onClick={clearCompletedTodo}>Clear Completed</button>
            </div>
        </div>
    )
}

export default TodoCardMap;