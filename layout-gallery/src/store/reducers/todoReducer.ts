import { TodoActionTypes, TodoState } from  '../types';

const initialState: TodoState = {
    todos: []
};

export default function todoReducer(state = initialState, action: TodoActionTypes) : TodoState {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({}, state, {
                todos: [
                    ...state.todos, action.todo
                ]
            });
        case "TOGGLE_TODO":
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            });
        case "MAKE_SPECIAL_TODO":
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            special: !todo.special
                        })
                    }
                    return todo
                })
            });
        default:
            return state;
    }
}
