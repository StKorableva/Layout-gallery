import React from 'react';
import classnames from 'classnames';

import './todo.scss';
import Checkbox from "../checkbox";
import Button from "../button";

import {ReactComponent as StarIcon } from '../../assets/icons/star.svg';

export interface ITodoProps {
    text?: string;
    completed?: boolean;
    special?: boolean;
    onTextClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onStarClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onCheckboxClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToDo(props:ITodoProps ) {
    const {text, completed, special, onTextClick, onStarClick, onCheckboxClick} = props;

    return (
        <div className={classnames( { 'todo': true,'todo_completed': completed} )}>
            <Checkbox checkboxClassName='todo__checkbox' onChange={onCheckboxClick} value={completed}/>
            <span className='todo__text' onClick={onTextClick}>{text}</span>
            <Button onClick={onStarClick} className='todo__button'>
                <StarIcon className={classnames({'todo__img': true, 'todo_special': special })} />
            </Button>
        </div>
    );
}
