import React from 'react';
import axios from 'axios';

import s from './album.scss';

class Album extends React.Component {
    constructor() {
        super();

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        axios.post('http://localhost:8080/users/register', { suceess: true });
    }
    render() {
        return (
            <section>
                <p className={s.title}>Album</p>
                <button onClick={this.onClickHandler}>Запрос</button>
            </section>
        );
    }
};

export default Album;