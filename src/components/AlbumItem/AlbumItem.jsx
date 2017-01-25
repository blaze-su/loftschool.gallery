import React from 'react';
import Icon from 'react-icon-svg-symbol';
import AlbumEdit from './../../components/AlbumEdit/AlbumEdit';

import s from './albumitem.scss';

function AlbumItem() {
    return (
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
    );
}

export default AlbumItem;