import React from 'react';
import Icon from 'react-icon-svg-symbol';
import AddAlbum from './../../components/AddAlbum/AddAlbum';
import AlbumItem from './../../components/AlbumItem';
import s from './my.scss';

function My() {
    return (
        <div className={s.my}>
            <AddAlbum/>
            <div className={s.container}>
                <h1 className={s.myTitle}>Мои альбомы</h1>
                <ul className={s.myList}>
                    <AlbumItem />
                    <AlbumItem />
                    <AlbumItem />
                    <AlbumItem />
                </ul>
            </div>
        </div>
    );
}

export default My;