import axios from 'axios';

// const baseUrl = 'http://8.140.195.25:8080';

export function getRaceInfo(params) {
    return axios.get('/accoder/contest', {
        params
    })
}