import React from 'react';
import { connect } from 'react-redux';

import s from './main.scss';
import Header from '../../components/Header';
import New from '../../components/New';
import My from '../../components/My';
import Footer from '../../components/Footer';
import { logout } from '../../actions/authActions';
import { getUserInfo } from '../../actions/userActions'

class Main extends React.Component {

	componentWillMount() {
		this.props.getUserInfo({ id: this.props.user.id });
	}

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
				/>
				<div className={s.contentWrapper}>
					<New />
					<My />
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
			backgroundImage: state.userInfo.backgroundImage
		},
		news: {},
		albums: {}
	}
}

export default connect(
	mapStateToProps,
	{
		logout,
		getUserInfo
	}
)(Main);