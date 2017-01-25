import React from 'react';
import { connect } from 'react-redux';

import s from './addalbum.scss';
import Button from './../PopupButton/PopupButton';
import ImageUpload from './../ImagePreview/ImagePreview';

const Animation = require('./addalbum_anim');

class AddAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            title: '',
            mainImage: '',
            userID: ''
        }

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
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
                        <header className={s.addPopup__header}>
                            <h2 className={s.header__title}>Редактировать альбом</h2>
                            <div className={s.popupCloseIcon} onClick={this.onClickHandler}></div>
                        </header>
                        <main className={s.addPopup__main}>
                            <form action="" className={s.main__form}>
                                <label htmlFor="" className={s.form__label}>Название</label>
                                <input type="text" className={s.form__nameInput}/>
                                <label htmlFor="" className={s.form__label}>Описание</label>
                                <input type="text" className={s.form__descriptionInput}/>
                                <div className={s.addPopup__image}>
                                    <ImageUpload text="Загрузить обложку"/>
                                </div>
                            </form>
                        </main>
                        <div className={s.addPopup__buttons}>
                            <Button className="save"></Button>
                            <Button className="cancel" onClick={this.onClickHandler}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
};

export default connect(
    null,
    null
)(AddAlbum);