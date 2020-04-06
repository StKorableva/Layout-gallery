import React from 'react';

import './comment.scss';
import { usersData } from "../example_1/users.config";

export default function Comment() {
    const { users } = usersData;

    function renderComment() {
        return users.map((user, index) => {
            const {icon: Icon, comment, time, name} = user;
            return (
            <div className='comment' key={index}>
                <Icon className='comment__icon'/>
                <div className='comment__container'>
                    <div className = 'comment__header'>
                        <span className='comment__nickname'>{name}</span>
                        <div className='comment__divider'></div>
                        <span className='comment__time'>{time}</span>
                    </div>
                     <span className='comment__comment-text'>{comment}</span>
                </div>
            </div>)
        }
        );
    }

    return (
        <div className='comment-container'>
            {renderComment()}
        </div>
    );
}
