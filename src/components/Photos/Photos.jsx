import React from 'react';
import Icon from 'react-icon-svg-symbol';
import Add from './../../components/PhotosJs/Photo/Add/Add';
import NewInWorld from './../../components/NewInWorld/NewInWorld';
import s from './photos.scss';

function Photos(props) {
    const images = props.images;

    return (
        <div className={s.photos}>
        	<Add />
            <div className={s.container}>
                <ul className={s.list}>
                    
                    {props.type === 'album' ? images.map((image, index) => (
                        <li className={s.item} key={index}>
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
                                    <span className={s.quantityComments}>{image.commentsCount}</span>
                                </a>
                                <a href='#' className={s.photoLikes}>
                                    <Icon
                                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                        symbolId="like"
                                        iconClassName={s.likesIcon}
                                    />
                                    <span className={s.quantityLikes}>{image.likesCount}</span>
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
                                <span className={s.photoTitle}>{image.title}</span>
                            </div>
                        </li>                      
                    )                   
                    )
                    :
                    <NewInWorld/>
                 }
                </ul>
            </div>
        </div>
    );
}

export default Photos;