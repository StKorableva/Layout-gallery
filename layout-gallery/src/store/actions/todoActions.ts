import { Todo, ADD_TODO, TOGGLE_TODO, MAKE_SPECIAL_TODO, TodoActionTypes } from  '../types';

let nextTodoId = 0;
export function addTodo(newTodo: Todo): TodoActionTypes {
    return { type: ADD_TODO, todo: {...newTodo, index: nextTodoId++} }
}

export function toggleTodo(index: number): TodoActionTypes {
    return { type: TOGGLE_TODO, index }
}

export function makeSpecialTodo(index: number): TodoActionTypes {
    return { type: MAKE_SPECIAL_TODO, index }
}

