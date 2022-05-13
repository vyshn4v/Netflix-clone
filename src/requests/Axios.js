import axios from 'axios';
import { } from './Request'

const Axios = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})
export default Axios;