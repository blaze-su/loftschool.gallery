import React from 'react';
import Icon from 'react-icon-svg-symbol';
import s from './my.scss';

function My() {
    return (
        <div className={s.my}>
            <a href='#' className={s.buttonAdd}>
                <Icon
                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                    symbolId="add"
                    iconClassName={s.addIcon}
                />
                <span className={s.addText}>Добавить</span>
            </a>
            <div className={s.container}>
                <h1 className={s.myTitle}>Мои альбомы</h1>
                <ul className={s.myList}>
                    <li className={s.myItem}>
                        <a href='#' className={s.myImage}>
                            <div className={s.myOverlay}>
                                <div className={s.myText}>
                                    <div className={s.myDescription}>Фотографии природы леса, енотов и оленей...</div>
                                    <div className={s.myWrapper}>
                                        <span className={s.myNumber}>18</span>
                                        <span className={s.myPhoto}> Фотографий</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className={s.myFooter}>
                            <a href='#' className={s.myEdit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <a href='' className={s.myLink}>
                                <h3 className={s.linkText}>Прогулки на лодке</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.myItem}>
                        <a href='#' className={s.myImage}>
                            <div className={s.myOverlay}>
                                <div className={s.myText}>
                                    <div className={s.myDescription}>Фотографии природы леса, енотов и оленей...</div>
                                    <div className={s.myWrapper}>
                                        <span className={s.myNumber}>18</span>
                                        <span className={s.myPhoto}> Фотографий</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className={s.myFooter}>
                            <a href='#' className={s.myEdit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <a href='' className={s.myLink}>
                                <h3 className={s.linkText}>Прогулки на лодке</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.myItem}>
                        <a href='#' className={s.myImage}>
                            <div className={s.myOverlay}>
                                <div className={s.myText}>
                                    <div className={s.myDescription}>Фотографии природы леса, енотов и оленей...</div>
                                    <div className={s.myWrapper}>
                                        <span className={s.myNumber}>18</span>
                                        <span className={s.myPhoto}> Фотографий</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className={s.myFooter}>
                            <a href='#' className={s.myEdit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <a href='' className={s.myLink}>
                                <h3 className={s.linkText}>Прогулки на лодке</h3>
                            </a>
                        </div>
                    </li>
                    <li className={s.myItem}>
                        <a href='#' className={s.myImage}>
                            <div className={s.myOverlay}>
                                <div className={s.myText}>
                                    <div className={s.myDescription}>Фотографии природы леса, енотов и оленей...</div>
                                    <div className={s.myWrapper}>
                                        <span className={s.myNumber}>18</span>
                                        <span className={s.myPhoto}> Фотографий</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className={s.myFooter}>
                            <a href='#' className={s.myEdit}>
                                <Icon
                                    fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                                    symbolId="edit"
                                    iconClassName={s.editIcon}
                                />
                            </a>
                            <a href='' className={s.myLink}>
                                <h3 className={s.linkText}>Прогулки на лодке</h3>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default My;