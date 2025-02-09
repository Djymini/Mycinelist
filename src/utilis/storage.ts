import {MovieType} from "../@types/MovieType";
import {MovieShortType} from "../@types/MovieShortType";

export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export const saveUsername = (username: string) => {
    localStorage.setItem('username', username);
};

export const getUsername = () => {
    return localStorage.getItem('username');
}

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const saveFavoriteMovie = (favoriteMovie: MovieShortType[]) =>{
    localStorage.setItem('favorite', JSON.stringify(favoriteMovie));
};

export const getFavoriteMovie = (): string | null => {
    return localStorage.getItem('favorite');
}