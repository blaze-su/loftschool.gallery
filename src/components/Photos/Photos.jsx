import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './photos.scss';

function Photos(props) {
    const images = props.images;

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
                    
                    { images.map((image, index) => (
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
                    )) }
                    
                    
                    {/*<li className={s.item}>
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
                    </li>*/}
                </ul>
            </div>
        </div>
    );
}

export default Photos;