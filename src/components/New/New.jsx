import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './new.scss';

function New() {
    return (
        <div className={s.new}>
            <div className={s.container}>
                <h1 className={s.mainTitle}>Новое в мире</h1>
                <ul className={s.albumList}>
                    <li className={s.albumItem}>
                        <a className={s.itemImage}>
                            <div className={s.itemOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.itemIcon}
                                /> 
                            </div>
                        </a>
                        <div className={s.albumInfo}>
                            <div className={s.albumAuthor}>
                                <a className={s.authorPhoto}>
                                    <div className={s.photoOverlay}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="more"
                                            iconClassName={s.photoIcon}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className={s.albumCaption}>
                                <p className={s.albumTitle}>Путешествие на лодке по озеру</p>
                                <div className={s.albumDescription}>
                                    <a href='#' className={s.albumComments}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="comments"
                                            iconClassName={s.commentsIcon}
                                        />
                                        <span className={s.quantityComments}>4</span>
                                    </a>
                                    <a href='#' className={s.albumLikes}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="like"
                                            iconClassName={s.likesIcon}
                                        />
                                        <span className={s.quantityLikes}>2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.albumFooter}>
                            <a href='#' className={s.albumLink}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="album"
                                    iconClassName={s.albumIcon}
                                />
                                <h3 className={s.albumMain}>Прогулки по воде</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.albumItem}>
                        <a className={s.itemImage}>
                            <div className={s.itemOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.itemIcon}
                                /> 
                            </div>
                        </a>
                        <div className={s.albumInfo}>
                            <div className={s.albumAuthor}>
                                <a className={s.authorPhoto}>
                                    <div className={s.photoOverlay}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="more"
                                            iconClassName={s.photoIcon}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className={s.albumCaption}>
                                <p className={s.albumTitle}>Путешествие на лодке по озеру</p>
                                <div className={s.albumDescription}>
                                    <a href='#' className={s.albumComments}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="comments"
                                            iconClassName={s.commentsIcon}
                                        />
                                        <span className={s.quantityComments}>4</span>
                                    </a>
                                    <a href='#' className={s.albumLikes}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="like"
                                            iconClassName={s.likesIcon}
                                        />
                                        <span className={s.quantityLikes}>2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.albumFooter}>
                            <a href='#' className={s.albumLink}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="album"
                                    iconClassName={s.albumIcon}
                                />
                                <h3 className={s.albumMain}>Прогулки по воде</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.albumItem}>
                        <a className={s.itemImage}>
                            <div className={s.itemOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.itemIcon}
                                /> 
                            </div>
                        </a>
                        <div className={s.albumInfo}>
                            <div className={s.albumAuthor}>
                                <a className={s.authorPhoto}>
                                    <div className={s.photoOverlay}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="more"
                                            iconClassName={s.photoIcon}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className={s.albumCaption}>
                                <p className={s.albumTitle}>Путешествие на лодке по озеру</p>
                                <div className={s.albumDescription}>
                                    <a href='#' className={s.albumComments}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="comments"
                                            iconClassName={s.commentsIcon}
                                        />
                                        <span className={s.quantityComments}>4</span>
                                    </a>
                                    <a href='#' className={s.albumLikes}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="like"
                                            iconClassName={s.likesIcon}
                                        />
                                        <span className={s.quantityLikes}>2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.albumFooter}>
                            <a href='#' className={s.albumLink}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="album"
                                    iconClassName={s.albumIcon}
                                />
                                <h3 className={s.albumMain}>Прогулки по воде</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.albumItem}>
                        <a className={s.itemImage}>
                            <div className={s.itemOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.itemIcon}
                                /> 
                            </div>
                        </a>
                        <div className={s.albumInfo}>
                            <div className={s.albumAuthor}>
                                <a className={s.authorPhoto}>
                                    <div className={s.photoOverlay}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="more"
                                            iconClassName={s.photoIcon}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className={s.albumCaption}>
                                <p className={s.albumTitle}>Путешествие на лодке по озеру</p>
                                <div className={s.albumDescription}>
                                    <a href='#' className={s.albumComments}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="comments"
                                            iconClassName={s.commentsIcon}
                                        />
                                        <span className={s.quantityComments}>4</span>
                                    </a>
                                    <a href='#' className={s.albumLikes}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="like"
                                            iconClassName={s.likesIcon}
                                        />
                                        <span className={s.quantityLikes}>2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.albumFooter}>
                            <a href='#' className={s.albumLink}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="album"
                                    iconClassName={s.albumIcon}
                                />
                                <h3 className={s.albumMain}>Прогулки по воде</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.albumItem}>
                        <a className={s.itemImage}>
                            <div className={s.itemOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.itemIcon}
                                /> 
                            </div>
                        </a>
                        <div className={s.albumInfo}>
                            <div className={s.albumAuthor}>
                                <a className={s.authorPhoto}>
                                    <div className={s.photoOverlay}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="more"
                                            iconClassName={s.photoIcon}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className={s.albumCaption}>
                                <p className={s.albumTitle}>Путешествие на лодке по озеру</p>
                                <div className={s.albumDescription}>
                                    <a href='#' className={s.albumComments}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="comments"
                                            iconClassName={s.commentsIcon}
                                        />
                                        <span className={s.quantityComments}>4</span>
                                    </a>
                                    <a href='#' className={s.albumLikes}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="like"
                                            iconClassName={s.likesIcon}
                                        />
                                        <span className={s.quantityLikes}>2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.albumFooter}>
                            <a href='#' className={s.albumLink}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="album"
                                    iconClassName={s.albumIcon}
                                />
                                <h3 className={s.albumMain}>Прогулки по воде</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.albumItem}>
                        <a className={s.itemImage}>
                            <div className={s.itemOverlay}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="loupe"
                                    iconClassName={s.itemIcon}
                                /> 
                            </div>
                        </a>
                        <div className={s.albumInfo}>
                            <div className={s.albumAuthor}>
                                <a className={s.authorPhoto}>
                                    <div className={s.photoOverlay}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="more"
                                            iconClassName={s.photoIcon}
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className={s.albumCaption}>
                                <p className={s.albumTitle}>Путешествие на лодке по озеру</p>
                                <div className={s.albumDescription}>
                                    <a href='#' className={s.albumComments}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="comments"
                                            iconClassName={s.commentsIcon}
                                        />
                                        <span className={s.quantityComments}>4</span>
                                    </a>
                                    <a href='#' className={s.albumLikes}>
                                        <Icon
                                            fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                            symbolId="like"
                                            iconClassName={s.likesIcon}
                                        />
                                        <span className={s.quantityLikes}>2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.albumFooter}>
                            <a href='#' className={s.albumLink}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="album"
                                    iconClassName={s.albumIcon}
                                />
                                <h3 className={s.albumMain}>Прогулки по воде</h3>
                            </a>
                        </div>
                    </li>
                </ul>
                <a href='#' className={s.buttonMore}>Показать еще</a>
            </div>
        </div>
    );
}

export default New;