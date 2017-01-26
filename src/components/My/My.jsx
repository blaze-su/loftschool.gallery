import React from 'react';
import Icon from 'react-icon-svg-symbol';
import AddAlbum from './../../components/AddAlbum/AddAlbum';
import AlbumEdit from './../../components/AlbumEdit/AlbumEdit';
import s from './my.scss';

function My(props) {
    return (
        <div className={s.my}>
            <AddAlbum id={props.id} userImage={ props.userImage } />
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
                            <AlbumEdit/>
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
                            <AlbumEdit/>
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
                            <AlbumEdit/>
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
                            <AlbumEdit/>
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