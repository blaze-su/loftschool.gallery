import React from 'react';
import { map } from 'lodash';

import Icon from 'react-icon-svg-symbol';
import AddAlbum from './../../components/AddAlbum/AddAlbum';
import AlbumItem from './../../components/AlbumItem';
import s from './my.scss';

class My extends React.Component {
    render() {
        const albums = this.props.albums; 
        return (
            <div className={s.my}>
                <AddAlbum id={ this.props.id } userImage={ this.props.userImage } />
                <div className={s.container}>
                    <h1 className={s.myTitle}>Мои альбомы</h1>
                    <ul className={s.myList}>
                        { map(albums, (album, index) => (
                            <AlbumItem key={index} _id={album._id} mainImage={album.mainImage} title={album.title} imagesCount={album.imagesCount} description={album.description}/>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default My;
/*  
<AlbumItem mainImage="welcome.jpg" title="Первое" imagesCount="5" description="Короткое"/>
<AlbumItem mainImage="blog_.jpg" title="Второе" imagesCount="1000" description="Описание средней длины"/>
<AlbumItem mainImage="blog_.jpg" title="Третье" imagesCount="20" description="Самое длинное описание из тех, что есть на этой странице"/>
*/