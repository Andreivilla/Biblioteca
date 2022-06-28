
import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        'Content-Type': 'application/json',
        responseType: "json",
    }
});

axios.interceptors.request.use(

    (error) => {
        return Promise.reject(error);
    }
);


export default api