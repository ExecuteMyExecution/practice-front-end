import axios from 'axios';

export function getRaceInfo(params) {
    return axios.get('/codeforces/contest', {
        params
    })
}
export function getRecnetRaceInfo(params) {
    return axios.get('/atcoder/contest', {
        params
    })
}
export function getProblemInfo(params) {
    return axios.get('/codeforces/contestproblem', {
        params
    })
}
export function seeCode(params) {
    return axios.get('/codeforces/submitcode', {
        params
    })
}
export function getStuInfo(params) {
    return axios.get('/home/page', {
        params
    })
}
export function getChangeInfo(params) {
    return axios.get('/codeforces/cinfo', {
        params
    })
}
export function getAtcoderInfo(params) {
    return axios.get('/atcoder/cinfo', {
        params
    })
}