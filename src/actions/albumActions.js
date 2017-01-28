import axios from 'axios';

export function addAlbum(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/albums/add', data);
    }
}

export function deleteAlbum(id) {
    return dispatch => {
        const data = { id: id };
        return axios.post('http://localhost:8080/albums/delete', data);
    }
}

export function getUserAlbums(id) {
    return dispatch => {
        const data = { id: id };
        return axios.post('http://localhost:8080/albums/getUserAlbums', data)
            .then((res) => {
                const albums = res.data;
                dispatch({ type: 'ADD_ALBUMS', albums });
            });
    }
}

export function getAlbumInfo(id) {
    return dispatch => {
        const data = { id: id };
        return axios.post('http://localhost:8080/albums/getAlbumInfo', data);
    }
}

export function editAlbum(data) {
    return dispatch => {
        return axios.post('http://localhost:8080/albums/edit', data);
    }
}