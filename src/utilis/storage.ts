import {MovieType} from "../@types/MovieType";

export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const saveFavoriteMovie = (favoriteMovie: string) =>{
    localStorage.setItem('favorite', favoriteMovie);
};

export const getFavoriteMovie = (): string | null => {
    return localStorage.getItem('favorite');
}