import React from 'react';
import { connect } from 'react-redux';

require ('./assets/scss/fonts-load.scss');
import { getUserInfo } from './actions/userActions';
import { getNews } from './actions/imagesActions';
import { getUserAlbums } from './actions/albumActions';

class App extends React.Component {
    componentWillMount() {
		this.props.getUserInfo({ id: this.props.id }).catch(() => console.log('Ошибка при загрузке пользователя'));
		this.props.getNews(parseInt(localStorage.news)).catch(() => console.log('Ошибка при загрузке нового'));
		this.props.getUserAlbums(this.props.id).catch(() => console.log('Ошибка при загрузке альбомов'));
	}

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            id: state.auth.user.id
        }
    },
    {
        getNews,
        getUserAlbums,
        getUserInfo    
    }
)(App);