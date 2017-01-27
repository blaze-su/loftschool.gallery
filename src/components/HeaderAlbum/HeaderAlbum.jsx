import React from 'react';
import Icon from 'react-icon-svg-symbol';
import AlbumHeaderEdit from '../../components/AlbumHeaderEdit/AlbumHeaderEdit';
import s from './headeralbum.scss';

function HeaderAlbum(props) {
	const album = props.album ? props.album : {};
    return (
        <header className={s.headerAlbum}>
            <div className={s.top}>
            	<div className={s.user}>
            		<div className={s.userPhoto}></div>
            		<div className={s.userName}>{ album.username }</div>
            	</div>
            	<div className={s.albumInfo}>
            		<div className={s.albumTitle}>
						Лесные прогулки
            		</div>
            		<div className={s.albumDescription}>Фотографии природы леса, енотов и оленей. Как прекрасно сойти на дальней станции и пройтись по полю босиком. И чтобы никто не беспокоил бродить влюбленным в тишину. Запах мёда, лесных оленей и енотов будоражит нутро.
            		</div>
            	</div>
                <AlbumHeaderEdit/>
                <a className={s.homeButton}>
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
            			<div className={s.itemQuantity}>18</div>
            			<div className={s.itemName}>Фотографий</div>
            		</li>
            		<li className={s.albumItem}>
            			<div className={s.itemQuantity}>12</div>
            			<div className={s.itemName}>Лайков</div>
            		</li>
            		<li className={s.albumItem}>
            			<div className={s.itemQuantity}>4</div>
            			<div className={s.itemName}>Комментария</div>
            		</li>
            	</ul>
            </div>
        </header>
    );
}

export default HeaderAlbum;