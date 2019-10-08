import React, { useState } from "react";


function TodoForm({ dispatch }) {
    const [todo, setTodo] = useState(' ');
    console.log(`this is the state in the Form.js`, todo);

    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        dispatch ({ 
            type: "ADD_NEW_TODO", 
            payload: todo
        }) 
        setTodo('');
    }

    return(
        <form 
            className="form" 
            onSubmit={ addTodo }
        >
            <input 
                className="input" 
                type="text" 
                name="todo" 
                value={todo} 
                onChange={handleChanges}
            />
            <button 
                className="button-form"
                type="submit"
            >
                Add an item
            </button>
        </form>
    )
}

export default TodoForm;