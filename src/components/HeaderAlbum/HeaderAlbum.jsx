import React from 'react';
import { browserHistory } from 'react-router';

import Icon from 'react-icon-svg-symbol';
import AlbumHeaderEdit from '../../components/AlbumHeaderEdit/AlbumHeaderEdit';
import s from './headeralbum.scss';

function HeaderAlbum(props) {
	const album = props.album ? props.album : {};
	const mainImage = album.mainImage ? require(`../../../server/files/${props.album.mainImage}`) : require(`../../../server/files/no_photo.jpg`);
	const userImage = album.userImage ? require(`../../../server/files/${props.album.userImage}`) : require(`../../../server/files/bg_header_album.jpg`);
    return (
<header className={s.headerAlbum} style={{ background: `url('${mainImage}') center 50% no-repeat`}} >
            <div className={s.top}>
            	<div className={s.user}>
					<div className={s.userPhoto} style={{ background: `url('${userImage}') no-repeat 50% 50%`} } ></div>
            		<div className={s.userName}>{album.username}</div>
            	</div>
            	<div className={s.albumInfo}>
            		<div className={s.albumTitle}>
						{album.title}
            		</div>
            		<div className={s.albumDescription}>
						{album.description}
            		</div>
            	</div>
				<AlbumHeaderEdit 
					uploadImage={props.uploadImage} 
					editAlbum={props.editAlbum} 
					id={props.id}
					userId={props.userId}
					userImage={props.userImage}
					getAlbumInfo={props.getAlbumInfo}
				/>
				<a className={s.homeButton} onClick={() => browserHistory.push('/main')}>
                    <Icon
                        fileURL={process.env.PUBLIC_URL + '/images/icons/sprite.svg'}
                        symbolId="home"
                        iconClassName={s.iconHome}
                     /> 
                    <span className={s.buttonText}>На главную</span>
                </a>
            </div>
            <div className={s.albumCaption}>
            	<ul className={s.albumList}>
            		<li className={s.albumItem}>
						<div className={s.itemQuantity}>{album.imagesCount}</div>
            			<div className={s.itemName}>Фотографий</div>
            		</li>
            		<li className={s.albumItem}>
            			<div className={s.itemQuantity}>{album.likesCount}</div>
            			<div className={s.itemName}>Лайков</div>
            		</li>
            		<li className={s.albumItem}>
            			<div className={s.itemQuantity}>{album.commentsCount}</div>
            			<div className={s.itemName}>Комментария</div>
            		</li>
            	</ul>
            </div>
        </header>
    );
}

export default HeaderAlbum;