import React from 'react';

import './example-1.scss';
import Button from "../button";
import Footer from "../footer";

import { ARTICLE_CONTENT_1 as articleContent1 } from '../../constants/articleContent';
import { ARTICLE_CONTENT_2 as articleContent2 } from '../../constants/articleContent';
import Comment from "../comment";

export default function Example1() {
    return (
        <div className ='container'>
            <div className='view-1'>
                <span className='view-1__text-1'>Mark Manson</span>
                <span className='view-1__text-2'>The dark side of the digital nomad</span>
                <Button className='view-1__button'>Travel</Button>
                <Footer blackDot={1}/>
            </div>
            <div className='view-2'>
                <span className='view-2__content1'>{articleContent1}</span>
                <span className='view-2__content2'>{articleContent2}</span>
                <Footer blackDot={2}/>
            </div>
            <div className='view-3'>
                <div className='view-3__header'>
                    <span className='view-3__text'>Comments (45)</span>
                    <Button className='view-3__button'>X</Button>
                </div>
                <Comment/>
            </div>
        </div>
    );
}

