import React from 'react';
import s from './album.scss';
import Photos from '../../components/Photos';
import Footer from '../../components/Footer';

function Album() {
    return (
		<div className={s.wrapper}>
			<div className={s.contentWrapper}>
				<Photos />
			</div>
			<Footer />
		</div>
    );
};

export default Album;