import React from 'react';
import { map } from 'lodash';

import Icon from 'react-icon-svg-symbol';
import s from './new.scss';
import Photos from './../PhotosJs/Photos';

function New(props) {
    const news = props.news;
    return (
        <div className={s.new}>
            <div className={s.container}>
                <h1 className={s.mainTitle}>Новое в мире</h1>
                <ul className={s.albumList}>
                    <Photos type="main"/>
                </ul>
                <a href='#' className={s.buttonMore}>Показать еще</a>
            </div>
        </div>
    );
}

export default New;