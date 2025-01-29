import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const {status} = error.response;
        switch (status) {
            case 400:
                console.log("ERROR 400");
                break;
            case 401:
                console.log("ERROR 401");
                console.log(Promise.reject(error?.response ?? error));
                return Promise.reject(error?.response ?? error);
            case 403:
                console.log("ERROR 403");
                break;
            case 404:
                console.log("ERROR 404");
                break
            case 500:
                console.log("ERROR 500");
                break;
            default:
                break;
        }
    }
);

export const get = (url: string, config?: {}) => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    axios.defaults.params = {
        api_key: "bbb18aeef38e4e6b4d2e948ab04abb3d",
        include_adult: false,
        include_video: false,
        language: "fr-FR"
    }
    return axios.get(url, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
        })

}

export const postCineDb = (url: string, data: any,  config?: {}) => {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.post(url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const putCineDb = (url: string, data: any, config?: {}) => {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.put(url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const deleteCineDb = (url: string, config?: {}) => {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.delete(url, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}