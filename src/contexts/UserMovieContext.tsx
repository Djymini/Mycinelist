import {createContext} from "react";
import {MovieType} from "../@types/MovieType";


interface UserMovieContext {
    favoriteMovie: MovieType[];
    setFavoriteMovie: React.Dispatch<React.SetStateAction<MovieType[]>>;
    seeingMovie: MovieType[];
    setSeeingMovie: React.Dispatch<React.SetStateAction<MovieType[]>>;
}

export const UserContext = createContext<UserMovieContext | undefined>(undefined);