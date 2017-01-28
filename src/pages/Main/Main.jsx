import React from 'react';
import { connect } from 'react-redux';

import s from './main.scss';
import Header from '../../components/Header';
import New from '../../components/New';
import My from '../../components/My';
import Footer from '../../components/Footer';
import { logout } from '../../actions/authActions';
import { editUserInfo } from '../../actions/userActions';
import { upload } from '../../actions/imagesActions';
import { editAlbum, deleteAlbum } from '../../actions/albumActions';

class Main extends React.Component {

	render() {
		return (
			<div className={s.wrapper}>
				<Header 
					logout={ this.props.logout }
					username={ this.props.user.username }
					description={ this.props.user.description }
					socials={ this.props.user.socials }
					mainImage={ this.props.user.mainImage }
					backgroundImage={ this.props.user.backgroundImage }
					uploadImage={ this.props.upload }
					id={this.props.user.id}
					onEditHandler={this.props.editUserInfo}
				/>
				<div className={s.contentWrapper}>
					<New news={this.props.news}/>
					<My 
						id={ this.props.user.id } 
						userImage={ this.props.user.userImage } 
						albums={this.props.albums}
						deleteAlbum={this.props.deleteAlbum}
						editAlbum={this.props.editAlbum}
						uploadImage={ this.props.upload }
						userId={this.props.user.id}
					/>
				</div>
				<Footer />
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		user: {
			id: state.auth.user.id,
			username: state.userInfo.username,
			description: state.userInfo.description,
			socials: state.userInfo.socials,
			mainImage: state.userInfo.mainImage,
			backgroundImage: state.userInfo.backgroundImage,
			userImage: state.userInfo.mainImage
		},
		news: state.news,
		albums: state.albums
	}
}

export default connect(
	mapStateToProps,
	{
		logout,
		upload,
		editUserInfo,
		editAlbum,
		deleteAlbum
	}
)(Main);