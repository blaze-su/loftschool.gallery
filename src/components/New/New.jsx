import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './new.scss';
import NewInWorld from './../../components/NewInWorld';

function New() {
    return (
        <div className={s.new}>
            <div className={s.container}>
                <h1 className={s.mainTitle}>Новое в мире</h1>
                <ul className={s.albumList}>
                    <NewInWorld />
                    <NewInWorld />
                    <NewInWorld />
                </ul>
                <a href='#' className={s.buttonMore}>Показать еще</a>
            </div>
        </div>
    );
}

export default New;