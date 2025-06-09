import axios from 'axios';

const BACKEND_PATH = "http://localhost:8000/api";

export const apiClient = axios.create({
    baseURL : BACKEND_PATH,
})