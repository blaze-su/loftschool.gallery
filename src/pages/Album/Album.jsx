
import React from 'react';
import s from './album.scss';
import HeaderAlbum from '../../components/HeaderAlbum';
import Footer from '../../components/Footer';
import Photos from './../../components/PhotosJs/Photos.jsx';

function Album() {
    return (
		<div className={s.wrapper}>
			<HeaderAlbum />
			<div className={s.contentWrapper}>
				<Photos/>
			</div>
			<Footer />
		</div>
    );
};

export default Album;
