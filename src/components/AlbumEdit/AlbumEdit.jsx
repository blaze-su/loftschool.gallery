import React from 'react';
import Icon from 'react-icon-svg-symbol';

import s from './albumedit.scss';

import Button from './../PopupButton/PopupButton';
import DeleteButton from './../DeleteButton/DeleteButton';
import ImageUpload from './../ImagePreview/ImagePreview';

const Animation = require('./albumedit_anim');

class AlbumEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edited: false,
            title: '',
            description: '',
            mainImage: 'NO_IMAGE',
            id: this.props.id,
            userImage: this.props.userImage,
            userId: this.props.userId
        }

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.setMainImage = this.setMainImage.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
        Animation.anim(s.active);
    }

    onClickHandler() {
        this.setState({edited: !this.state.edited});
    }

    onDeleteClick() {
        this.props.deleteAlbum(this.props.id)
            .then(() => {
                this.setState({
                edited: !this.state.edited,
                title: '',
                description: '',
                mainImage: 'NO_IMAGE',
                });
            })
    }

    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    setMainImage(image) {
        this.setState({ mainImage: image });
    }

    onSave() {
        this.props.editAlbum(this.state)
            .then(() => {
                this.setState({
                edited: !this.state.edited,
                title: '',
                description: '',
                mainImage: 'NO_IMAGE',
                });
            })
    }


    render() {
        return (
            <div className={s.AlbumEdit}>
                <div className={s.editButton} onClick={this.onClickHandler}>
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="edit"
                        iconClassName={s.editIcon}
                    />
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
                            <h2 className={s.header__title}>Редактировать альбом</h2>
                            <div className={s.popupCloseIcon} onClick={this.onClickHandler}></div>
                        </header>
                        <main className={s.editPopup__main}>
                            <form action="" className={s.main__form}>
                                <label htmlFor="" className={s.form__label}>Название</label>
                                <input name="title" type="text" className={s.form__nameInput} onChange={this.onInputChange}/>
                                <label htmlFor="" className={s.form__label}>Описание</label>
                                <input name="description" type="text" className={s.form__descriptionInput} onChange={this.onInputChange}/>
                                <div className={s.editPopup__image}>
                                    <ImageUpload 
                                        text="Загрузить обложку" 
                                        type="editMain" 
                                        setMainImage={this.setMainImage } 
					                    uploadImage={ this.props.uploadImage }
                                    />
                                </div>
                            </form>
                        </main>
                        <div className={s.editPopup__buttons}>
                            <Button className="save" onClick={this.onSave}></Button>
                            <Button className="cancel" onClick={this.onClickHandler}></Button>
                            <div className={s.deleteButton}>
                                <DeleteButton onDeleteClick={this.onDeleteClick}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    };
    
};

export default AlbumEdit;