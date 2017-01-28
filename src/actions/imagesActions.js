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

export function getNews(quantity) {
    return dispatch => {
        const data = { skip: quantity };
        return axios.post('http://localhost:8080/images/news', data)
            .then((res) => {
                const images = res.data;
                localStorage.setItem('news', quantity + res.data.length);
                dispatch({ type: 'ADD_IMAGES', images });
            })
    }
}