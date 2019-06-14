import axios from 'axios';
const api = axios.create({
    baseURL: 'http://10.21.0.23:3333',
});

export default api;