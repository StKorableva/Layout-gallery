import React, {useState} from 'react';

import './popup.scss';
import Button from "../button";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/actions/todoActions";

type ModalWindow = {
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent> ) => void;
}

export default function Popup(props: ModalWindow) {
    const { show, onClose } = props;
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    function handleCreateNewTodo(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setNewTodo(e.target.value);
    }

    function handleNewTodo(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(addTodo({
            text: newTodo,
            index: 0,
            completed: false,
            special: false
        }));
        // @ts-ignore
        onClose();
    }

    if (!show) { return null}
    return (
        <div className="popup-container">
                <div className="popup">
                    <div className="popup-inner">
                        <div className="popup-title">
                            <h6>What do you want to do?</h6>
                             <Button onClick={onClose} className="popup-btn_close">X</Button>
                        </div>
                        <div className="popup-content">
                            <form onSubmit={handleNewTodo}>
                                <ul>
                                    <li>
                                        <input type="text" placeholder="Todo" onChange={handleCreateNewTodo}/>
                                    </li>
                                    <li>
                                        <button type="submit">Add</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    );
}
