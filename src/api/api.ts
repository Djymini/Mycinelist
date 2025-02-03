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

export const get = (url: string, config: any = {}) => {
    const defaultParams = {
        api_key: "bbb18aeef38e4e6b4d2e948ab04abb3d",
        include_adult: false,
        include_video: false,
        language: "fr-FR"
    };

    const finalConfig = {
        ...config,
        params: {
            ...defaultParams,
            ...config.params
        }
    };

    return axios.get('https://api.themoviedb.org/3' + url, finalConfig)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
        })

}

export const getCineDb = (url: string, config?: {}) => {
    return axios.get('http://localhost:8080' + url, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const postCineDb = (url: string, data: any,  config?: {}) => {
    return axios.post('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const putCineDb = (url: string, data: any, config?: {}) => {
   return axios.put('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const deleteCineDb = (url: string, config?: {}) => {
    return axios.delete('http://localhost:8080' + url, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}