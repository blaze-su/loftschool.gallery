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
                            <AlbumItem 
                                key={index} 
                                _id={album._id} 
                                mainImage={album.mainImage} 
                                title={album.title} 
                                imagesCount={album.imagesCount} 
                                description={album.description}
                                deleteAlbum={this.props.deleteAlbum}
                                editAlbum={this.props.editAlbum}
					            uploadImage={ this.props.uploadImage }
						        userId={this.props.userId}
                                userImage={this.props.userImage}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default My;