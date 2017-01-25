import { combineReducers } from 'redux';

import auth from './reducers/auth';
import albums from './reducers/albums';
import userInfo from './reducers/userInfo';
import news from './reducers/news';

export default combineReducers({
    auth,
    albums,
    userInfo,
    news
});