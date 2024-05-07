import axios, {AxiosInstance} from "axios";

export const Auth_URL: string = 'http://localhost:8080/'

export const api: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: Auth_URL,
})

api.interceptors.request.use((config)=> {
    config.headers.Authorization = `Bearer ${localStorage.getItem('session')}`
    config.headers["Content-Type"] = 'application/json'
    return config
})