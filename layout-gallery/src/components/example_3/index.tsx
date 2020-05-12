import React from 'react';

import './example-3.scss';
import liberty from './liberty.jpg';
import NY1 from '../../assets/images/NY-S-1.jpg';
import NY2 from '../../assets/images/NY-S-2.jpg';
import NY3 from '../../assets/images/NY-S-3.jpg';

export default function Example3() {
    return (
            <div className="example3">
                <div className="example3-container">
                    <div className="example3__left-side">
                        <span className="example3__city-name">New York</span>
                        <hr className="example3__line"/>
                        <div className="example3__hash-container">
                            <span className="example3__hash">#newyork</span>
                            <span className="example3__hash">#I'veneverbeen</span>
                            <span className="example3__hash">#dreamscometrue</span>
                            <span className="example3__hash">#bigapple</span>
                        </div>
                    </div>
                    <div className="example3__right-side">
                        <span className="example3__right-side__statue-text">Statue of Liberty</span>
                        <span className="example3__right-side__like">3.2 million like this</span>
                        <span className="example3__right-side__content">"The Statue of Liberty Enlightening the World" was a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy</span>
                        <img className="example3__right-side__img" src={liberty} alt='Statue of Liberty'/>
                        <div className="example3__right-side__footer">
                            <img className="example3__right-side__city-img" src={NY1} alt='New York'/>
                            <img className="example3__right-side__city-img" src={NY2} alt='New York'/>
                            <img className="example3__right-side__city-img" src={NY3} alt='New York'/>
                            <div className="example3__right-side__city-other">+15</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

