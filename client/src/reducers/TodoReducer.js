export const initialState = [{
    item: "Learn about reducers",
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
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}