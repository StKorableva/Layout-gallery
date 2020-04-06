import React from 'react';
import classnames from "classnames";

import './footer.scss';
import Button from "../button";
import CommentIcon from '../../assets/icons/commentIcon.svg';

export interface IFooterProps {
    blackDot?: number;
}

export default function Footer(blackDot: IFooterProps) {

    function createDots() {
        let circles = [];
        for (let i = 1; i <= 4; i++) {
          (blackDot.blackDot === i )? (circles.push(<span key={i} className={classnames('footer__dot', 'blackDot')}/>)) :
            (circles.push(<span key={i} className='footer__dot'/>))
        }
         return circles;
    }

    return (
        <div className ='footer'>
            <span className='footer__close-text'>Close</span>
            <div className='footer__circles'>
                {createDots()}
            </div>
            <Button className='footer__button'>
                <img className='footer__img' src={CommentIcon} alt="Comment Icon" />
            </Button>
        </div>
    );
}
