import React from 'react';
<<<<<<< HEAD

import s from './photos.scss';

import photos_list from './photos_list';

import Photo from './Photo/Photo';
import Like from './../Like/Like';



const Animation = require('./photos_anim');

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onFullScreenOpen = this.onFullScreenOpen.bind(this);
        this.renderFullscreen = this.renderFullscreen.bind(this);
        this.changeFullscreenState = this.changeFullscreenState.bind(this);
        this.nextPhoto = this.nextPhoto.bind(this);
        this.previousPhoto = this.previousPhoto.bind(this);
        this.changeFullScreenPhoto = this.changeFullScreenPhoto.bind(this);
        this.onLike = this.onLike.bind(this);
        this.state = {
            fullscreen: false,
            photos: photos_list,
            currentPhoto: 0,
            currentID: 0,
        }
    }

    renderFullscreen() {
        return (
            <div className={s.fullscreen}>
                <div className={s.fullscreen__overlay} onClick={this.changeFullscreenState}></div>
                <div className={s.fullscreen__container}>
                    <div className={s.container__image}>
                        <img src={this.state.currentPhoto.image} alt={this.state.currentPhoto.title}/>
                    </div>
                    <div className={s.container__info}>
                        <div className={s.info__mainInfo}>
                            <div className={s.mainInfo__author}>{this.state.currentPhoto.author}</div>
                            <div className={s.mainInfo__likes}><Like likes={this.state.currentPhoto.likes} onLike={this.onLike}/></div>
                        </div>
                        <div className={s.info__description}>
                            <h3 className={s.description__title}>{this.state.currentPhoto.title}</h3>
                            <p className={s.description__text}>{this.state.currentPhoto.text}</p>
                        </div>
                        <div className={s.comments}>
                            <div className={s.comment}>
                                <h3>Тест</h3>
                            </div>
                        </div>
                        <button className={s.nextButton} onClick={() => {this.nextPhoto(this.state.currentPhoto.id)}}></button>
                        <button className={s.previousButton} onClick={() => {this.previousPhoto(this.state.currentPhoto.id)}}>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    changeFullscreenState() {
        this.setState({fullscreen: !this.state.fullscreen});
    }

    nextPhoto(id) {
        let newID = id + 1;
        if (newID === this.state.photos.length + 1) {
            newID = 1;
        }
        this.changeFullScreenPhoto(newID);
    }

    previousPhoto(id) {
        let newID = id - 1;
        if (newID === 0) {
            newID = this.state.photos.length;
        }
        this.changeFullScreenPhoto(newID);
    }

    changeFullScreenPhoto(id) {
        let currentPhoto = this.state.photos.filter(photo => photo.id == id)[0];
        this.setState({
            currentID: id,
            currentPhoto
            })
    }

    onFullScreenOpen(id) {
        console.log(id);
        let currentPhoto = this.state.photos.filter(photo => photo.id == id)[0];
        this.setState({
            fullscreen: !this.state.fullscreen,
            currentID: id,
            currentPhoto
            })
    }

    onLike(action) {
        let newPhoto = this.state.currentPhoto;
        if (action === 'add') {
            newPhoto.likes = newPhoto.likes + 1;
        } else {
            newPhoto.likes = newPhoto.likes - 1;
        }
        
        this.setState({currentPhoto: newPhoto})
    }

    componentDidMount() {
        Animation.anim(s.active);  
    }

    onClickHandler(e) {
        this.setState({fullscreen: !this.state.liked});
    } 


    render() {
        return (
            <div className={s.photos}>
                {this.state.photos.map(photo => <Photo 
                    key={photo.id} 
                    id={photo.id} 
                    image={photo.image} 
                    title={photo.title} 
                    likes={photo.likes}
                    comments={photo.comments}
                    onFullScreenOpen={this.onFullScreenOpen}
                />)}
                {this.state.fullscreen ? this.renderFullscreen() : ''}
            </div>
        );
    };
    
};
=======
import Icon from 'react-icon-svg-symbol';
import s from './photos.scss';

function Photos() {
    return (
        <div className={s.photos}>
        	<a href='#' className={s.buttonAdd}>
                <Icon
                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                    symbolId="add"
                    iconClassName={s.addIcon}
                />
                <span className={s.addText}>Добавить</span>
            </a>
            <div className={s.container}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a href='#' className={s.image}>
                            <div className={s.imageOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.iconLoupe}
                                /> 
                            </div>
                        </a>
                        <div className={s.photoDescription}>
                            <a href='#' className={s.photoComments}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="comments"
                                    iconClassName={s.commentsIcon}
                                />
                                <span className={s.quantityComments}>4</span>
                            </a>
                            <a href='#' className={s.photoLikes}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="like"
                                    iconClassName={s.likesIcon}
                                />
                                <span className={s.quantityLikes}>2</span>
                            </a>
                        </div>
                        <div className={s.footer}>
                            <a href='#' className={s.edit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <span className={s.photoTitle}>Прогулки на лодке</span>
                        </div>
                    </li>
                    <li className={s.item}>
                        <a href='#' className={s.image}>
                            <div className={s.imageOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.iconLoupe}
                                /> 
                            </div>
                        </a>
                        <div className={s.photoDescription}>
                            <a href='#' className={s.photoComments}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="comments"
                                    iconClassName={s.commentsIcon}
                                />
                                <span className={s.quantityComments}>4</span>
                            </a>
                            <a href='#' className={s.photoLikes}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="like"
                                    iconClassName={s.likesIcon}
                                />
                                <span className={s.quantityLikes}>2</span>
                            </a>
                        </div>
                        <div className={s.footer}>
                            <a href='#' className={s.edit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <span className={s.photoTitle}>Прогулки на лодке</span>
                        </div>
                    </li>
                    <li className={s.item}>
                        <a href='#' className={s.image}>
                            <div className={s.imageOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.iconLoupe}
                                /> 
                            </div>
                        </a>
                        <div className={s.photoDescription}>
                            <a href='#' className={s.photoComments}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="comments"
                                    iconClassName={s.commentsIcon}
                                />
                                <span className={s.quantityComments}>4</span>
                            </a>
                            <a href='#' className={s.photoLikes}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="like"
                                    iconClassName={s.likesIcon}
                                />
                                <span className={s.quantityLikes}>2</span>
                            </a>
                        </div>
                        <div className={s.footer}>
                            <a href='#' className={s.edit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <span className={s.photoTitle}>Прогулки на лодке</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
>>>>>>> 377a33dacf1aeb2110bfc661fb2d58a43d8b31ce

export default Photos;