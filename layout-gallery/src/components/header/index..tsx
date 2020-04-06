import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export default function Header() {
    return (
        <div className='header'>
            <span className='header__text'>st.korableva</span>
                <ul className='header__list'>
                    <li className='header__list-item'>
                        <Link className='header__link' to="/">Example 1</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link className='header__link' to="/example2">Example 2</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link className='header__link' to="/example3">Example 3</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link className='header__link' to="/example4">Example 4</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link className='header__link' to="/example5">Example 5</Link>
                    </li>
                </ul>
        </div>
    );
}
