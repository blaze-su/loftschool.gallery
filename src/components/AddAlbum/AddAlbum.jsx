import React from 'react';

import s from './addalbum.scss';

import Button from './../PopupButton/PopupButton';

const Animation = require('./addalbum_anim');

class AddAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler() {
        this.setState({pressed: !this.state.pressed});
    }


    render() {
        return (
            <div className={s.addAlbum}>
                <div className={s.addAlbum__button} onClick={this.onClickHandler}>
                    <div className={s.addAlbum__icon}></div>
                    <span className={s.addAlbum__text}>Добавить</span>
                </div>
                <div className={this.state.pressed ?
                    s.addAlbum__popup_active
                    :
                    s.addAlbum__popup
                }>
                    <div className={s.popup__overlay} onClick={this.onClickHandler}></div>
                    <div className={this.state.pressed ?
                        s.popup__container_active
                        :
                        s.popup__container
                    }>
                        <header className={s.popup__header}>
                            <h2>Добавить Альбом</h2>
                            <div className={s.popupCloseIcon} onClick={this.onClickHandler}></div>
                        </header>
                        <div className={s.popup__buttons}>
                            <Button className="cancel" onClick={this.onClickHandler}></Button>
                            <Button className="save"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
};

export default AddAlbum;