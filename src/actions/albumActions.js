import axios from 'axios';

export function addAlbum(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/albums/add', data);
    }
}

export function deleteAlbum(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/albums/delete', data);
    }
}