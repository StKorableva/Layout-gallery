export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const MAKE_SPECIAL_TODO = 'MAKE_SPECIAL_TODO';

export interface Todo {
    text: string
    index: number
    completed: boolean
    special: boolean
}

export interface TodoState {
    todos: Todo[]
}

interface AddTodoAction {
    type: typeof ADD_TODO
    todo: Todo
}

interface MakeSpecialTodoAction {
    type: typeof MAKE_SPECIAL_TODO
    index: number
}

interface ToggleTodoAction {
    type: typeof TOGGLE_TODO
    index: number
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | MakeSpecialTodoAction;