import React, {useState, FC} from 'react';
import {Movies} from "../../@types/Movies";

interface MovieCollection {
    results: Movies[];
}

const MovieItem: FC<{ movie: Movies}> = ({movie}) => {
    return (
        <div className="movie-item">
            <img className="movie-item-image" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={'208px'}/>
            <p className="movie-item-title">{movie.title}</p>
            <p className="movie-item-year">{movie.release_date}</p>
        </div>
    );
};

export default MovieItem;
