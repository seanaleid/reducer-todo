import React from "react";

const TodoCardMap = ({ task, dispatch}) => {
    console.log(task);

    return (
        <div>
            <h1>{task.item}</h1>
            <div>{task.completed}</div>
        </div>
    )
}

export default TodoCardMap;