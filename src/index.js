import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';

import App from './App';
import Welcome from './pages/Welcome';
import Main from './pages/Main';
import Album from './pages/Album';
import Search from './pages/Search';
import rootReducer from './rootReducer';
import requireAuth from './utils/requireAuth';
import { setCurrentUser } from './actions/authActions';
import setAuthorizationToken from './utils/setAuthorizationToken';

const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

localStorage.setItem('news', 0);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" components={App}>
                <IndexRoute components={Welcome}/>
                <Route path="auth" components={Welcome} />
                <Route path="main" components={requireAuth(Main)}/>
                <Route path="album" components={requireAuth(Album)}/>
                <Route path="search" components={requireAuth(Search)}/>
            </Route>
        </Router>
    </Provider>,
    /*<Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" components={App}>
                <IndexRoute components={Welcome}/>
                <Route path="auth" components={Welcome} />
                <Route path="main" components={Main}/>
                <Route path="album" components={Album}/>
                <Route path="search" components={Search}/>
            </Route>
        </Router>
    </Provider>,*/
    document.getElementById('root')
);