import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import s from './album.scss';
import HeaderAlbum from '../../components/HeaderAlbum';
import Photos from '../../components/Photos';
import Footer from '../../components/Footer';
import { getAlbumInfo, editAlbum } from '../../actions/albumActions';
import { upload } from '../../actions/imagesActions';

class Album extends React.Component {
	constructor(props) {
		super(props);
		
		if(!this.props.location.query.album) browserHistory.push('/main'); 

		this.getAlbumInfo = this.getAlbumInfo.bind(this);
	}

	componentWillMount() {
		this.getAlbumInfo();
	}

	getAlbumInfo() {
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
		const images = this.state ? this.state.images : [];

		return (
			<div className={s.wrapper}>
				<HeaderAlbum 
					album={ album } 
					uploadImage={this.props.upload} 
					editAlbum={this.props.editAlbum} 
					id={this.props.location.query.album}
					userId={this.props.userId}
					userImage={this.props.userImage}
					getAlbumInfo={this.getAlbumInfo}
				/>
				<div className={s.contentWrapper}>
					<Photos images={images} />
				</div>
				<Footer />
			</div>
		);
	}
};

export default connect(
	(state) => { return {
		userId: state.auth.user.id,
		userImage: state.userInfo.mainImage
	}},
	{
		getAlbumInfo,
		upload,
		editAlbum
	}
)(Album);