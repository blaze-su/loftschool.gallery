import axios from 'axios';

export function upload(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/files/upload', data);
    }
}

export function addImages(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/images/add', data);
    }
}

export function deleteImage(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/images/delete', data);
    }
}