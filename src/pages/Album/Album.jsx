import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import s from './album.scss';
import HeaderAlbum from '../../components/HeaderAlbum';
import Photos from '../../components/Photos';
import Footer from '../../components/Footer';
import { getAlbumInfo } from '../../actions/albumActions';

class Album extends React.Component {
	constructor(props) {
		super(props);
		
		if(!this.props.location.query.album) browserHistory.push('/main'); 
	}

	componentWillMount() {
		this.props.getAlbumInfo(this.props.location.query.album)
			.then(res => {
				let album = res.data;
				const images = res.data.images;
				delete album.images;

				this.setState({
					album: album,
					images: images
				});
			})
	}

	render() {
		const album = this.state ? this.state.album : {};
		return (
			<div className={s.wrapper}>
				<HeaderAlbum album={ album } />
				<div className={s.contentWrapper}>
					<Photos />
				</div>
				<Footer />
			</div>
		);
	}
};

export default connect(
	null,
	{
		getAlbumInfo
	}
)(Album);