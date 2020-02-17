import React from "react";

const TodoCardMap = ({ task, dispatch}) => {
    console.log(task);

    // put on the whole card incase the user clicks the "Delete" button while task.completed === false
    const toggleCompleted = () => {
        dispatch ({
            type: "TOGGLE_EDIT",
            payload: task.id
        });
    };

    // checks for task.completed === true
    const clearCompletedTodo = () => {
        if(task.completed === true){
            dispatch ({
                type: "REMOVE_TODO",
                payload: task.id
            });
        } else {
            return task
        }
    }

    return (
        <div 
            className="todo-card" 
            onClick={toggleCompleted}
        >
            <div className="card-top" >
                <div 
                    className={`task${task.completed ? ' completed' : ''}`}
                >
                    <h1>{task.item}</h1>
                </div>
            </div>
            <div className="card-bottom">
                <button className="button-card" onClick={clearCompletedTodo}>Delete</button>
            </div>
        </div>
    )
}

export default TodoCardMap;