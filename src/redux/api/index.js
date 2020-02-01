import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=c36362ed'

export const apiCall = (url, data, headers, method) => axios({
    method, 
    url: baseURL+ url,
    data,
    headers
});