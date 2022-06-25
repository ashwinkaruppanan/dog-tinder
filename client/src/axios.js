import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tindr.herokuapp.com'

})

export default instance;