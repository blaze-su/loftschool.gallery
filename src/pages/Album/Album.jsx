import React from 'react';
import s from './album.scss';
import HeaderAlbum from '../../components/HeaderAlbum';
import Photos from '../../components/Photos';
import Footer from '../../components/Footer';

function Album() {
    return (
		<div className={s.wrapper}>
			<HeaderAlbum />
			<div className={s.contentWrapper}>
				<Photos />
			</div>
			<Footer />
		</div>
    );
};

export default Album;