import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
require ('./assets/scss/fonts-load.scss');

import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Album from './pages/Album';
import Search from './pages/Search';


class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Welcome}/>
            <Route path="auth" components={Welcome} />
            <Route path="main" components={Main}/>
            <Route path="album" components={Album}/>
            <Route path="search" components={Search}/>
        </Route>
    </Router>,
    document.getElementById('root')
);