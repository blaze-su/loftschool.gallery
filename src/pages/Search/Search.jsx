import React from 'react';

import Like from './../../components/Like/Like';
import AlbumHeaderEdit from '../../components/AlbumHeaderEdit/AlbumHeaderEdit';
import MainHeaderEdit from '../../components/MainHeaderEdit/MainHeaderEdit';
import AlbumEdit from './../../components/AlbumEdit/AlbumEdit';
import PhotoEdit from './../../components/Photos/Photo/Edit/PhotoEdit';
import AddAlbum from './../../components/AddAlbum/AddAlbum';
import Photos from './../../components/Photos/Photos.jsx';

import s from './search.scss';

function Search() {
    return (
        <section>
            <p className={s.title}>Search</p>
            <Like/>
            <Like/>
            <Like/>
            <AlbumHeaderEdit/>
            <MainHeaderEdit/>
            <AlbumEdit/>
            <AddAlbum/>
            <Photos/>
        </section>
    );
};

export default Search;