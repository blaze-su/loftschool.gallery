import React from 'react';

import s from './albumedit.scss';

import Button from './../PopupButton/PopupButton';

const Animation = require('./albumedit_anim');

class AlbumEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edited: false
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler() {
        this.setState({edited: !this.state.edited});
    }


    render() {
        return (
            <div className={s.AlbumEdit}>
                <div className={s.editButton} onClick={this.onClickHandler}>
                    <div className={s.editIcon}></div>
                </div>
                <div className={this.state.edited ?
                    s.editPopup_active
                    :
                    s.editPopup
                }>
                    <div className={s.editPopup__overlay} onClick={this.onClickHandler}></div>
                    <div className={this.state.edited ?
                        s.editPopup__container_active
                        :
                        s.editPopup__container
                    }>
                        <header className={s.editPopup__header}>
                            <h2>Редактировать профиль</h2>
                            <div className={s.popupCloseIcon} onClick={this.onClickHandler}></div>
                        </header>
                        <div className={s.editPopup__buttons}>
                            <Button className="cancel" onClick={this.onClickHandler}></Button>
                            <Button className="save"></Button>
                        </div>
                    </div>
                </div>
            </div>   
        );
    };
    
};

export default AlbumEdit;