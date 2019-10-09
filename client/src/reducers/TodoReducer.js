export const initialState = [{
    item: "type in the box above and click 'Add and item' to get started",
    completed: false,
    id: 3892987589,
}]

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NEW_TODO":
            return [...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                }
            ];
        case "TOGGLE_EDIT":
            return state.map(todo => {
                console.log(action.payload)
                if(todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            });
        case "REMOVE_TODO":
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}