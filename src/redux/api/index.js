import axios from 'axios';

const baseURL = 'https://www.omdapi.com/?apiKey=ff0c3a5';

export const apiCall = (url, data, headers, method) => axios({
    method, 
    url: baseURL+ url,
    data,
    headers
});