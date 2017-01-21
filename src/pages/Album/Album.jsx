import React from 'react';
import axios from 'axios';

import s from './album.scss';

class Album extends React.Component {
    constructor() {
        super();

        this.signupButtonHandler = this.signupButtonHandler.bind(this);
        this.signinButtonHandler = this.signinButtonHandler.bind(this);
    }

    signupButtonHandler() {
        const query = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
        axios.post('http://localhost:8080/users/register', query);
    }

    signinButtonHandler() {
        const credentials = {
            username: '',
            password: 'password'
        }
        axios.post('http://localhost:8080/users/signin', credentials);
    }

    editButtonHandler() {
        const data = {
            _id: '588322803dc53e31b457b3bd',
            mainImage: 'main',
            backgroundImage: 'back',
            socials: {
                email: 'mail@mail.ru',
                fb: 'facebook'
            }
        };
        axios.post('http://localhost:8080/users/edit', data);
    }

    render() {
        return (
            <section>
                <p className={s.title}>Album</p>
                <button onClick={this.signupButtonHandler} >Создать</button>
                <button onClick={this.signinButtonHandler} >Войти</button>
                <button onClick={this.editButtonHandler} >Редактировать</button>
            </section>
        );
    }
};

export default Album;