import React from 'react';

import s from './photoedit.scss';

import Button from './../../../PopupButton/PopupButton';
import DeleteButton from './../../../DeleteButton/DeleteButton';

const Animation = require('./photoedit_anim');

class PhotoEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edited: false,
            delete: false
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.HandleDelete = this.HandleDelete.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler() {
        this.setState({edited: !this.state.edited});
        this.setState({delete: false});   
    }

    HandleDelete() {
        this.setState({delete: !this.state.delete});    
    }


    render() {
        return (
            <div className={s.PhotoEdit}>
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
                            <h2>Редактировать Картинку</h2>
                            <div className={s.popupCloseIcon} onClick={this.onClickHandler}></div>
                        </header>
                        {this.state.delete ? 
                            <main className={s.delete_content}>
                                Удалить?
                            </main>
                            :
                            <main className={s.edit_content}>
                                Редактировать?
                            </main>
                        }
                        
                        <div className={s.editPopup__buttons}>
                            <Button className="cancel" onClick={this.onClickHandler}></Button>
                            <Button className="save"></Button>
                            <DeleteButton onClick={this.HandleDelete}/>
                        </div>
                    </div>
                </div>
            </div>   
        );
    };
    
};

export default PhotoEdit;