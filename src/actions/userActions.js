import axios from 'axios';

export function getUserInfo(userData) {
  return dispatch => {
        return axios.post('http://localhost:8080/users/info', userData).then((res) => {
          const user = res.data;
          dispatch({ type: 'SET_USER_INFO', user });
    });
  }
}

export function editUserInfo(userData) {
  return dispatch => {
      return axios.post('http://localhost:8080/users/edit', userData);
  }
}