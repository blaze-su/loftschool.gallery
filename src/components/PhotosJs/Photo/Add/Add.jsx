import React from 'react';

import s from './add.scss';

import Button from './../../../PopupButton/PopupButton';
import DeleteButton from './../../../DeleteButton/DeleteButton';
import DranDrop from './../../../DragnDrop/DragnDrop';

import Icon from 'react-icon-svg-symbol';

class PhotoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            added: false,
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    componentDidMount() {

    }

    onClickHandler() {
        this.setState({added: !this.state.added});
    }

    render() {
        return (
            <div className={s.photoAlbum}>
              <a href='#' className={s.buttonAdd} onClick={this.onClickHandler}>
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="add"
                        iconClassName={s.addIcon}
                    />
                    <span className={s.addText}>Добавить</span>
                </a>
                <div className={this.state.added ?
                    s.addAlbum__popup_active
                    :
                    s.addAlbum__popup
                }>
                    <div className={s.popup__overlay} onClick={this.onClickHandler}></div>
                    <div className={this.state.added ?
                        s.popup__container_active
                        :
                        s.popup__container
                    }>
                        <header className={s.addPopup__header}>
                            <h2 className={s.header__title}>Добавить фотографии</h2>
                            <div className={s.popupCloseIcon} onClick={this.onClickHandler}></div>
                        </header>
                        <main className={s.addPopup__main}>
                            <span className={s.main__span}>Название</span>
                            <span className={s.main__title}>{this.props.name}</span>
                            <DranDrop/>
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

export default PhotoAdd;
