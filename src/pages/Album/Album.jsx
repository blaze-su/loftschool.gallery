import React from 'react';
import s from './album.scss';
import Header from '../../components/Header';
import New from '../../components/New';
import My from '../../components/My';
import Footer from '../../components/Footer';

export default class Album extends React.Component {
	render() {
		return (
			<div className={s.wrapper}>
				<Header />
				<New />
				<My />
				<Footer />
			</div>
		);
	}
}