import React, {useState} from 'react';

import './example-2.scss';
import Popup from "../popup";
import {Todo} from "../../store/types";
import ToDo from "../todo";
import {useDispatch, useSelector} from "react-redux";
import {toggleTodo, makeSpecialTodo} from "../../store/actions/todoActions";

interface RootState {
    todos: [];
}

export default function Example2() {
    const [isOpenPopup, setOpenPopup] = useState(false);
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onToggleTodo = () => {
        setOpenPopup(!isOpenPopup);
    };

    function renderTodo() {
        return (
                todos.map((todo: Todo) =>
                    <ToDo
                        key={todo.index}
                        {...todo}
                        onCheckboxClick={() => {dispatch(toggleTodo(todo.index))}}
                        onTextClick={() => {dispatch(toggleTodo(todo.index))}}
                        onStarClick={() => dispatch(makeSpecialTodo(todo.index))}
                        completed = {todo.completed}
                    />
                )
        )
    }

    return (
        <div className ='background'>
            <div className='example2-container'>
                <div className='example2-container__header'>
                    <div className='example2-container__navmenu'>
                        <div className='example2-container__arrow'></div>
                        <div className='example2-container__dots-container'>
                            <div className='example2-container__dots'></div>
                            <div className='example2-container__dots'></div>
                            <div className='example2-container__dots'></div>
                        </div>
                    </div>
                    <span className='example2-container__text'>Remote Working</span>
                    <button className='example2-container__button' onClick={onToggleTodo}>+</button>
                </div>
                <div className='todo-container'>
                    <span className='todo-container__data'>Today</span>
                    {renderTodo()}
                    <Popup show={isOpenPopup} onClose={onToggleTodo}/>
                </div>
            </div>
        </div>
    );
}

